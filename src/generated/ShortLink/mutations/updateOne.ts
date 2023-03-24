import { mutationField, nonNull } from 'nexus'

export const ShortLinkUpdateOneMutation = mutationField('updateOneShortLink', {
  type: nonNull('ShortLink'),
  args: {
    data: nonNull('ShortLinkUpdateInput'),
    where: nonNull('ShortLinkWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.shortLink.update({
      where,
      data,
      ...select,
    })
  },
})
