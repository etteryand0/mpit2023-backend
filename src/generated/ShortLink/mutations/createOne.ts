import { mutationField, nonNull } from 'nexus'

export const ShortLinkCreateOneMutation = mutationField('createOneShortLink', {
  type: nonNull('ShortLink'),
  args: {
    data: nonNull('ShortLinkCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.shortLink.create({
      data,
      ...select,
    })
  },
})
