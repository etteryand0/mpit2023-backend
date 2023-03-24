import { queryField, nonNull, list } from 'nexus'

export const ShortLinkFindManyQuery = queryField('findManyShortLink', {
  type: nonNull(list(nonNull('ShortLink'))),
  args: {
    where: 'ShortLinkWhereInput',
    orderBy: list('ShortLinkOrderByWithRelationInput'),
    cursor: 'ShortLinkWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ShortLinkScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.shortLink.findMany({
      ...args,
      ...select,
    })
  },
})
