import { objectType } from 'nexus'

export const Chat = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Chat',
  definition(t) {
    t.string('id')
    t.field('createdAt', { type: 'DateTime' })
    t.list.field('members', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByWithRelationInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum',
      },
      resolve(root: any) {
        return root.members
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
    t.field('_count', {
      type: 'ChatCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
