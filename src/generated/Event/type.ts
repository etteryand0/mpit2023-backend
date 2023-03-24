import { objectType } from 'nexus'

export const Event = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Event',
  definition(t) {
    t.string('id')
    t.boolean('approved')
    t.string('title')
    t.string('shortDescription')
    t.string('description')
    t.string('roomId')
    t.field('date', { type: 'DateTime' })
    t.nullable.string('image')
    t.nullable.string('userId')
    t.list.field('participants', {
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
        return root.participants
      },
    })
    t.nullable.field('chat', {
      type: 'Chat',
      resolve(root: any) {
        return root.chat
      },
    })
    t.nullable.field('issuedBy', {
      type: 'User',
      resolve(root: any) {
        return root.issuedBy
      },
    })
    t.field('room', {
      type: 'Room',
      resolve(root: any) {
        return root.room
      },
    })
    t.list.field('responsibles', {
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
        return root.responsibles
      },
    })
    t.list.field('categories', {
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
        orderBy: 'CategoryOrderByWithRelationInput',
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum',
      },
      resolve(root: any) {
        return root.categories
      },
    })
    t.list.field('shortLinks', {
      type: 'ShortLink',
      args: {
        where: 'ShortLinkWhereInput',
        orderBy: 'ShortLinkOrderByWithRelationInput',
        cursor: 'ShortLinkWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ShortLinkScalarFieldEnum',
      },
      resolve(root: any) {
        return root.shortLinks
      },
    })
    t.field('_count', {
      type: 'EventCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
