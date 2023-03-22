import { queryField, list } from 'nexus'

export const RoomFindFirstQuery = queryField('findFirstRoom', {
  type: 'Room',
  args: {
    where: 'RoomWhereInput',
    orderBy: list('RoomOrderByWithRelationInput'),
    cursor: 'RoomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('RoomScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.room.findFirst({
      ...args,
      ...select,
    })
  },
})
