import { objectType } from 'nexus'

export const ShortLink = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'ShortLink',
  definition(t) {
    t.string('userId')
    t.string('eventId')
    t.string('path')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.field('event', {
      type: 'Event',
      resolve(root: any) {
        return root.event
      },
    })
  },
})
