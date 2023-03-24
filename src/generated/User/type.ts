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
    t.field('createdAt', { type: 'DateTime' })
    t.string('password')
    t.field('role', { type: 'UserRole' })
    t.nullable.string('parentId')
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
    t.nullable.field('parent', {
      type: 'User',
      resolve(root: any) {
        return root.parent
      },
    })
    t.nullable.field('child', {
      type: 'User',
      resolve(root: any) {
        return root.child
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
    t.list.field('eventsResponsible', {
      type: 'Event',
      args: {
        where: 'EventWhereInput',
        orderBy: 'EventOrderByWithRelationInput',
        cursor: 'EventWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'EventScalarFieldEnum',
      },
      resolve(root: any) {
        return root.eventsResponsible
      },
    })
    t.list.field('eventsIssued', {
      type: 'Event',
      args: {
        where: 'EventWhereInput',
        orderBy: 'EventOrderByWithRelationInput',
        cursor: 'EventWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'EventScalarFieldEnum',
      },
      resolve(root: any) {
        return root.eventsIssued
      },
    })
    t.list.field('eventsParticipating', {
      type: 'Event',
      args: {
        where: 'EventWhereInput',
        orderBy: 'EventOrderByWithRelationInput',
        cursor: 'EventWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'EventScalarFieldEnum',
      },
      resolve(root: any) {
        return root.eventsParticipating
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
