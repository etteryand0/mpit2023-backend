import { nanoid } from "nanoid";
import { mutationField, nonNull } from "nexus";

export const GenerateShortLink = mutationField('generateShortLink', {
  type: nonNull('String'),
  args: {
    eventId: nonNull('String')
  },
  async resolve(_root, {eventId}, {prisma, user}, _info) {
    try {
      const link = nanoid()

      await prisma.shortLink.create({
        data: {
          event: {connect: {id: eventId}},
          path: link,
          user: {connect: {id: user.id}}
        }
      })

      return link
    } catch (e) {
      const link = await prisma.shortLink.findFirst({
        where: {
          AND: [
            { eventId },
            { userId: user.id}
          ]
        },
        select: { path: true }
      })

      return link.path
    }
  }
})