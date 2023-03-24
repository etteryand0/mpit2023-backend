import { queryField, list } from 'nexus'

export const ShortLinkFindFirstQuery = queryField('findFirstShortLink', {
  type: 'ShortLink',
  args: {
    where: 'ShortLinkWhereInput',
    orderBy: list('ShortLinkOrderByWithRelationInput'),
    cursor: 'ShortLinkWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ShortLinkScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.shortLink.findFirst({
      ...args,
      ...select,
    })
  },
})
