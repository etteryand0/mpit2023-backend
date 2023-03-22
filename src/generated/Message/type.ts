import { objectType } from 'nexus'

export const Message = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Message',
  definition(t) {
    t.string('id')
    t.string('message')
    t.string('userId')
    t.string('chatId')
    t.field('sentDate', { type: 'DateTime' })
    t.field('sender', {
      type: 'User',
      resolve(root: any) {
        return root.sender
      },
    })
    t.field('chat', {
      type: 'Chat',
      resolve(root: any) {
        return root.chat
      },
    })
  },
})
