import { mutationField, nonNull } from 'nexus'

export const RoomUpdateManyMutation = mutationField('updateManyRoom', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('RoomUpdateManyMutationInput'),
    where: 'RoomWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.room.updateMany(args as any)
  },
})
