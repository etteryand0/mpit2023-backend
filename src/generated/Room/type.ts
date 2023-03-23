import { objectType } from 'nexus'

export const Room = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Room',
  definition(t) {
    t.string('id')
    t.string('title')
    t.nullable.string('image')
    t.nullable.string('description')
    t.list.field('events', {
      type: 'Event',
      args: {
        where: 'EventWhereInput',
        orderBy: 'EventOrderByWithRelationInput',
        cursor: 'EventWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'EventScalarFieldEnum',
      },
      resolve(root: any) {
        return root.events
      },
    })
    t.field('_count', {
      type: 'RoomCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
