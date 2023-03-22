import { mutationField, nonNull } from 'nexus'

export const RoomDeleteManyMutation = mutationField('deleteManyRoom', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'RoomWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.room.deleteMany({ where } as any)
  },
})
