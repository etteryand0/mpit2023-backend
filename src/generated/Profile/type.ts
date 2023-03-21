import { objectType } from 'nexus'

export const Profile = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Profile',
  definition(t) {
    t.string('id')
    t.string('userEmail')
    t.nullable.string('username')
    t.nullable.string('bio')
    t.nullable.string('avatar')
    t.nullable.string('name')
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
  },
})
