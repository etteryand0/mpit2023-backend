import { verify } from 'jsonwebtoken'
import type prismaClient from '../context/prisma'
import { IncomingMessage } from 'http'
import { UserRole } from '@prisma/client'

export const JWT_SECRET = process.env.JWT_SECRET

interface Token {
  userId: string
}

export const getUser = async (
  request: IncomingMessage,
  prisma: typeof prismaClient,
): Promise<{ id: string, role: UserRole } | null> => {
  const userId = getUserId(request)

  if (!userId) {
    return null
  }

  const user = await prisma.user.findUnique({ where: { id: userId }, select: { id: true, role: true } })

  if (!user) {
    return null
  }

  return { id: user.id, role: user.role }
}

const getUserId = (request: IncomingMessage) => {
  const authorization = request.headers.authorization
  if (!authorization) {
    return null
  }

  const bearerToken = authorization.split('Bearer ')[1]

  if (!bearerToken) {
    return null
  }

  try {
    const verifiedToken = verify(bearerToken, process.env.JWT_SECRET as string) as unknown as Token
    return verifiedToken.userId
  } catch (e) {
    console.log(e)
  }

  return null
}

export default getUser
