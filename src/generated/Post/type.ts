import { objectType } from 'nexus'

export const Post = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Post',
  definition(t) {
    t.string('id')
    t.string('userId')
    t.string('title')
    t.string('body')
    t.field('createdAt', { type: 'DateTime' })
    t.field('author', {
      type: 'User',
      resolve(root: any) {
        return root.author
      },
    })
  },
})
