import { mutationField, nonNull } from 'nexus'

export const RoomUpdateOneMutation = mutationField('updateOneRoom', {
  type: nonNull('Room'),
  args: {
    data: nonNull('RoomUpdateInput'),
    where: nonNull('RoomWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.room.update({
      where,
      data,
      ...select,
    })
  },
})
