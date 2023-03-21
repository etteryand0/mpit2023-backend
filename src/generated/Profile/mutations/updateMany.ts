import { mutationField, nonNull } from 'nexus'

export const ProfileUpdateManyMutation = mutationField('updateManyProfile', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ProfileUpdateManyMutationInput'),
    where: 'ProfileWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.profile.updateMany(args as any)
  },
})
