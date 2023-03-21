import { enumType, inputObjectType, objectType } from 'nexus'

export const PostScalarFieldEnum = enumType({
  name: 'PostScalarFieldEnum',
  members: ['id', 'userId', 'title', 'body', 'createdAt'],
})

export const ProfileScalarFieldEnum = enumType({
  name: 'ProfileScalarFieldEnum',
  members: [
    'id',
    'userEmail',
    'username',
    'bio',
    'avatar',
    'name',
    'updatedAt',
  ],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: ['id', 'email', 'password', 'createdAt'],
})

export const PostWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostWhereInput' })
    t.list.field('OR', { type: 'PostWhereInput' })
    t.list.field('NOT', { type: 'PostWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('body', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('author', { type: 'UserWhereInput' })
  },
})

export const PostOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('author', { type: 'UserOrderByWithRelationInput' })
  },
})

export const PostWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
  },
})

export const PostOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('_count', { type: 'PostCountOrderByAggregateInput' })
    t.field('_max', { type: 'PostMaxOrderByAggregateInput' })
    t.field('_min', { type: 'PostMinOrderByAggregateInput' })
  },
})

export const PostScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'PostScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'PostScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('userId', { type: 'StringWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('body', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const ProfileWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProfileWhereInput' })
    t.list.field('OR', { type: 'ProfileWhereInput' })
    t.list.field('NOT', { type: 'ProfileWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userEmail', { type: 'StringFilter' })
    t.field('username', { type: 'StringNullableFilter' })
    t.field('bio', { type: 'StringNullableFilter' })
    t.field('avatar', { type: 'StringNullableFilter' })
    t.field('name', { type: 'StringNullableFilter' })
    t.field('updatedAt', { type: 'DateTimeFilter' })
    t.field('user', { type: 'UserWhereInput' })
  },
})

export const ProfileOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userEmail', { type: 'SortOrder' })
    t.field('username', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('user', { type: 'UserOrderByWithRelationInput' })
  },
})

export const ProfileWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('userEmail', { type: 'String' })
    t.field('username', { type: 'String' })
  },
})

export const ProfileOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userEmail', { type: 'SortOrder' })
    t.field('username', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
    t.field('_count', { type: 'ProfileCountOrderByAggregateInput' })
    t.field('_max', { type: 'ProfileMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ProfileMinOrderByAggregateInput' })
  },
})

export const ProfileScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProfileScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ProfileScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ProfileScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('userEmail', { type: 'StringWithAggregatesFilter' })
    t.field('username', { type: 'StringNullableWithAggregatesFilter' })
    t.field('bio', { type: 'StringNullableWithAggregatesFilter' })
    t.field('avatar', { type: 'StringNullableWithAggregatesFilter' })
    t.field('name', { type: 'StringNullableWithAggregatesFilter' })
    t.field('updatedAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('profile', { type: 'ProfileWhereInput' })
    t.field('posts', { type: 'PostListRelationFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('profile', { type: 'ProfileOrderByWithRelationInput' })
    t.field('posts', { type: 'PostOrderByRelationAggregateInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('email', { type: 'String' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const PostCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('author', { type: 'UserCreateNestedOneWithoutPostsInput' })
  },
})

export const PostUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userId', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const PostUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('body', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('author', { type: 'UserUpdateOneRequiredWithoutPostsNestedInput' })
  },
})

export const PostUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('body', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userId', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const PostUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('body', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('body', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProfileCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('username', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nonNull.field('user', { type: 'UserCreateNestedOneWithoutProfileInput' })
  },
})

export const ProfileUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userEmail', { type: 'String' })
    t.field('username', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProfileUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('user', { type: 'UserUpdateOneRequiredWithoutProfileNestedInput' })
  },
})

export const ProfileUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userEmail', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProfileCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('userEmail', { type: 'String' })
    t.field('username', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProfileUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProfileUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userEmail', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
    })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const UserRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const PostCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const PostMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const PostMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('body', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const ProfileCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userEmail', { type: 'SortOrder' })
    t.field('username', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProfileMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userEmail', { type: 'SortOrder' })
    t.field('username', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const ProfileMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userEmail', { type: 'SortOrder' })
    t.field('username', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const ProfileRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProfileWhereInput' })
    t.field('isNot', { type: 'ProfileWhereInput' })
  },
})

export const PostListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostListRelationFilter',
  definition(t) {
    t.field('every', { type: 'PostWhereInput' })
    t.field('some', { type: 'PostWhereInput' })
    t.field('none', { type: 'PostWhereInput' })
  },
})

export const PostOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserCreateNestedOneWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutPostsInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const UserUpdateOneRequiredWithoutPostsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutPostsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutPostsInput' })
    t.field('upsert', { type: 'UserUpsertWithoutPostsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutPostsInput' })
  },
})

export const UserCreateNestedOneWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutProfileInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutProfileInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutProfileInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const UserUpdateOneRequiredWithoutProfileNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutProfileNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutProfileInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutProfileInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutProfileInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutProfileInput' })
  },
})

export const ProfileCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ProfileUncheckedCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
  },
})

export const PostCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const ProfileUncheckedCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'ProfileUncheckedCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
  },
})

export const PostUncheckedCreateNestedManyWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
  },
})

