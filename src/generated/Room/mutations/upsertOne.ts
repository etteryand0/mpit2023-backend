import { mutationField, nonNull } from 'nexus'

export const RoomUpsertOneMutation = mutationField('upsertOneRoom', {
  type: nonNull('Room'),
  args: {
    where: nonNull('RoomWhereUniqueInput'),
    create: nonNull('RoomCreateInput'),
    update: nonNull('RoomUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.room.upsert({
      ...args,
      ...select,
    })
  },
})
