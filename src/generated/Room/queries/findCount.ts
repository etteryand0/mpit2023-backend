import { queryField, nonNull, list } from 'nexus'

export const RoomFindCountQuery = queryField('findManyRoomCount', {
  type: nonNull('Int'),
  args: {
    where: 'RoomWhereInput',
    orderBy: list('RoomOrderByWithRelationInput'),
    cursor: 'RoomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('RoomScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.room.count(args as any)
  },
})
