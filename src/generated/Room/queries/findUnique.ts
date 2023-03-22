import { queryField, nonNull } from 'nexus'

export const RoomFindUniqueQuery = queryField('findUniqueRoom', {
  type: 'Room',
  args: {
    where: nonNull('RoomWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.room.findUnique({
      where,
      ...select,
    })
  },
})
