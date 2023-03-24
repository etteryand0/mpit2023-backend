import { mutationField, nonNull } from 'nexus'

export const ShortLinkDeleteOneMutation = mutationField('deleteOneShortLink', {
  type: 'ShortLink',
  args: {
    where: nonNull('ShortLinkWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.shortLink.delete({
      where,
      ...select,
    })
  },
})
