import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
    t.string('username')
    t.string('password')
    t.field('createdAt', { type: 'DateTime' })
    t.nullable.field('profile', {
      type: 'Profile',
      resolve(root: any) {
        return root.profile
      },
    })
    t.list.field('messages', {
      type: 'Message',
      args: {
        where: 'MessageWhereInput',
        orderBy: 'MessageOrderByWithRelationInput',
        cursor: 'MessageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'MessageScalarFieldEnum',
      },
      resolve(root: any) {
        return root.messages
      },
    })
    t.list.field('chats', {
      type: 'Chat',
      args: {
        where: 'ChatWhereInput',
        orderBy: 'ChatOrderByWithRelationInput',
        cursor: 'ChatWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ChatScalarFieldEnum',
      },
      resolve(root: any) {
        return root.chats
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
