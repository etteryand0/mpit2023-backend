import { enumType, inputObjectType, objectType } from 'nexus'

export const ChatScalarFieldEnum = enumType({
  name: 'ChatScalarFieldEnum',
  members: ['id', 'createdAt'],
})

export const MessageScalarFieldEnum = enumType({
  name: 'MessageScalarFieldEnum',
  members: ['id', 'message', 'userId', 'chatId', 'sentDate'],
})

export const ProfileScalarFieldEnum = enumType({
  name: 'ProfileScalarFieldEnum',
  members: ['id', 'userId', 'bio', 'avatar', 'name', 'updatedAt'],
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
  members: ['id', 'username', 'password', 'createdAt'],
})

export const MessageWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageWhereInput' })
    t.list.field('OR', { type: 'MessageWhereInput' })
    t.list.field('NOT', { type: 'MessageWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('message', { type: 'StringFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('chatId', { type: 'StringFilter' })
    t.field('sentDate', { type: 'DateTimeFilter' })
    t.field('sender', { type: 'UserWhereInput' })
    t.field('chat', { type: 'ChatWhereInput' })
  },
})

export const MessageOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('chatId', { type: 'SortOrder' })
    t.field('sentDate', { type: 'SortOrder' })
    t.field('sender', { type: 'UserOrderByWithRelationInput' })
    t.field('chat', { type: 'ChatOrderByWithRelationInput' })
  },
})

export const MessageWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
  },
})

export const MessageOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('chatId', { type: 'SortOrder' })
    t.field('sentDate', { type: 'SortOrder' })
    t.field('_count', { type: 'MessageCountOrderByAggregateInput' })
    t.field('_max', { type: 'MessageMaxOrderByAggregateInput' })
    t.field('_min', { type: 'MessageMinOrderByAggregateInput' })
  },
})

export const MessageScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'MessageScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'MessageScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('message', { type: 'StringWithAggregatesFilter' })
    t.field('userId', { type: 'StringWithAggregatesFilter' })
    t.field('chatId', { type: 'StringWithAggregatesFilter' })
    t.field('sentDate', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const ChatWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ChatWhereInput' })
    t.list.field('OR', { type: 'ChatWhereInput' })
    t.list.field('NOT', { type: 'ChatWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('members', { type: 'UserListRelationFilter' })
    t.field('messages', { type: 'MessageListRelationFilter' })
  },
})

export const ChatOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('members', { type: 'UserOrderByRelationAggregateInput' })
    t.field('messages', { type: 'MessageOrderByRelationAggregateInput' })
  },
})

export const ChatWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
  },
})

export const ChatOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('_count', { type: 'ChatCountOrderByAggregateInput' })
    t.field('_max', { type: 'ChatMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ChatMinOrderByAggregateInput' })
  },
})

export const ChatScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ChatScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ChatScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ChatScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
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
    t.field('userId', { type: 'StringFilter' })
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
    t.field('userId', { type: 'SortOrder' })
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
    t.field('userId', { type: 'String' })
  },
})

export const ProfileOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
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
    t.field('userId', { type: 'StringWithAggregatesFilter' })
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
    t.field('username', { type: 'StringFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('profile', { type: 'ProfileWhereInput' })
    t.field('messages', { type: 'MessageListRelationFilter' })
    t.field('chats', { type: 'ChatListRelationFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('username', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('profile', { type: 'ProfileOrderByWithRelationInput' })
    t.field('messages', { type: 'MessageOrderByRelationAggregateInput' })
    t.field('chats', { type: 'ChatOrderByRelationAggregateInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('username', { type: 'String' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('username', { type: 'SortOrder' })
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
    t.field('username', { type: 'StringWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const MessageCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
    t.nonNull.field('sender', {
      type: 'UserCreateNestedOneWithoutMessagesInput',
    })
    t.nonNull.field('chat', { type: 'ChatCreateNestedOneWithoutMessagesInput' })
  },
})

export const MessageUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'String' })
    t.nonNull.field('chatId', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
  },
})

export const MessageUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('sender', {
      type: 'UserUpdateOneRequiredWithoutMessagesNestedInput',
    })
    t.field('chat', { type: 'ChatUpdateOneRequiredWithoutMessagesNestedInput' })
  },
})

