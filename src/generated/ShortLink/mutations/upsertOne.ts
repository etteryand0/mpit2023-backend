import { mutationField, nonNull } from 'nexus'

export const ShortLinkUpsertOneMutation = mutationField('upsertOneShortLink', {
  type: nonNull('ShortLink'),
  args: {
    where: nonNull('ShortLinkWhereUniqueInput'),
    create: nonNull('ShortLinkCreateInput'),
    update: nonNull('ShortLinkUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.shortLink.upsert({
      ...args,
      ...select,
    })
  },
})
