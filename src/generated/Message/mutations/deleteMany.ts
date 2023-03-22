import { mutationField, nonNull } from 'nexus'

export const MessageDeleteManyMutation = mutationField('deleteManyMessage', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'MessageWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.message.deleteMany({ where } as any)
  },
})
