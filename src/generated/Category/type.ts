import { objectType } from 'nexus'

export const Category = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Category',
  definition(t) {
    t.int('id')
    t.string('title')
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
      type: 'CategoryCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
