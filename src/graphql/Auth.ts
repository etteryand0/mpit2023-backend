import { nonNull, objectType, queryField, mutationField, inputObjectType } from 'nexus'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { ApolloServerErrorCode } from '@apollo/server/errors'
import { GraphQLError } from 'graphql'
import { UserRole } from '@prisma/client'

const JWT_SECRET = process.env.JWT_SECRET

export const GQLToken = objectType({
  name: 'Token',
  definition(t) {
    t.string('token')
  },
})

export const MeQuery = queryField('me', {
  type: nonNull('User'),
  resolve(_parent, _args, { prisma, user }) {
    if (!user) {
      throw new GraphQLError("Unauthorized", { extensions: { code: 401 } })
    }

    return prisma.user.findUnique({ 
      where: {
        id: user.id
      }
    })
  }
})

export const SignUpInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SignUpInput',
  definition(t) {
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
  },
})

export const SignInInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SignInInput',
  definition(t) {
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
  },
})


export const SignUpMutation = mutationField('signup', {
  type: nonNull('Token'),
  args: {
    data: nonNull('SignUpInput'),
  },
  async resolve(_parent, { data }, { prisma, user }) {
    if (user) {
      throw new GraphQLError("Already signed in", { extensions: { code: 400 } })
    }

    data.password = await hash(data.password, 10)

    const userId = (await prisma.user.create({
      data: {
        role: UserRole.Student,
        ...data,
      },
      select: { id: true },
    })).id

    await prisma.profile.create({
      data: {
        user: {connect: { id: userId }}
      }
    })

    const token = sign({ userId }, JWT_SECRET)

    return { token }
  }
})

export const SignIn = mutationField('login', {
  type: nonNull('Token'),
  args: {
    data: nonNull('SignInInput'),
  },
  async resolve(_parent, { data }, { prisma, user }) {
    if (user) {
      throw new GraphQLError("Already signed in", { extensions: { code: 400 } })
    }

    const userfound = await prisma.user.findUnique({
      where: { username: data.username },
      select: { password: true, id: true }
    })

    if (!userfound) {
      throw new GraphQLError('Incorrect password or username', { extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT } })
    }

    const passwordValid = await compare(data.password, userfound.password)
    if (!passwordValid) {
      throw new GraphQLError('Incorrect password or username', { extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT } })
    }

    const token = sign({ userId: userfound.id }, JWT_SECRET)

    return { token }
  }
})