export const ProfileUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'ProfileUncheckedCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('upsert', { type: 'ProfileUpsertWithoutUserInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
    t.field('update', { type: 'ProfileUncheckedUpdateWithoutUserInput' })
  },
})

export const PostUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutAuthorInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const ProfileUncheckedUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'ProfileUncheckedCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'ProfileCreateOrConnectWithoutUserInput',
    })
    t.field('upsert', { type: 'ProfileUpsertWithoutUserInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'ProfileWhereUniqueInput' })
    t.field('update', { type: 'ProfileUncheckedUpdateWithoutUserInput' })
  },
})

export const PostUncheckedUpdateManyWithoutAuthorNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
  definition(t) {
    t.list.field('create', { type: 'PostCreateWithoutAuthorInput' })
    t.list.field('connectOrCreate', {
      type: 'PostCreateOrConnectWithoutAuthorInput',
    })
    t.list.field('upsert', {
      type: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
    })
    t.field('createMany', { type: 'PostCreateManyAuthorInputEnvelope' })
    t.list.field('set', { type: 'PostWhereUniqueInput' })
    t.list.field('disconnect', { type: 'PostWhereUniqueInput' })
    t.list.field('delete', { type: 'PostWhereUniqueInput' })
    t.list.field('connect', { type: 'PostWhereUniqueInput' })
    t.list.field('update', {
      type: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
    })
    t.list.field('updateMany', {
      type: 'PostUpdateManyWithWhereWithoutAuthorInput',
    })
    t.list.field('deleteMany', { type: 'PostScalarWhereInput' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const UserCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutPostsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
  },
})

export const UserUpsertWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutPostsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUncheckedUpdateWithoutPostsInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutPostsInput' })
  },
})

export const UserUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
  },
})

export const UserCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('posts', { type: 'PostCreateNestedManyWithoutAuthorInput' })
  },
})

export const UserUncheckedCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('posts', {
      type: 'PostUncheckedCreateNestedManyWithoutAuthorInput',
    })
  },
})

export const UserCreateOrConnectWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutProfileInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutProfileInput',
    })
  },
})

export const UserUpsertWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutProfileInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUncheckedUpdateWithoutProfileInput',
    })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutProfileInput',
    })
  },
})

export const UserUpdateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('posts', { type: 'PostUpdateManyWithoutAuthorNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('posts', {
      type: 'PostUncheckedUpdateManyWithoutAuthorNestedInput',
    })
  },
})

export const ProfileCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('username', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProfileUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('username', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProfileCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProfileWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'ProfileUncheckedCreateWithoutUserInput',
    })
  },
})

export const PostCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const PostUncheckedCreateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedCreateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const PostCreateOrConnectWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateOrConnectWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('create', { type: 'PostUncheckedCreateWithoutAuthorInput' })
  },
})

export const PostCreateManyAuthorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'PostCreateManyAuthorInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ProfileUpsertWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpsertWithoutUserInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'ProfileUncheckedUpdateWithoutUserInput',
    })
    t.nonNull.field('create', {
      type: 'ProfileUncheckedCreateWithoutUserInput',
    })
  },
})

export const ProfileUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ProfileUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUpsertWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpsertWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('update', { type: 'PostUncheckedUpdateWithoutAuthorInput' })
    t.nonNull.field('create', { type: 'PostUncheckedCreateWithoutAuthorInput' })
  },
})

export const PostUpdateWithWhereUniqueWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithWhereUniqueWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostWhereUniqueInput' })
    t.nonNull.field('data', { type: 'PostUncheckedUpdateWithoutAuthorInput' })
  },
})

export const PostUpdateManyWithWhereWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateManyWithWhereWithoutAuthorInput',
  definition(t) {
    t.nonNull.field('where', { type: 'PostScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'PostUncheckedUpdateManyWithoutPostsInput',
    })
  },
})

export const PostScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'PostScalarWhereInput' })
    t.list.field('OR', { type: 'PostScalarWhereInput' })
    t.list.field('NOT', { type: 'PostScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('body', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
  },
})

export const PostCreateManyAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostCreateManyAuthorInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('body', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const PostUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('body', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateWithoutAuthorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateWithoutAuthorInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('body', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const PostUncheckedUpdateManyWithoutPostsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'PostUncheckedUpdateManyWithoutPostsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('body', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const AggregatePost = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregatePost',
  definition(t) {
    t.nullable.field('_count', { type: 'PostCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'PostMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'PostMaxAggregateOutputType' })
  },
})

export const AggregateProfile = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProfile',
  definition(t) {
    t.nullable.field('_count', { type: 'ProfileCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProfileMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProfileMaxAggregateOutputType' })
  },
})

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const PostCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('body', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const PostMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userId', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('body', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const PostMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'PostMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userId', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('body', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const ProfileCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userEmail', { type: 'Int' })
    t.field('username', { type: 'Int' })
    t.field('bio', { type: 'Int' })
    t.field('avatar', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('updatedAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ProfileMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userEmail', { type: 'String' })
    t.nullable.field('username', { type: 'String' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const ProfileMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProfileMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('userEmail', { type: 'String' })
    t.nullable.field('username', { type: 'String' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
  },
})

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('posts', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('password', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})
