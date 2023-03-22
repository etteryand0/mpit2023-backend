import { mutationField, nonNull } from 'nexus'

export const MessageUpdateManyMutation = mutationField('updateManyMessage', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('MessageUpdateManyMutationInput'),
    where: 'MessageWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.message.updateMany(args as any)
  },
})
