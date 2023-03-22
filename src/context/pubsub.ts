import type { Message } from '@prisma/client'
import { PubSub } from "graphql-subscriptions"
import { TypedPubSub } from "typed-graphql-subscriptions"

export type PubSubChannels = {
  newMessage: [string, Message]
}

export const pubsub = new TypedPubSub<PubSubChannels>(new PubSub())