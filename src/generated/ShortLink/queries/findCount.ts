import { queryField, nonNull, list } from 'nexus'

export const ShortLinkFindCountQuery = queryField('findManyShortLinkCount', {
  type: nonNull('Int'),
  args: {
    where: 'ShortLinkWhereInput',
    orderBy: list('ShortLinkOrderByWithRelationInput'),
    cursor: 'ShortLinkWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ShortLinkScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.shortLink.count(args as any)
  },
})
