import { pubsub } from '../context/pubsub'
import {inputObjectType, mutationField, nonNull, stringArg, subscriptionField} from 'nexus'

export const SendMessageInput = inputObjectType({
  name: "SendMessageInput",
  definition(t) {
    t.nonNull.string("message"),
    t.nonNull.string("chatId")
  },
})

export const SendMessage = mutationField('sendMessage', {
  type: nonNull('Message'),
  args: {
    data: nonNull('SendMessageInput')
  },
  async resolve(_parent, { data: { chatId, message } }, { prisma, select, pubsub, user }) {
    const prismaMessage = await prisma.message.create({
      data: {
        message,
        chat: { connect: { id: chatId } },
        sender: { connect: { id: user.id }}
      },
      ...select,
    })

    await pubsub.publish('newMessage', prismaMessage.chatId, prismaMessage)

    return prismaMessage
  },
})

export const MessageSubscription = subscriptionField('chat', {
  type: 'Message',
  args: {
    chatId: nonNull(stringArg()),
  },
  subscribe: (_root, args, _ctx) => {
    return pubsub.asyncIterator('newMessage', args.chatId)
  },
  resolve(message) {
    return message
  },
})