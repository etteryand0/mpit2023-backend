import { queryField, nonNull, list } from 'nexus'

export const RoomFindManyQuery = queryField('findManyRoom', {
  type: nonNull(list(nonNull('Room'))),
  args: {
    where: 'RoomWhereInput',
    orderBy: list('RoomOrderByWithRelationInput'),
    cursor: 'RoomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('RoomScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.room.findMany({
      ...args,
      ...select,
    })
  },
})
