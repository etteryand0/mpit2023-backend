import { mutationField, nonNull } from 'nexus'

export const ProfileDeleteManyMutation = mutationField('deleteManyProfile', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProfileWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.profile.deleteMany({ where } as any)
  },
})
