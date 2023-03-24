import { nonNull, objectType, queryField, mutationField, inputObjectType } from 'nexus'
import { compare, hash } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { ApolloServerErrorCode } from '@apollo/server/errors'
import { GraphQLError } from 'graphql'
import { UserRole } from '@prisma/client'

const JWT_SECRET = process.env.JWT_SECRET

export const GQLToken = objectType({
  name: 'UserAndToken',
  definition(t) {
    t.nonNull.string('token')
    t.nonNull.field('user', { type: 'User' })
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
  type: nonNull('UserAndToken'),
  args: {
    data: nonNull('SignUpInput'),
  },
  async resolve(_parent, { data }, { prisma }) {
    data.password = await hash(data.password, 10)

    const user = await prisma.user.create({
      data: {
        role: UserRole.Student,
        ...data,
      },
    })

    await prisma.profile.create({
      data: {
        user: {connect: { id: user.id }}
      }
    })

    const token = sign({ userId: user.id }, JWT_SECRET)

    return { token, user }
  }
})

export const SignIn = mutationField('login', {
  type: nonNull('UserAndToken'),
  args: {
    data: nonNull('SignInInput'),
  },
  async resolve(_parent, { data }, { prisma }) {
    const user = await prisma.user.findUnique({
      where: { username: data.username },
    })

    if (!user) {
      throw new GraphQLError('Incorrect password or username', { extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT } })
    }

    const passwordValid = await compare(data.password, user.password)
    if (!passwordValid) {
      throw new GraphQLError('Incorrect password or username', { extensions: { code: ApolloServerErrorCode.BAD_USER_INPUT } })
    }

    const token = sign({ userId: user.id }, JWT_SECRET)

    return { token, user }
  }
})