export const MessageUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('chatId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const MessageCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'String' })
    t.nonNull.field('chatId', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
  },
})

export const MessageUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const MessageUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('chatId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ChatCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('members', { type: 'UserCreateNestedManyWithoutChatsInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutChatInput' })
  },
})

export const ChatUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('members', {
      type: 'UserUncheckedCreateNestedManyWithoutChatsInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutChatInput',
    })
  },
})

export const ChatUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('members', { type: 'UserUpdateManyWithoutChatsNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutChatNestedInput' })
  },
})

export const ChatUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('members', {
      type: 'UserUncheckedUpdateManyWithoutChatsNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutChatNestedInput',
    })
  },
})

export const ChatCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const ChatUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ChatUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
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
    t.nonNull.field('userId', { type: 'String' })
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
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
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
    t.nonNull.field('userId', { type: 'String' })
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
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
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
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
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
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
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
    t.nonNull.field('username', { type: 'String' })
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
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
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
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
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

export const ChatRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatRelationFilter',
  definition(t) {
    t.field('is', { type: 'ChatWhereInput' })
    t.field('isNot', { type: 'ChatWhereInput' })
  },
})

export const MessageCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('chatId', { type: 'SortOrder' })
    t.field('sentDate', { type: 'SortOrder' })
  },
})

export const MessageMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('chatId', { type: 'SortOrder' })
    t.field('sentDate', { type: 'SortOrder' })
  },
})

export const MessageMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('message', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('chatId', { type: 'SortOrder' })
    t.field('sentDate', { type: 'SortOrder' })
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

export const UserListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserListRelationFilter',
  definition(t) {
    t.field('every', { type: 'UserWhereInput' })
    t.field('some', { type: 'UserWhereInput' })
    t.field('none', { type: 'UserWhereInput' })
  },
})

export const MessageListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageListRelationFilter',
  definition(t) {
    t.field('every', { type: 'MessageWhereInput' })
    t.field('some', { type: 'MessageWhereInput' })
    t.field('none', { type: 'MessageWhereInput' })
  },
})

export const UserOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const MessageOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ChatCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const ChatMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const ChatMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
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
    t.field('userId', { type: 'SortOrder' })
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
    t.field('userId', { type: 'SortOrder' })
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
    t.field('userId', { type: 'SortOrder' })
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

export const ChatListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ChatWhereInput' })
    t.field('some', { type: 'ChatWhereInput' })
    t.field('none', { type: 'ChatWhereInput' })
  },
})

export const ChatOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatOrderByRelationAggregateInput',
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
    t.field('username', { type: 'SortOrder' })
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
    t.field('username', { type: 'SortOrder' })
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
    t.field('username', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserCreateNestedOneWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutMessagesInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutMessagesInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutMessagesInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const ChatCreateNestedOneWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateNestedOneWithoutMessagesInput',
  definition(t) {
    t.field('create', { type: 'ChatUncheckedCreateWithoutMessagesInput' })
    t.field('connectOrCreate', {
      type: 'ChatCreateOrConnectWithoutMessagesInput',
    })
    t.field('connect', { type: 'ChatWhereUniqueInput' })
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

export const UserUpdateOneRequiredWithoutMessagesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutMessagesNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutMessagesInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutMessagesInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutMessagesInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutMessagesInput' })
  },
})

export const ChatUpdateOneRequiredWithoutMessagesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateOneRequiredWithoutMessagesNestedInput',
  definition(t) {
    t.field('create', { type: 'ChatUncheckedCreateWithoutMessagesInput' })
    t.field('connectOrCreate', {
      type: 'ChatCreateOrConnectWithoutMessagesInput',
    })
    t.field('upsert', { type: 'ChatUpsertWithoutMessagesInput' })
    t.field('connect', { type: 'ChatWhereUniqueInput' })
    t.field('update', { type: 'ChatUncheckedUpdateWithoutMessagesInput' })
  },
})

export const UserCreateNestedManyWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedManyWithoutChatsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutChatsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutChatsInput',
    })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const MessageCreateNestedManyWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateNestedManyWithoutChatInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutChatInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutChatInput',
    })
    t.field('createMany', { type: 'MessageCreateManyChatInputEnvelope' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
  },
})

export const UserUncheckedCreateNestedManyWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateNestedManyWithoutChatsInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutChatsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutChatsInput',
    })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const MessageUncheckedCreateNestedManyWithoutChatInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedCreateNestedManyWithoutChatInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutChatInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutChatInput',
      })
      t.field('createMany', { type: 'MessageCreateManyChatInputEnvelope' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    },
  },
)

export const UserUpdateManyWithoutChatsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithoutChatsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutChatsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutChatsInput',
    })
    t.list.field('upsert', {
      type: 'UserUpsertWithWhereUniqueWithoutChatsInput',
    })
    t.list.field('set', { type: 'UserWhereUniqueInput' })
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
    t.list.field('delete', { type: 'UserWhereUniqueInput' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
    t.list.field('update', {
      type: 'UserUpdateWithWhereUniqueWithoutChatsInput',
    })
    t.list.field('updateMany', {
      type: 'UserUpdateManyWithWhereWithoutChatsInput',
    })
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
  },
})

export const MessageUpdateManyWithoutChatNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithoutChatNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutChatInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutChatInput',
    })
    t.list.field('upsert', {
      type: 'MessageUpsertWithWhereUniqueWithoutChatInput',
    })
    t.field('createMany', { type: 'MessageCreateManyChatInputEnvelope' })
    t.list.field('set', { type: 'MessageWhereUniqueInput' })
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
    t.list.field('delete', { type: 'MessageWhereUniqueInput' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    t.list.field('update', {
      type: 'MessageUpdateWithWhereUniqueWithoutChatInput',
    })
    t.list.field('updateMany', {
      type: 'MessageUpdateManyWithWhereWithoutChatInput',
    })
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
  },
})

export const UserUncheckedUpdateManyWithoutChatsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutChatsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'UserCreateWithoutChatsInput' })
    t.list.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutChatsInput',
    })
    t.list.field('upsert', {
      type: 'UserUpsertWithWhereUniqueWithoutChatsInput',
    })
    t.list.field('set', { type: 'UserWhereUniqueInput' })
    t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
    t.list.field('delete', { type: 'UserWhereUniqueInput' })
    t.list.field('connect', { type: 'UserWhereUniqueInput' })
    t.list.field('update', {
      type: 'UserUpdateWithWhereUniqueWithoutChatsInput',
    })
    t.list.field('updateMany', {
      type: 'UserUpdateManyWithWhereWithoutChatsInput',
    })
    t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
  },
})

export const MessageUncheckedUpdateManyWithoutChatNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedUpdateManyWithoutChatNestedInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutChatInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutChatInput',
      })
      t.list.field('upsert', {
        type: 'MessageUpsertWithWhereUniqueWithoutChatInput',
      })
      t.field('createMany', { type: 'MessageCreateManyChatInputEnvelope' })
      t.list.field('set', { type: 'MessageWhereUniqueInput' })
      t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
      t.list.field('delete', { type: 'MessageWhereUniqueInput' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
      t.list.field('update', {
        type: 'MessageUpdateWithWhereUniqueWithoutChatInput',
      })
      t.list.field('updateMany', {
        type: 'MessageUpdateManyWithWhereWithoutChatInput',
      })
      t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
    },
  },
)

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

export const MessageCreateNestedManyWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateNestedManyWithoutSenderInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutSenderInput',
    })
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
  },
})

export const ChatCreateNestedManyWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateNestedManyWithoutMembersInput',
  definition(t) {
    t.list.field('create', { type: 'ChatCreateWithoutMembersInput' })
    t.list.field('connectOrCreate', {
      type: 'ChatCreateOrConnectWithoutMembersInput',
    })
    t.list.field('connect', { type: 'ChatWhereUniqueInput' })
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

export const MessageUncheckedCreateNestedManyWithoutSenderInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutSenderInput',
      })
      t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    },
  })

export const ChatUncheckedCreateNestedManyWithoutMembersInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    definition(t) {
      t.list.field('create', { type: 'ChatCreateWithoutMembersInput' })
      t.list.field('connectOrCreate', {
        type: 'ChatCreateOrConnectWithoutMembersInput',
      })
      t.list.field('connect', { type: 'ChatWhereUniqueInput' })
    },
  },
)

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

export const MessageUpdateManyWithoutSenderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithoutSenderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
    t.list.field('connectOrCreate', {
      type: 'MessageCreateOrConnectWithoutSenderInput',
    })
    t.list.field('upsert', {
      type: 'MessageUpsertWithWhereUniqueWithoutSenderInput',
    })
    t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
    t.list.field('set', { type: 'MessageWhereUniqueInput' })
    t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
    t.list.field('delete', { type: 'MessageWhereUniqueInput' })
    t.list.field('connect', { type: 'MessageWhereUniqueInput' })
    t.list.field('update', {
      type: 'MessageUpdateWithWhereUniqueWithoutSenderInput',
    })
    t.list.field('updateMany', {
      type: 'MessageUpdateManyWithWhereWithoutSenderInput',
    })
    t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
  },
})

export const ChatUpdateManyWithoutMembersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateManyWithoutMembersNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ChatCreateWithoutMembersInput' })
    t.list.field('connectOrCreate', {
      type: 'ChatCreateOrConnectWithoutMembersInput',
    })
    t.list.field('upsert', {
      type: 'ChatUpsertWithWhereUniqueWithoutMembersInput',
    })
    t.list.field('set', { type: 'ChatWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ChatWhereUniqueInput' })
    t.list.field('delete', { type: 'ChatWhereUniqueInput' })
    t.list.field('connect', { type: 'ChatWhereUniqueInput' })
    t.list.field('update', {
      type: 'ChatUpdateWithWhereUniqueWithoutMembersInput',
    })
    t.list.field('updateMany', {
      type: 'ChatUpdateManyWithWhereWithoutMembersInput',
    })
    t.list.field('deleteMany', { type: 'ChatScalarWhereInput' })
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

export const MessageUncheckedUpdateManyWithoutSenderNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    definition(t) {
      t.list.field('create', { type: 'MessageCreateWithoutSenderInput' })
      t.list.field('connectOrCreate', {
        type: 'MessageCreateOrConnectWithoutSenderInput',
      })
      t.list.field('upsert', {
        type: 'MessageUpsertWithWhereUniqueWithoutSenderInput',
      })
      t.field('createMany', { type: 'MessageCreateManySenderInputEnvelope' })
      t.list.field('set', { type: 'MessageWhereUniqueInput' })
      t.list.field('disconnect', { type: 'MessageWhereUniqueInput' })
      t.list.field('delete', { type: 'MessageWhereUniqueInput' })
      t.list.field('connect', { type: 'MessageWhereUniqueInput' })
      t.list.field('update', {
        type: 'MessageUpdateWithWhereUniqueWithoutSenderInput',
      })
      t.list.field('updateMany', {
        type: 'MessageUpdateManyWithWhereWithoutSenderInput',
      })
      t.list.field('deleteMany', { type: 'MessageScalarWhereInput' })
    },
  })

export const ChatUncheckedUpdateManyWithoutMembersNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ChatCreateWithoutMembersInput' })
      t.list.field('connectOrCreate', {
        type: 'ChatCreateOrConnectWithoutMembersInput',
      })
      t.list.field('upsert', {
        type: 'ChatUpsertWithWhereUniqueWithoutMembersInput',
      })
      t.list.field('set', { type: 'ChatWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ChatWhereUniqueInput' })
      t.list.field('delete', { type: 'ChatWhereUniqueInput' })
      t.list.field('connect', { type: 'ChatWhereUniqueInput' })
      t.list.field('update', {
        type: 'ChatUpdateWithWhereUniqueWithoutMembersInput',
      })
      t.list.field('updateMany', {
        type: 'ChatUpdateManyWithWhereWithoutMembersInput',
      })
      t.list.field('deleteMany', { type: 'ChatScalarWhereInput' })
    },
  },
)

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

export const UserCreateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
  },
})

export const UserUncheckedCreateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    })
  },
})

export const UserCreateOrConnectWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutMessagesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutMessagesInput',
    })
  },
})

export const ChatCreateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('members', { type: 'UserCreateNestedManyWithoutChatsInput' })
  },
})

export const ChatUncheckedCreateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedCreateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('members', {
      type: 'UserUncheckedCreateNestedManyWithoutChatsInput',
    })
  },
})

export const ChatCreateOrConnectWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateOrConnectWithoutMessagesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ChatWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'ChatUncheckedCreateWithoutMessagesInput',
    })
  },
})

