import { mutationField, nonNull } from 'nexus'

export const RoomCreateOneMutation = mutationField('createOneRoom', {
  type: nonNull('Room'),
  args: {
    data: nonNull('RoomCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.room.create({
      data,
      ...select,
    })
  },
})
