import { inputObjectType, mutationField, nonNull } from "nexus";

export const UpdateMyProfileInput = inputObjectType({
  name: 'UpdateMyProfileInput',
  nonNullDefaults: {
    input: false,
  },
  definition(t) {
    t.field('jobTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('surname', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const UpdateMyProfileMutation = mutationField('updateMyProfile', {
  type: nonNull('Profile'),
  args: {
    data: nonNull('UpdateMyProfileInput')
  },
  resolve(_parent, { data }, { prisma, user, select }) {
    return prisma.profile.update({
      where: {
        userId: user.id,
      },
      data,
      ...select,
    })
  }
})