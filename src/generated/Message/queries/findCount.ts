import { queryField, nonNull, list } from 'nexus'

export const MessageFindCountQuery = queryField('findManyMessageCount', {
  type: nonNull('Int'),
  args: {
    where: 'MessageWhereInput',
    orderBy: list('MessageOrderByWithRelationInput'),
    cursor: 'MessageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MessageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.message.count(args as any)
  },
})
