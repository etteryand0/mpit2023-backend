import { mutationField, nonNull } from 'nexus'

export const RoomDeleteOneMutation = mutationField('deleteOneRoom', {
  type: 'Room',
  args: {
    where: nonNull('RoomWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.room.delete({
      where,
      ...select,
    })
  },
})
