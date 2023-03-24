import { queryField, list } from 'nexus'

export const ShortLinkAggregateQuery = queryField('aggregateShortLink', {
  type: 'AggregateShortLink',
  args: {
    where: 'ShortLinkWhereInput',
    orderBy: list('ShortLinkOrderByWithRelationInput'),
    cursor: 'ShortLinkWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.shortLink.aggregate({ ...args, ...select }) as any
  },
})
