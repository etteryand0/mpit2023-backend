import { IncomingMessage, ServerResponse } from 'http'
import getUser from '../utils/getUser'
import prisma from './prisma'
import { UserRole } from '@prisma/client'
import { pubsub } from './pubsub'

export interface Context extends Api {
  prisma: typeof prisma
  user: { id: string, role: UserRole } | null
  select: any
  pubsub: typeof pubsub
}

interface Api {
  req: IncomingMessage
  res: ServerResponse<IncomingMessage>
}

export async function createContext({ req, res }: Api): Promise<Context> {
  return {
    req,
    res,
    user: await getUser(req, prisma),
    prisma,
    pubsub,
    select: {},
  }
}
