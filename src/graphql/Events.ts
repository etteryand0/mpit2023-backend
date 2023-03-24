import transliterate from '../utils/transliterate'
import { inputObjectType, list, mutationField, nonNull, queryField, stringArg } from 'nexus'
import { UserRole } from '@prisma/client'

export const IssueEventInput = inputObjectType({
  name: "IssueEventInput",
  nonNullDefaults: {
    input: false,
  },
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('participants', {
      type: 'UserCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('chat', { type: 'ChatCreateNestedOneWithoutEventInput' })
    t.nonNull.field('room', { type: 'RoomCreateNestedOneWithoutEventsInput' })
    t.field('responsibles', {
      type: 'UserCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryCreateNestedManyWithoutEventsInput',
    })
  },
})

export const IssueEventMutation = mutationField('issueEvent', {
  type: nonNull('Event'),
  args: {
    data: nonNull('IssueEventInput'),
  },
  resolve(_parent, { data }, { prisma, select, user }) {
    if (!data.id) {
      data.id = transliterate(data.title)
    }

    return prisma.event.create({
      data: {
        issuedBy: { connect: { id: user.id } },
        ...data,
      },
      ...select,
    })
  },
})

export const ApproveEventMutation = mutationField('approveEvent', {
  type: nonNull('Event'),
  args: {
    eventId: nonNull(stringArg())
  },
  async resolve(_parent, { eventId }, { prisma }) {
    const event = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        approved: { set: true }
      },
      include: {issuedBy: { select: { id: true } }},
    })

    if (event?.issuedBy?.id) {
      await prisma.chat.create({
        data: {
          event: { connect: { id: eventId } },
          members: { connect: { id: event.issuedBy.id } }
        }
      })
    }

    return event
  },
})

export const RegisterForEventMutation = mutationField('registerForEvent', {
  type: nonNull('Event'),
  args: {
    eventId: nonNull(stringArg())
  },
  async resolve(_parent, { eventId }, { prisma, user }) {
    let id = user.id

    if (user.role === UserRole.Parent) {
      const child = await prisma.user.findUnique({
        where: {
          parentId: user.id,
        },
        select: {
          id: true,
        }
      })
      
      id = child.id
    }


    const event = await prisma.event.update({
      where: {
        id: eventId,
      },
      data: {
        participants: {
          connect: [
            {
              id: "clfki12af0000upv4y1nqfi3m"
            }
          ]
        }
      },
    })

    await prisma.chat.update({
      where: {
        eventId,
      },
      data: {
        members: { connect: [{ id: user.id }] }
      }
    })

    return event
  },
})

export const FindMyRegisteredEventsQuery = queryField('findMyRegisteredEvents',{
  type: nonNull(list(nonNull('Event'))),
  resolve(_parent, _args, { prisma, user, select }) {
    return prisma.event.findMany({
      where: {
        participants: {some: {id: user.id}},
        approved: {equals: true}
      },
      ...select
    })
  }
})

export const UnsignFromEventMutation = mutationField('unsignFromEvent', {
  type: nonNull('Event'),
  args: {
    eventId: nonNull(stringArg())
  },
  resolve(_parent, { eventId }, { prisma, user, select }) {
    return prisma.event.update({
      where: {
        id: eventId
      },
      data: {
        participants: {
          disconnect: {id: user.id}
        }
      },
      ...select
    })
  },
})