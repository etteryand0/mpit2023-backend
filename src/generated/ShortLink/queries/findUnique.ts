import { queryField, nonNull } from 'nexus'

export const ShortLinkFindUniqueQuery = queryField('findUniqueShortLink', {
  type: 'ShortLink',
  args: {
    where: nonNull('ShortLinkWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.shortLink.findUnique({
      where,
      ...select,
    })
  },
})
