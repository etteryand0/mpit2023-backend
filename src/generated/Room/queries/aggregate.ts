import { queryField, list } from 'nexus'

export const RoomAggregateQuery = queryField('aggregateRoom', {
  type: 'AggregateRoom',
  args: {
    where: 'RoomWhereInput',
    orderBy: list('RoomOrderByWithRelationInput'),
    cursor: 'RoomWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.room.aggregate({ ...args, ...select }) as any
  },
})
