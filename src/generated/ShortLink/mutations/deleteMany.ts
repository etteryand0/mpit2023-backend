import { mutationField, nonNull } from 'nexus'

export const ShortLinkDeleteManyMutation = mutationField(
  'deleteManyShortLink',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ShortLinkWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.shortLink.deleteMany({ where } as any)
    },
  },
)
