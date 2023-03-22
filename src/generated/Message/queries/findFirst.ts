import { queryField, list } from 'nexus'

export const MessageFindFirstQuery = queryField('findFirstMessage', {
  type: 'Message',
  args: {
    where: 'MessageWhereInput',
    orderBy: list('MessageOrderByWithRelationInput'),
    cursor: 'MessageWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('MessageScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.message.findFirst({
      ...args,
      ...select,
    })
  },
})