export const UserUpsertWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutMessagesInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUncheckedUpdateWithoutMessagesInput',
    })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutMessagesInput',
    })
  },
})

export const UserUpdateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    })
  },
})

export const ChatUpsertWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpsertWithoutMessagesInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'ChatUncheckedUpdateWithoutMessagesInput',
    })
    t.nonNull.field('create', {
      type: 'ChatUncheckedCreateWithoutMessagesInput',
    })
  },
})

export const ChatUpdateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('members', { type: 'UserUpdateManyWithoutChatsNestedInput' })
  },
})

export const ChatUncheckedUpdateWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedUpdateWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('members', {
      type: 'UserUncheckedUpdateManyWithoutChatsNestedInput',
    })
  },
})

export const UserCreateWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutChatsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
  },
})

export const UserUncheckedCreateWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutChatsInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
  },
})

export const UserCreateOrConnectWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutChatsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutChatsInput' })
  },
})

export const MessageCreateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateWithoutChatInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
    t.nonNull.field('sender', {
      type: 'UserCreateNestedOneWithoutMessagesInput',
    })
  },
})

export const MessageUncheckedCreateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateWithoutChatInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
  },
})

export const MessageCreateOrConnectWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateOrConnectWithoutChatInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'MessageUncheckedCreateWithoutChatInput',
    })
  },
})

export const MessageCreateManyChatInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyChatInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'MessageCreateManyChatInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserUpsertWithWhereUniqueWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithWhereUniqueWithoutChatsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('update', { type: 'UserUncheckedUpdateWithoutChatsInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutChatsInput' })
  },
})

export const UserUpdateWithWhereUniqueWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithWhereUniqueWithoutChatsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('data', { type: 'UserUncheckedUpdateWithoutChatsInput' })
  },
})

export const UserUpdateManyWithWhereWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyWithWhereWithoutChatsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'UserUncheckedUpdateManyWithoutMembersInput',
    })
  },
})

export const UserScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereInput' })
    t.list.field('OR', { type: 'UserScalarWhereInput' })
    t.list.field('NOT', { type: 'UserScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('username', { type: 'StringFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
  },
})

export const MessageUpsertWithWhereUniqueWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpsertWithWhereUniqueWithoutChatInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'MessageUncheckedUpdateWithoutChatInput',
    })
    t.nonNull.field('create', {
      type: 'MessageUncheckedCreateWithoutChatInput',
    })
  },
})

export const MessageUpdateWithWhereUniqueWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithWhereUniqueWithoutChatInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('data', { type: 'MessageUncheckedUpdateWithoutChatInput' })
  },
})

export const MessageUpdateManyWithWhereWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithWhereWithoutChatInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'MessageUncheckedUpdateManyWithoutMessagesInput',
    })
  },
})

export const MessageScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'MessageScalarWhereInput' })
    t.list.field('OR', { type: 'MessageScalarWhereInput' })
    t.list.field('NOT', { type: 'MessageScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('message', { type: 'StringFilter' })
    t.field('userId', { type: 'StringFilter' })
    t.field('chatId', { type: 'StringFilter' })
    t.field('sentDate', { type: 'DateTimeFilter' })
  },
})

export const UserCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
  },
})

export const UserUncheckedCreateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
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
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutProfileInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutProfileInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
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

export const MessageCreateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
    t.nonNull.field('chat', { type: 'ChatCreateNestedOneWithoutMessagesInput' })
  },
})

export const MessageUncheckedCreateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedCreateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('chatId', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
  },
})

export const MessageCreateOrConnectWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateOrConnectWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'MessageUncheckedCreateWithoutSenderInput',
    })
  },
})

export const MessageCreateManySenderInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManySenderInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'MessageCreateManySenderInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ChatCreateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutChatInput' })
  },
})

export const ChatUncheckedCreateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedCreateWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutChatInput',
    })
  },
})

export const ChatCreateOrConnectWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateOrConnectWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ChatWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'ChatUncheckedCreateWithoutMembersInput',
    })
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
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('updatedAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const MessageUpsertWithWhereUniqueWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpsertWithWhereUniqueWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'MessageUncheckedUpdateWithoutSenderInput',
    })
    t.nonNull.field('create', {
      type: 'MessageUncheckedCreateWithoutSenderInput',
    })
  },
})

export const MessageUpdateWithWhereUniqueWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithWhereUniqueWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageWhereUniqueInput' })
    t.nonNull.field('data', {
      type: 'MessageUncheckedUpdateWithoutSenderInput',
    })
  },
})

export const MessageUpdateManyWithWhereWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateManyWithWhereWithoutSenderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'MessageScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'MessageUncheckedUpdateManyWithoutMessagesInput',
    })
  },
})

export const ChatUpsertWithWhereUniqueWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpsertWithWhereUniqueWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ChatWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'ChatUncheckedUpdateWithoutMembersInput',
    })
    t.nonNull.field('create', {
      type: 'ChatUncheckedCreateWithoutMembersInput',
    })
  },
})

export const ChatUpdateWithWhereUniqueWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateWithWhereUniqueWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ChatWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ChatUncheckedUpdateWithoutMembersInput' })
  },
})

export const ChatUpdateManyWithWhereWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateManyWithWhereWithoutMembersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ChatScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'ChatUncheckedUpdateManyWithoutChatsInput',
    })
  },
})

export const ChatScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ChatScalarWhereInput' })
    t.list.field('OR', { type: 'ChatScalarWhereInput' })
    t.list.field('NOT', { type: 'ChatScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
  },
})

export const MessageCreateManyChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManyChatInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('userId', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
  },
})

export const UserUpdateWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutChatsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutChatsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
  },
})

export const UserUncheckedUpdateManyWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const MessageUpdateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithoutChatInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('sender', {
      type: 'UserUpdateOneRequiredWithoutMessagesNestedInput',
    })
  },
})

export const MessageUncheckedUpdateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateWithoutChatInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const MessageUncheckedUpdateManyWithoutMessagesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateManyWithoutMessagesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const MessageCreateManySenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageCreateManySenderInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('message', { type: 'String' })
    t.nonNull.field('chatId', { type: 'String' })
    t.field('sentDate', { type: 'DateTime' })
  },
})

export const MessageUpdateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUpdateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('chat', { type: 'ChatUpdateOneRequiredWithoutMessagesNestedInput' })
  },
})

export const MessageUncheckedUpdateWithoutSenderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'MessageUncheckedUpdateWithoutSenderInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('message', { type: 'StringFieldUpdateOperationsInput' })
    t.field('chatId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('sentDate', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ChatUpdateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutChatNestedInput' })
  },
})

export const ChatUncheckedUpdateWithoutMembersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedUpdateWithoutMembersInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutChatNestedInput',
    })
  },
})

export const ChatUncheckedUpdateManyWithoutChatsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedUpdateManyWithoutChatsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const AggregateMessage = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateMessage',
  definition(t) {
    t.nullable.field('_count', { type: 'MessageCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'MessageMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'MessageMaxAggregateOutputType' })
  },
})

export const AggregateChat = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateChat',
  definition(t) {
    t.nullable.field('_count', { type: 'ChatCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'ChatMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ChatMaxAggregateOutputType' })
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

export const MessageCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('message', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('chatId', { type: 'Int' })
    t.field('sentDate', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const MessageMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('message', { type: 'String' })
    t.nullable.field('userId', { type: 'String' })
    t.nullable.field('chatId', { type: 'String' })
    t.nullable.field('sentDate', { type: 'DateTime' })
  },
})

export const MessageMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'MessageMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('message', { type: 'String' })
    t.nullable.field('userId', { type: 'String' })
    t.nullable.field('chatId', { type: 'String' })
    t.nullable.field('sentDate', { type: 'DateTime' })
  },
})

export const ChatCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ChatCountOutputType',
  definition(t) {
    t.field('members', { type: 'Int' })
    t.field('messages', { type: 'Int' })
  },
})

export const ChatCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ChatCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ChatMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ChatMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const ChatMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ChatMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
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
    t.field('userId', { type: 'Int' })
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
    t.nullable.field('userId', { type: 'String' })
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
    t.nullable.field('userId', { type: 'String' })
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
    t.field('messages', { type: 'Int' })
    t.field('chats', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('username', { type: 'Int' })
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
    t.nullable.field('username', { type: 'String' })
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
    t.nullable.field('username', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})
