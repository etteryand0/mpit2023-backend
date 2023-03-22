import { enumType, inputObjectType, objectType } from 'nexus'

export const CategoryScalarFieldEnum = enumType({
  name: 'CategoryScalarFieldEnum',
  members: ['id', 'title'],
})

export const ChatScalarFieldEnum = enumType({
  name: 'ChatScalarFieldEnum',
  members: ['id', 'createdAt', 'eventId'],
})

export const EventScalarFieldEnum = enumType({
  name: 'EventScalarFieldEnum',
  members: [
    'id',
    'approved',
    'title',
    'shortDescription',
    'description',
    'roomId',
    'date',
    'image',
    'userId',
  ],
})

export const MessageScalarFieldEnum = enumType({
  name: 'MessageScalarFieldEnum',
  members: ['id', 'message', 'userId', 'chatId', 'sentDate'],
})

export const ProfileScalarFieldEnum = enumType({
  name: 'ProfileScalarFieldEnum',
  members: [
    'id',
    'userId',
    'jobTitle',
    'bio',
    'avatar',
    'name',
    'surname',
    'updatedAt',
  ],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const RoomScalarFieldEnum = enumType({
  name: 'RoomScalarFieldEnum',
  members: ['id'],
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
  members: ['id', 'username', 'createdAt', 'password', 'role', 'parentId'],
})

export const UserRole = enumType({
  name: 'UserRole',
  members: ['Student', 'Parent', 'Staff', 'Dean'],
})

export const CategoryWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryWhereInput' })
    t.list.field('OR', { type: 'CategoryWhereInput' })
    t.list.field('NOT', { type: 'CategoryWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('events', { type: 'EventListRelationFilter' })
  },
})

export const CategoryOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('events', { type: 'EventOrderByRelationAggregateInput' })
  },
})

export const CategoryWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const CategoryOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('_count', { type: 'CategoryCountOrderByAggregateInput' })
    t.field('_avg', { type: 'CategoryAvgOrderByAggregateInput' })
    t.field('_max', { type: 'CategoryMaxOrderByAggregateInput' })
    t.field('_min', { type: 'CategoryMinOrderByAggregateInput' })
    t.field('_sum', { type: 'CategorySumOrderByAggregateInput' })
  },
})

export const CategoryScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'CategoryScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'CategoryScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
  },
})

export const RoomWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'RoomWhereInput' })
    t.list.field('OR', { type: 'RoomWhereInput' })
    t.list.field('NOT', { type: 'RoomWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('events', { type: 'EventListRelationFilter' })
  },
})

export const RoomOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('events', { type: 'EventOrderByRelationAggregateInput' })
  },
})

export const RoomWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
  },
})

export const RoomOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('_count', { type: 'RoomCountOrderByAggregateInput' })
    t.field('_max', { type: 'RoomMaxOrderByAggregateInput' })
    t.field('_min', { type: 'RoomMinOrderByAggregateInput' })
  },
})

export const RoomScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'RoomScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'RoomScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'RoomScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
  },
})

export const EventWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'EventWhereInput' })
    t.list.field('OR', { type: 'EventWhereInput' })
    t.list.field('NOT', { type: 'EventWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('approved', { type: 'BoolFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('shortDescription', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('roomId', { type: 'StringFilter' })
    t.field('date', { type: 'DateTimeFilter' })
    t.field('image', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'StringNullableFilter' })
    t.field('participants', { type: 'UserListRelationFilter' })
    t.field('chat', { type: 'ChatWhereInput' })
    t.field('issuedBy', { type: 'UserWhereInput' })
    t.field('room', { type: 'RoomWhereInput' })
    t.field('responsibles', { type: 'UserListRelationFilter' })
    t.field('categories', { type: 'CategoryListRelationFilter' })
  },
})

export const EventOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('approved', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('shortDescription', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('roomId', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('image', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('participants', { type: 'UserOrderByRelationAggregateInput' })
    t.field('chat', { type: 'ChatOrderByWithRelationInput' })
    t.field('issuedBy', { type: 'UserOrderByWithRelationInput' })
    t.field('room', { type: 'RoomOrderByWithRelationInput' })
    t.field('responsibles', { type: 'UserOrderByRelationAggregateInput' })
    t.field('categories', { type: 'CategoryOrderByRelationAggregateInput' })
  },
})

export const EventWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
  },
})

export const EventOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('approved', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('shortDescription', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('roomId', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('image', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('_count', { type: 'EventCountOrderByAggregateInput' })
    t.field('_max', { type: 'EventMaxOrderByAggregateInput' })
    t.field('_min', { type: 'EventMinOrderByAggregateInput' })
  },
})

export const EventScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'EventScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'EventScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'EventScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('approved', { type: 'BoolWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('shortDescription', { type: 'StringWithAggregatesFilter' })
    t.field('description', { type: 'StringWithAggregatesFilter' })
    t.field('roomId', { type: 'StringWithAggregatesFilter' })
    t.field('date', { type: 'DateTimeWithAggregatesFilter' })
    t.field('image', { type: 'StringNullableWithAggregatesFilter' })
    t.field('userId', { type: 'StringNullableWithAggregatesFilter' })
  },
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
    t.field('eventId', { type: 'StringFilter' })
    t.field('members', { type: 'UserListRelationFilter' })
    t.field('messages', { type: 'MessageListRelationFilter' })
    t.field('event', { type: 'EventWhereInput' })
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
    t.field('eventId', { type: 'SortOrder' })
    t.field('members', { type: 'UserOrderByRelationAggregateInput' })
    t.field('messages', { type: 'MessageOrderByRelationAggregateInput' })
    t.field('event', { type: 'EventOrderByWithRelationInput' })
  },
})

export const ChatWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('eventId', { type: 'String' })
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
    t.field('eventId', { type: 'SortOrder' })
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
    t.field('eventId', { type: 'StringWithAggregatesFilter' })
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
    t.field('jobTitle', { type: 'StringNullableFilter' })
    t.field('bio', { type: 'StringNullableFilter' })
    t.field('avatar', { type: 'StringNullableFilter' })
    t.field('name', { type: 'StringNullableFilter' })
    t.field('surname', { type: 'StringNullableFilter' })
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
    t.field('jobTitle', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('surname', { type: 'SortOrder' })
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
    t.field('jobTitle', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('surname', { type: 'SortOrder' })
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
    t.field('jobTitle', { type: 'StringNullableWithAggregatesFilter' })
    t.field('bio', { type: 'StringNullableWithAggregatesFilter' })
    t.field('avatar', { type: 'StringNullableWithAggregatesFilter' })
    t.field('name', { type: 'StringNullableWithAggregatesFilter' })
    t.field('surname', { type: 'StringNullableWithAggregatesFilter' })
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
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('role', { type: 'EnumUserRoleFilter' })
    t.field('parentId', { type: 'StringNullableFilter' })
    t.field('profile', { type: 'ProfileWhereInput' })
    t.field('messages', { type: 'MessageListRelationFilter' })
    t.field('chats', { type: 'ChatListRelationFilter' })
    t.field('parent', { type: 'UserWhereInput' })
    t.field('child', { type: 'UserWhereInput' })
    t.field('eventsResponsible', { type: 'EventListRelationFilter' })
    t.field('eventsIssued', { type: 'EventListRelationFilter' })
    t.field('eventsParticipating', { type: 'EventListRelationFilter' })
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
    t.field('createdAt', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('parentId', { type: 'SortOrder' })
    t.field('profile', { type: 'ProfileOrderByWithRelationInput' })
    t.field('messages', { type: 'MessageOrderByRelationAggregateInput' })
    t.field('chats', { type: 'ChatOrderByRelationAggregateInput' })
    t.field('parent', { type: 'UserOrderByWithRelationInput' })
    t.field('child', { type: 'UserOrderByWithRelationInput' })
    t.field('eventsResponsible', { type: 'EventOrderByRelationAggregateInput' })
    t.field('eventsIssued', { type: 'EventOrderByRelationAggregateInput' })
    t.field('eventsParticipating', {
      type: 'EventOrderByRelationAggregateInput',
    })
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
    t.field('parentId', { type: 'String' })
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
    t.field('createdAt', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('parentId', { type: 'SortOrder' })
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
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('role', { type: 'EnumUserRoleWithAggregatesFilter' })
    t.field('parentId', { type: 'StringNullableWithAggregatesFilter' })
  },
})

export const CategoryCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
    t.field('events', { type: 'EventCreateNestedManyWithoutCategoriesInput' })
  },
})

export const CategoryUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
    t.field('events', {
      type: 'EventUncheckedCreateNestedManyWithoutCategoriesInput',
    })
  },
})

export const CategoryUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('events', { type: 'EventUpdateManyWithoutCategoriesNestedInput' })
  },
})

export const CategoryUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('events', {
      type: 'EventUncheckedUpdateManyWithoutCategoriesNestedInput',
    })
  },
})

export const CategoryCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
  },
})

export const CategoryUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateManyMutationInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const CategoryUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const RoomCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('events', { type: 'EventCreateNestedManyWithoutRoomInput' })
  },
})

export const RoomUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('events', {
      type: 'EventUncheckedCreateNestedManyWithoutRoomInput',
    })
  },
})

export const RoomUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('events', { type: 'EventUpdateManyWithoutRoomNestedInput' })
  },
})

export const RoomUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('events', {
      type: 'EventUncheckedUpdateManyWithoutRoomNestedInput',
    })
  },
})

export const RoomCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomCreateManyInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
  },
})

export const RoomUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const RoomUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const EventCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
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
    t.field('issuedBy', { type: 'UserCreateNestedOneWithoutEventsIssuedInput' })
    t.nonNull.field('room', { type: 'RoomCreateNestedOneWithoutEventsInput' })
    t.field('responsibles', {
      type: 'UserCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
    t.field('participants', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('chat', { type: 'ChatUncheckedCreateNestedOneWithoutEventInput' })
    t.field('responsibles', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUpdateOneWithoutEventNestedInput' })
    t.field('issuedBy', { type: 'UserUpdateOneWithoutEventsIssuedNestedInput' })
    t.field('room', { type: 'RoomUpdateOneRequiredWithoutEventsNestedInput' })
    t.field('responsibles', {
      type: 'UserUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUncheckedUpdateOneWithoutEventNestedInput' })
    t.field('responsibles', {
      type: 'UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateManyInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
  },
})

export const EventUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const EventUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
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
    t.nonNull.field('event', { type: 'EventCreateNestedOneWithoutChatInput' })
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
    t.nonNull.field('eventId', { type: 'String' })
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
    t.field('event', { type: 'EventUpdateOneRequiredWithoutChatNestedInput' })
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
    t.field('eventId', { type: 'StringFieldUpdateOperationsInput' })
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
    t.nonNull.field('eventId', { type: 'String' })
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
    t.field('eventId', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ProfileCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProfileCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('jobTitle', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('surname', { type: 'String' })
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
    t.field('jobTitle', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('surname', { type: 'String' })
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
    t.field('jobTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('surname', { type: 'NullableStringFieldUpdateOperationsInput' })
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
    t.field('jobTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('surname', { type: 'NullableStringFieldUpdateOperationsInput' })
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
    t.field('jobTitle', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('surname', { type: 'String' })
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
    t.field('jobTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('surname', { type: 'NullableStringFieldUpdateOperationsInput' })
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
    t.field('jobTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('surname', { type: 'NullableStringFieldUpdateOperationsInput' })
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('parentId', { type: 'String' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    })
    t.field('child', { type: 'UserUncheckedCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    })
    t.field('child', { type: 'UserUncheckedUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('parentId', { type: 'String' })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
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

export const EventListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventListRelationFilter',
  definition(t) {
    t.field('every', { type: 'EventWhereInput' })
    t.field('some', { type: 'EventWhereInput' })
    t.field('none', { type: 'EventWhereInput' })
  },
})

export const EventOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const CategoryCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const CategoryAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const CategoryMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const CategoryMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
  },
})

export const CategorySumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategorySumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
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

export const RoomCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const RoomMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const RoomMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const BoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
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

export const RoomRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomRelationFilter',
  definition(t) {
    t.field('is', { type: 'RoomWhereInput' })
    t.field('isNot', { type: 'RoomWhereInput' })
  },
})

export const CategoryListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryListRelationFilter',
  definition(t) {
    t.field('every', { type: 'CategoryWhereInput' })
    t.field('some', { type: 'CategoryWhereInput' })
    t.field('none', { type: 'CategoryWhereInput' })
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

export const CategoryOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const EventCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('approved', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('shortDescription', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('roomId', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('image', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const EventMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('approved', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('shortDescription', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('roomId', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('image', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const EventMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('approved', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('shortDescription', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('roomId', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('image', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const BoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
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

export const EventRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventRelationFilter',
  definition(t) {
    t.field('is', { type: 'EventWhereInput' })
    t.field('isNot', { type: 'EventWhereInput' })
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
    t.field('eventId', { type: 'SortOrder' })
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
    t.field('eventId', { type: 'SortOrder' })
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
    t.field('eventId', { type: 'SortOrder' })
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
    t.field('jobTitle', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('surname', { type: 'SortOrder' })
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
    t.field('jobTitle', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('surname', { type: 'SortOrder' })
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
    t.field('jobTitle', { type: 'SortOrder' })
    t.field('bio', { type: 'SortOrder' })
    t.field('avatar', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('surname', { type: 'SortOrder' })
    t.field('updatedAt', { type: 'SortOrder' })
  },
})

export const EnumUserRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleFilter' })
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
    t.field('createdAt', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('parentId', { type: 'SortOrder' })
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
    t.field('createdAt', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('parentId', { type: 'SortOrder' })
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
    t.field('createdAt', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('parentId', { type: 'SortOrder' })
  },
})

export const EnumUserRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumUserRoleFilter' })
    t.field('_max', { type: 'NestedEnumUserRoleFilter' })
  },
})

export const EventCreateNestedManyWithoutCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateNestedManyWithoutCategoriesInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutCategoriesInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutCategoriesInput',
    })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
  },
})

export const EventUncheckedCreateNestedManyWithoutCategoriesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedCreateNestedManyWithoutCategoriesInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutCategoriesInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutCategoriesInput',
      })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
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

export const EventUpdateManyWithoutCategoriesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithoutCategoriesNestedInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutCategoriesInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutCategoriesInput',
    })
    t.list.field('upsert', {
      type: 'EventUpsertWithWhereUniqueWithoutCategoriesInput',
    })
    t.list.field('set', { type: 'EventWhereUniqueInput' })
    t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
    t.list.field('delete', { type: 'EventWhereUniqueInput' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
    t.list.field('update', {
      type: 'EventUpdateWithWhereUniqueWithoutCategoriesInput',
    })
    t.list.field('updateMany', {
      type: 'EventUpdateManyWithWhereWithoutCategoriesInput',
    })
    t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const EventUncheckedUpdateManyWithoutCategoriesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedUpdateManyWithoutCategoriesNestedInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutCategoriesInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutCategoriesInput',
      })
      t.list.field('upsert', {
        type: 'EventUpsertWithWhereUniqueWithoutCategoriesInput',
      })
      t.list.field('set', { type: 'EventWhereUniqueInput' })
      t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
      t.list.field('delete', { type: 'EventWhereUniqueInput' })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
      t.list.field('update', {
        type: 'EventUpdateWithWhereUniqueWithoutCategoriesInput',
      })
      t.list.field('updateMany', {
        type: 'EventUpdateManyWithWhereWithoutCategoriesInput',
      })
      t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
    },
  })

export const EventCreateNestedManyWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateNestedManyWithoutRoomInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutRoomInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutRoomInput',
    })
    t.field('createMany', { type: 'EventCreateManyRoomInputEnvelope' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
  },
})

export const EventUncheckedCreateNestedManyWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateNestedManyWithoutRoomInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutRoomInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutRoomInput',
    })
    t.field('createMany', { type: 'EventCreateManyRoomInputEnvelope' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
  },
})

export const EventUpdateManyWithoutRoomNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithoutRoomNestedInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutRoomInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutRoomInput',
    })
    t.list.field('upsert', {
      type: 'EventUpsertWithWhereUniqueWithoutRoomInput',
    })
    t.field('createMany', { type: 'EventCreateManyRoomInputEnvelope' })
    t.list.field('set', { type: 'EventWhereUniqueInput' })
    t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
    t.list.field('delete', { type: 'EventWhereUniqueInput' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
    t.list.field('update', {
      type: 'EventUpdateWithWhereUniqueWithoutRoomInput',
    })
    t.list.field('updateMany', {
      type: 'EventUpdateManyWithWhereWithoutRoomInput',
    })
    t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
  },
})

export const EventUncheckedUpdateManyWithoutRoomNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateManyWithoutRoomNestedInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutRoomInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutRoomInput',
    })
    t.list.field('upsert', {
      type: 'EventUpsertWithWhereUniqueWithoutRoomInput',
    })
    t.field('createMany', { type: 'EventCreateManyRoomInputEnvelope' })
    t.list.field('set', { type: 'EventWhereUniqueInput' })
    t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
    t.list.field('delete', { type: 'EventWhereUniqueInput' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
    t.list.field('update', {
      type: 'EventUpdateWithWhereUniqueWithoutRoomInput',
    })
    t.list.field('updateMany', {
      type: 'EventUpdateManyWithWhereWithoutRoomInput',
    })
    t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
  },
})

export const UserCreateNestedManyWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserCreateNestedManyWithoutEventsParticipatingInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsParticipatingInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsParticipatingInput',
      })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
    },
  })

export const ChatCreateNestedOneWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateNestedOneWithoutEventInput',
  definition(t) {
    t.field('create', { type: 'ChatUncheckedCreateWithoutEventInput' })
    t.field('connectOrCreate', { type: 'ChatCreateOrConnectWithoutEventInput' })
    t.field('connect', { type: 'ChatWhereUniqueInput' })
  },
})

export const UserCreateNestedOneWithoutEventsIssuedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutEventsIssuedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutEventsIssuedInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutEventsIssuedInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const RoomCreateNestedOneWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomCreateNestedOneWithoutEventsInput',
  definition(t) {
    t.field('create', { type: 'RoomUncheckedCreateWithoutEventsInput' })
    t.field('connectOrCreate', {
      type: 'RoomCreateOrConnectWithoutEventsInput',
    })
    t.field('connect', { type: 'RoomWhereUniqueInput' })
  },
})

export const UserCreateNestedManyWithoutEventsResponsibleInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserCreateNestedManyWithoutEventsResponsibleInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsResponsibleInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsResponsibleInput',
      })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
    },
  })

export const CategoryCreateNestedManyWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateNestedManyWithoutEventsInput',
  definition(t) {
    t.list.field('create', { type: 'CategoryCreateWithoutEventsInput' })
    t.list.field('connectOrCreate', {
      type: 'CategoryCreateOrConnectWithoutEventsInput',
    })
    t.list.field('connect', { type: 'CategoryWhereUniqueInput' })
  },
})

export const UserUncheckedCreateNestedManyWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedCreateNestedManyWithoutEventsParticipatingInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsParticipatingInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsParticipatingInput',
      })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
    },
  })

export const ChatUncheckedCreateNestedOneWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedCreateNestedOneWithoutEventInput',
  definition(t) {
    t.field('create', { type: 'ChatUncheckedCreateWithoutEventInput' })
    t.field('connectOrCreate', { type: 'ChatCreateOrConnectWithoutEventInput' })
    t.field('connect', { type: 'ChatWhereUniqueInput' })
  },
})

export const UserUncheckedCreateNestedManyWithoutEventsResponsibleInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedCreateNestedManyWithoutEventsResponsibleInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsResponsibleInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsResponsibleInput',
      })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
    },
  })

export const CategoryUncheckedCreateNestedManyWithoutEventsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CategoryUncheckedCreateNestedManyWithoutEventsInput',
    definition(t) {
      t.list.field('create', { type: 'CategoryCreateWithoutEventsInput' })
      t.list.field('connectOrCreate', {
        type: 'CategoryCreateOrConnectWithoutEventsInput',
      })
      t.list.field('connect', { type: 'CategoryWhereUniqueInput' })
    },
  })

export const BoolFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'BoolFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Boolean' })
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

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const UserUpdateManyWithoutEventsParticipatingNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateManyWithoutEventsParticipatingNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsParticipatingInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsParticipatingInput',
      })
      t.list.field('upsert', {
        type: 'UserUpsertWithWhereUniqueWithoutEventsParticipatingInput',
      })
      t.list.field('set', { type: 'UserWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
      t.list.field('delete', { type: 'UserWhereUniqueInput' })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserUpdateWithWhereUniqueWithoutEventsParticipatingInput',
      })
      t.list.field('updateMany', {
        type: 'UserUpdateManyWithWhereWithoutEventsParticipatingInput',
      })
      t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
    },
  })

export const ChatUpdateOneWithoutEventNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateOneWithoutEventNestedInput',
  definition(t) {
    t.field('create', { type: 'ChatUncheckedCreateWithoutEventInput' })
    t.field('connectOrCreate', { type: 'ChatCreateOrConnectWithoutEventInput' })
    t.field('upsert', { type: 'ChatUpsertWithoutEventInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'ChatWhereUniqueInput' })
    t.field('update', { type: 'ChatUncheckedUpdateWithoutEventInput' })
  },
})

export const UserUpdateOneWithoutEventsIssuedNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutEventsIssuedNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutEventsIssuedInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutEventsIssuedInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutEventsIssuedInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutEventsIssuedInput' })
  },
})

export const RoomUpdateOneRequiredWithoutEventsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUpdateOneRequiredWithoutEventsNestedInput',
  definition(t) {
    t.field('create', { type: 'RoomUncheckedCreateWithoutEventsInput' })
    t.field('connectOrCreate', {
      type: 'RoomCreateOrConnectWithoutEventsInput',
    })
    t.field('upsert', { type: 'RoomUpsertWithoutEventsInput' })
    t.field('connect', { type: 'RoomWhereUniqueInput' })
    t.field('update', { type: 'RoomUncheckedUpdateWithoutEventsInput' })
  },
})

export const UserUpdateManyWithoutEventsResponsibleNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateManyWithoutEventsResponsibleNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsResponsibleInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsResponsibleInput',
      })
      t.list.field('upsert', {
        type: 'UserUpsertWithWhereUniqueWithoutEventsResponsibleInput',
      })
      t.list.field('set', { type: 'UserWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
      t.list.field('delete', { type: 'UserWhereUniqueInput' })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserUpdateWithWhereUniqueWithoutEventsResponsibleInput',
      })
      t.list.field('updateMany', {
        type: 'UserUpdateManyWithWhereWithoutEventsResponsibleInput',
      })
      t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
    },
  })

export const CategoryUpdateManyWithoutEventsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateManyWithoutEventsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'CategoryCreateWithoutEventsInput' })
    t.list.field('connectOrCreate', {
      type: 'CategoryCreateOrConnectWithoutEventsInput',
    })
    t.list.field('upsert', {
      type: 'CategoryUpsertWithWhereUniqueWithoutEventsInput',
    })
    t.list.field('set', { type: 'CategoryWhereUniqueInput' })
    t.list.field('disconnect', { type: 'CategoryWhereUniqueInput' })
    t.list.field('delete', { type: 'CategoryWhereUniqueInput' })
    t.list.field('connect', { type: 'CategoryWhereUniqueInput' })
    t.list.field('update', {
      type: 'CategoryUpdateWithWhereUniqueWithoutEventsInput',
    })
    t.list.field('updateMany', {
      type: 'CategoryUpdateManyWithWhereWithoutEventsInput',
    })
    t.list.field('deleteMany', { type: 'CategoryScalarWhereInput' })
  },
})

export const UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsParticipatingInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsParticipatingInput',
      })
      t.list.field('upsert', {
        type: 'UserUpsertWithWhereUniqueWithoutEventsParticipatingInput',
      })
      t.list.field('set', { type: 'UserWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
      t.list.field('delete', { type: 'UserWhereUniqueInput' })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserUpdateWithWhereUniqueWithoutEventsParticipatingInput',
      })
      t.list.field('updateMany', {
        type: 'UserUpdateManyWithWhereWithoutEventsParticipatingInput',
      })
      t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
    },
  })

export const ChatUncheckedUpdateOneWithoutEventNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedUpdateOneWithoutEventNestedInput',
  definition(t) {
    t.field('create', { type: 'ChatUncheckedCreateWithoutEventInput' })
    t.field('connectOrCreate', { type: 'ChatCreateOrConnectWithoutEventInput' })
    t.field('upsert', { type: 'ChatUpsertWithoutEventInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'ChatWhereUniqueInput' })
    t.field('update', { type: 'ChatUncheckedUpdateWithoutEventInput' })
  },
})

export const UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'UserCreateWithoutEventsResponsibleInput',
      })
      t.list.field('connectOrCreate', {
        type: 'UserCreateOrConnectWithoutEventsResponsibleInput',
      })
      t.list.field('upsert', {
        type: 'UserUpsertWithWhereUniqueWithoutEventsResponsibleInput',
      })
      t.list.field('set', { type: 'UserWhereUniqueInput' })
      t.list.field('disconnect', { type: 'UserWhereUniqueInput' })
      t.list.field('delete', { type: 'UserWhereUniqueInput' })
      t.list.field('connect', { type: 'UserWhereUniqueInput' })
      t.list.field('update', {
        type: 'UserUpdateWithWhereUniqueWithoutEventsResponsibleInput',
      })
      t.list.field('updateMany', {
        type: 'UserUpdateManyWithWhereWithoutEventsResponsibleInput',
      })
      t.list.field('deleteMany', { type: 'UserScalarWhereInput' })
    },
  })

export const CategoryUncheckedUpdateManyWithoutEventsNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CategoryUncheckedUpdateManyWithoutEventsNestedInput',
    definition(t) {
      t.list.field('create', { type: 'CategoryCreateWithoutEventsInput' })
      t.list.field('connectOrCreate', {
        type: 'CategoryCreateOrConnectWithoutEventsInput',
      })
      t.list.field('upsert', {
        type: 'CategoryUpsertWithWhereUniqueWithoutEventsInput',
      })
      t.list.field('set', { type: 'CategoryWhereUniqueInput' })
      t.list.field('disconnect', { type: 'CategoryWhereUniqueInput' })
      t.list.field('delete', { type: 'CategoryWhereUniqueInput' })
      t.list.field('connect', { type: 'CategoryWhereUniqueInput' })
      t.list.field('update', {
        type: 'CategoryUpdateWithWhereUniqueWithoutEventsInput',
      })
      t.list.field('updateMany', {
        type: 'CategoryUpdateManyWithWhereWithoutEventsInput',
      })
      t.list.field('deleteMany', { type: 'CategoryScalarWhereInput' })
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

export const EventCreateNestedOneWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateNestedOneWithoutChatInput',
  definition(t) {
    t.field('create', { type: 'EventUncheckedCreateWithoutChatInput' })
    t.field('connectOrCreate', { type: 'EventCreateOrConnectWithoutChatInput' })
    t.field('connect', { type: 'EventWhereUniqueInput' })
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

export const EventUpdateOneRequiredWithoutChatNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateOneRequiredWithoutChatNestedInput',
  definition(t) {
    t.field('create', { type: 'EventUncheckedCreateWithoutChatInput' })
    t.field('connectOrCreate', { type: 'EventCreateOrConnectWithoutChatInput' })
    t.field('upsert', { type: 'EventUpsertWithoutChatInput' })
    t.field('connect', { type: 'EventWhereUniqueInput' })
    t.field('update', { type: 'EventUncheckedUpdateWithoutChatInput' })
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

export const UserCreateNestedOneWithoutChildInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutChildInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutChildInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutChildInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserCreateNestedOneWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutParentInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutParentInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutParentInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const EventCreateNestedManyWithoutResponsiblesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateNestedManyWithoutResponsiblesInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutResponsiblesInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutResponsiblesInput',
    })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
  },
})

export const EventCreateNestedManyWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateNestedManyWithoutIssuedByInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutIssuedByInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutIssuedByInput',
    })
    t.field('createMany', { type: 'EventCreateManyIssuedByInputEnvelope' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
  },
})

export const EventCreateNestedManyWithoutParticipantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateNestedManyWithoutParticipantsInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutParticipantsInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutParticipantsInput',
    })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
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

export const UserUncheckedCreateNestedOneWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateNestedOneWithoutParentInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutParentInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutParentInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const EventUncheckedCreateNestedManyWithoutResponsiblesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutResponsiblesInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutResponsiblesInput',
      })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
    },
  })

export const EventUncheckedCreateNestedManyWithoutIssuedByInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutIssuedByInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutIssuedByInput',
      })
      t.field('createMany', { type: 'EventCreateManyIssuedByInputEnvelope' })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
    },
  })

export const EventUncheckedCreateNestedManyWithoutParticipantsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutParticipantsInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutParticipantsInput',
      })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
    },
  })

export const EnumUserRoleFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumUserRoleFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'UserRole' })
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

export const UserUpdateOneWithoutChildNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutChildNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutChildInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutChildInput' })
    t.field('upsert', { type: 'UserUpsertWithoutChildInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutChildInput' })
  },
})

export const UserUpdateOneWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneWithoutParentNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutParentInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutParentInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutParentInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutParentInput' })
  },
})

export const EventUpdateManyWithoutResponsiblesNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithoutResponsiblesNestedInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutResponsiblesInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutResponsiblesInput',
    })
    t.list.field('upsert', {
      type: 'EventUpsertWithWhereUniqueWithoutResponsiblesInput',
    })
    t.list.field('set', { type: 'EventWhereUniqueInput' })
    t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
    t.list.field('delete', { type: 'EventWhereUniqueInput' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
    t.list.field('update', {
      type: 'EventUpdateWithWhereUniqueWithoutResponsiblesInput',
    })
    t.list.field('updateMany', {
      type: 'EventUpdateManyWithWhereWithoutResponsiblesInput',
    })
    t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
  },
})

export const EventUpdateManyWithoutIssuedByNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithoutIssuedByNestedInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutIssuedByInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutIssuedByInput',
    })
    t.list.field('upsert', {
      type: 'EventUpsertWithWhereUniqueWithoutIssuedByInput',
    })
    t.field('createMany', { type: 'EventCreateManyIssuedByInputEnvelope' })
    t.list.field('set', { type: 'EventWhereUniqueInput' })
    t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
    t.list.field('delete', { type: 'EventWhereUniqueInput' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
    t.list.field('update', {
      type: 'EventUpdateWithWhereUniqueWithoutIssuedByInput',
    })
    t.list.field('updateMany', {
      type: 'EventUpdateManyWithWhereWithoutIssuedByInput',
    })
    t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
  },
})

export const EventUpdateManyWithoutParticipantsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithoutParticipantsNestedInput',
  definition(t) {
    t.list.field('create', { type: 'EventCreateWithoutParticipantsInput' })
    t.list.field('connectOrCreate', {
      type: 'EventCreateOrConnectWithoutParticipantsInput',
    })
    t.list.field('upsert', {
      type: 'EventUpsertWithWhereUniqueWithoutParticipantsInput',
    })
    t.list.field('set', { type: 'EventWhereUniqueInput' })
    t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
    t.list.field('delete', { type: 'EventWhereUniqueInput' })
    t.list.field('connect', { type: 'EventWhereUniqueInput' })
    t.list.field('update', {
      type: 'EventUpdateWithWhereUniqueWithoutParticipantsInput',
    })
    t.list.field('updateMany', {
      type: 'EventUpdateManyWithWhereWithoutParticipantsInput',
    })
    t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
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

export const UserUncheckedUpdateOneWithoutParentNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateOneWithoutParentNestedInput',
  definition(t) {
    t.field('create', { type: 'UserUncheckedCreateWithoutParentInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutParentInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutParentInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUncheckedUpdateWithoutParentInput' })
  },
})

export const EventUncheckedUpdateManyWithoutResponsiblesNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutResponsiblesInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutResponsiblesInput',
      })
      t.list.field('upsert', {
        type: 'EventUpsertWithWhereUniqueWithoutResponsiblesInput',
      })
      t.list.field('set', { type: 'EventWhereUniqueInput' })
      t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
      t.list.field('delete', { type: 'EventWhereUniqueInput' })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
      t.list.field('update', {
        type: 'EventUpdateWithWhereUniqueWithoutResponsiblesInput',
      })
      t.list.field('updateMany', {
        type: 'EventUpdateManyWithWhereWithoutResponsiblesInput',
      })
      t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
    },
  })

export const EventUncheckedUpdateManyWithoutIssuedByNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutIssuedByInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutIssuedByInput',
      })
      t.list.field('upsert', {
        type: 'EventUpsertWithWhereUniqueWithoutIssuedByInput',
      })
      t.field('createMany', { type: 'EventCreateManyIssuedByInputEnvelope' })
      t.list.field('set', { type: 'EventWhereUniqueInput' })
      t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
      t.list.field('delete', { type: 'EventWhereUniqueInput' })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
      t.list.field('update', {
        type: 'EventUpdateWithWhereUniqueWithoutIssuedByInput',
      })
      t.list.field('updateMany', {
        type: 'EventUpdateManyWithWhereWithoutIssuedByInput',
      })
      t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
    },
  })

export const EventUncheckedUpdateManyWithoutParticipantsNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
    definition(t) {
      t.list.field('create', { type: 'EventCreateWithoutParticipantsInput' })
      t.list.field('connectOrCreate', {
        type: 'EventCreateOrConnectWithoutParticipantsInput',
      })
      t.list.field('upsert', {
        type: 'EventUpsertWithWhereUniqueWithoutParticipantsInput',
      })
      t.list.field('set', { type: 'EventWhereUniqueInput' })
      t.list.field('disconnect', { type: 'EventWhereUniqueInput' })
      t.list.field('delete', { type: 'EventWhereUniqueInput' })
      t.list.field('connect', { type: 'EventWhereUniqueInput' })
      t.list.field('update', {
        type: 'EventUpdateWithWhereUniqueWithoutParticipantsInput',
      })
      t.list.field('updateMany', {
        type: 'EventUpdateManyWithWhereWithoutParticipantsInput',
      })
      t.list.field('deleteMany', { type: 'EventScalarWhereInput' })
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

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
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

export const NestedBoolFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolFilter' })
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

export const NestedBoolWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedBoolWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Boolean' })
    t.field('not', { type: 'NestedBoolWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedBoolFilter' })
    t.field('_max', { type: 'NestedBoolFilter' })
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

export const NestedEnumUserRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumUserRoleFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleFilter' })
  },
})

export const NestedEnumUserRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumUserRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'UserRole' })
    t.list.field('in', { type: 'UserRole' })
    t.list.field('notIn', { type: 'UserRole' })
    t.field('not', { type: 'NestedEnumUserRoleWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumUserRoleFilter' })
    t.field('_max', { type: 'NestedEnumUserRoleFilter' })
  },
})

export const EventCreateWithoutCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateWithoutCategoriesInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
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
    t.field('issuedBy', { type: 'UserCreateNestedOneWithoutEventsIssuedInput' })
    t.nonNull.field('room', { type: 'RoomCreateNestedOneWithoutEventsInput' })
    t.field('responsibles', {
      type: 'UserCreateNestedManyWithoutEventsResponsibleInput',
    })
  },
})

export const EventUncheckedCreateWithoutCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateWithoutCategoriesInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
    t.field('participants', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('chat', { type: 'ChatUncheckedCreateNestedOneWithoutEventInput' })
    t.field('responsibles', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsResponsibleInput',
    })
  },
})

export const EventCreateOrConnectWithoutCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateOrConnectWithoutCategoriesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'EventUncheckedCreateWithoutCategoriesInput',
    })
  },
})

export const EventUpsertWithWhereUniqueWithoutCategoriesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpsertWithWhereUniqueWithoutCategoriesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'EventUncheckedUpdateWithoutCategoriesInput',
      })
      t.nonNull.field('create', {
        type: 'EventUncheckedCreateWithoutCategoriesInput',
      })
    },
  },
)

export const EventUpdateWithWhereUniqueWithoutCategoriesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpdateWithWhereUniqueWithoutCategoriesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'EventUncheckedUpdateWithoutCategoriesInput',
      })
    },
  },
)

export const EventUpdateManyWithWhereWithoutCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithWhereWithoutCategoriesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'EventUncheckedUpdateManyWithoutEventsInput',
    })
  },
})

export const EventScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'EventScalarWhereInput' })
    t.list.field('OR', { type: 'EventScalarWhereInput' })
    t.list.field('NOT', { type: 'EventScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('approved', { type: 'BoolFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('shortDescription', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('roomId', { type: 'StringFilter' })
    t.field('date', { type: 'DateTimeFilter' })
    t.field('image', { type: 'StringNullableFilter' })
    t.field('userId', { type: 'StringNullableFilter' })
  },
})

export const EventCreateWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateWithoutRoomInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
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
    t.field('issuedBy', { type: 'UserCreateNestedOneWithoutEventsIssuedInput' })
    t.field('responsibles', {
      type: 'UserCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventUncheckedCreateWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateWithoutRoomInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
    t.field('participants', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('chat', { type: 'ChatUncheckedCreateNestedOneWithoutEventInput' })
    t.field('responsibles', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventCreateOrConnectWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateOrConnectWithoutRoomInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('create', { type: 'EventUncheckedCreateWithoutRoomInput' })
  },
})

export const EventCreateManyRoomInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateManyRoomInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'EventCreateManyRoomInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const EventUpsertWithWhereUniqueWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpsertWithWhereUniqueWithoutRoomInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('update', { type: 'EventUncheckedUpdateWithoutRoomInput' })
    t.nonNull.field('create', { type: 'EventUncheckedCreateWithoutRoomInput' })
  },
})

export const EventUpdateWithWhereUniqueWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithWhereUniqueWithoutRoomInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('data', { type: 'EventUncheckedUpdateWithoutRoomInput' })
  },
})

export const EventUpdateManyWithWhereWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithWhereWithoutRoomInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'EventUncheckedUpdateManyWithoutEventsInput',
    })
  },
})

export const UserCreateWithoutEventsParticipatingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutEventsParticipatingInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
  },
})

export const UserUncheckedCreateWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedCreateWithoutEventsParticipatingInput',
    definition(t) {
      t.field('id', { type: 'String' })
      t.nonNull.field('username', { type: 'String' })
      t.field('createdAt', { type: 'DateTime' })
      t.nonNull.field('password', { type: 'String' })
      t.nonNull.field('role', { type: 'UserRole' })
      t.field('parentId', { type: 'String' })
      t.field('profile', {
        type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
      })
      t.field('messages', {
        type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
      })
      t.field('chats', {
        type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
      })
      t.field('child', {
        type: 'UserUncheckedCreateNestedOneWithoutParentInput',
      })
      t.field('eventsResponsible', {
        type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
      })
      t.field('eventsIssued', {
        type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
      })
    },
  })

export const UserCreateOrConnectWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserCreateOrConnectWithoutEventsParticipatingInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'UserUncheckedCreateWithoutEventsParticipatingInput',
      })
    },
  })

export const ChatCreateWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateWithoutEventInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('members', { type: 'UserCreateNestedManyWithoutChatsInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutChatInput' })
  },
})

export const ChatUncheckedCreateWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedCreateWithoutEventInput',
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

export const ChatCreateOrConnectWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatCreateOrConnectWithoutEventInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ChatWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ChatUncheckedCreateWithoutEventInput' })
  },
})

export const UserCreateWithoutEventsIssuedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutEventsIssuedInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
  },
})

export const UserUncheckedCreateWithoutEventsIssuedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutEventsIssuedInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('parentId', { type: 'String' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    })
    t.field('child', { type: 'UserUncheckedCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
    })
  },
})

export const UserCreateOrConnectWithoutEventsIssuedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutEventsIssuedInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutEventsIssuedInput',
    })
  },
})

export const RoomCreateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomCreateWithoutEventsInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
  },
})

export const RoomUncheckedCreateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUncheckedCreateWithoutEventsInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
  },
})

export const RoomCreateOrConnectWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomCreateOrConnectWithoutEventsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'RoomWhereUniqueInput' })
    t.nonNull.field('create', { type: 'RoomUncheckedCreateWithoutEventsInput' })
  },
})

export const UserCreateWithoutEventsResponsibleInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutEventsResponsibleInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
  },
})

export const UserUncheckedCreateWithoutEventsResponsibleInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedCreateWithoutEventsResponsibleInput',
    definition(t) {
      t.field('id', { type: 'String' })
      t.nonNull.field('username', { type: 'String' })
      t.field('createdAt', { type: 'DateTime' })
      t.nonNull.field('password', { type: 'String' })
      t.nonNull.field('role', { type: 'UserRole' })
      t.field('parentId', { type: 'String' })
      t.field('profile', {
        type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
      })
      t.field('messages', {
        type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
      })
      t.field('chats', {
        type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
      })
      t.field('child', {
        type: 'UserUncheckedCreateNestedOneWithoutParentInput',
      })
      t.field('eventsIssued', {
        type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
      })
      t.field('eventsParticipating', {
        type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
      })
    },
  },
)

export const UserCreateOrConnectWithoutEventsResponsibleInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'UserCreateOrConnectWithoutEventsResponsibleInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'UserUncheckedCreateWithoutEventsResponsibleInput',
      })
    },
  },
)

export const CategoryCreateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateWithoutEventsInput',
  definition(t) {
    t.nonNull.field('title', { type: 'String' })
  },
})

export const CategoryUncheckedCreateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedCreateWithoutEventsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('title', { type: 'String' })
  },
})

export const CategoryCreateOrConnectWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryCreateOrConnectWithoutEventsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'CategoryUncheckedCreateWithoutEventsInput',
    })
  },
})

export const UserUpsertWithWhereUniqueWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpsertWithWhereUniqueWithoutEventsParticipatingInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'UserUncheckedUpdateWithoutEventsParticipatingInput',
      })
      t.nonNull.field('create', {
        type: 'UserUncheckedCreateWithoutEventsParticipatingInput',
      })
    },
  })

export const UserUpdateWithWhereUniqueWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateWithWhereUniqueWithoutEventsParticipatingInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'UserUncheckedUpdateWithoutEventsParticipatingInput',
      })
    },
  })

export const UserUpdateManyWithWhereWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateManyWithWhereWithoutEventsParticipatingInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'UserUncheckedUpdateManyWithoutParticipantsInput',
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
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('role', { type: 'EnumUserRoleFilter' })
    t.field('parentId', { type: 'StringNullableFilter' })
  },
})

export const ChatUpsertWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpsertWithoutEventInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ChatUncheckedUpdateWithoutEventInput' })
    t.nonNull.field('create', { type: 'ChatUncheckedCreateWithoutEventInput' })
  },
})

export const ChatUpdateWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUpdateWithoutEventInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('members', { type: 'UserUpdateManyWithoutChatsNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutChatNestedInput' })
  },
})

export const ChatUncheckedUpdateWithoutEventInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ChatUncheckedUpdateWithoutEventInput',
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

export const UserUpsertWithoutEventsIssuedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutEventsIssuedInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'UserUncheckedUpdateWithoutEventsIssuedInput',
    })
    t.nonNull.field('create', {
      type: 'UserUncheckedCreateWithoutEventsIssuedInput',
    })
  },
})

export const UserUpdateWithoutEventsIssuedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutEventsIssuedInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
  },
})

export const UserUncheckedUpdateWithoutEventsIssuedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutEventsIssuedInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    })
    t.field('child', { type: 'UserUncheckedUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
    })
  },
})

export const RoomUpsertWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUpsertWithoutEventsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'RoomUncheckedUpdateWithoutEventsInput' })
    t.nonNull.field('create', { type: 'RoomUncheckedCreateWithoutEventsInput' })
  },
})

export const RoomUpdateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUpdateWithoutEventsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const RoomUncheckedUpdateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'RoomUncheckedUpdateWithoutEventsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const UserUpsertWithWhereUniqueWithoutEventsResponsibleInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpsertWithWhereUniqueWithoutEventsResponsibleInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'UserUncheckedUpdateWithoutEventsResponsibleInput',
      })
      t.nonNull.field('create', {
        type: 'UserUncheckedCreateWithoutEventsResponsibleInput',
      })
    },
  })

export const UserUpdateWithWhereUniqueWithoutEventsResponsibleInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateWithWhereUniqueWithoutEventsResponsibleInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'UserUncheckedUpdateWithoutEventsResponsibleInput',
      })
    },
  })

export const UserUpdateManyWithWhereWithoutEventsResponsibleInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUpdateManyWithWhereWithoutEventsResponsibleInput',
    definition(t) {
      t.nonNull.field('where', { type: 'UserScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'UserUncheckedUpdateManyWithoutResponsiblesInput',
      })
    },
  })

export const CategoryUpsertWithWhereUniqueWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpsertWithWhereUniqueWithoutEventsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'CategoryUncheckedUpdateWithoutEventsInput',
    })
    t.nonNull.field('create', {
      type: 'CategoryUncheckedCreateWithoutEventsInput',
    })
  },
})

export const CategoryUpdateWithWhereUniqueWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateWithWhereUniqueWithoutEventsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryWhereUniqueInput' })
    t.nonNull.field('data', {
      type: 'CategoryUncheckedUpdateWithoutEventsInput',
    })
  },
})

export const CategoryUpdateManyWithWhereWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateManyWithWhereWithoutEventsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'CategoryScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'CategoryUncheckedUpdateManyWithoutCategoriesInput',
    })
  },
})

export const CategoryScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'CategoryScalarWhereInput' })
    t.list.field('OR', { type: 'CategoryScalarWhereInput' })
    t.list.field('NOT', { type: 'CategoryScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('title', { type: 'StringFilter' })
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('parentId', { type: 'String' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    })
    t.field('child', { type: 'UserUncheckedCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
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
    t.nonNull.field('event', { type: 'EventCreateNestedOneWithoutChatInput' })
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
    t.nonNull.field('eventId', { type: 'String' })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    })
    t.field('child', { type: 'UserUncheckedUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
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
    t.field('event', { type: 'EventUpdateOneRequiredWithoutChatNestedInput' })
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
    t.field('eventId', { type: 'StringFieldUpdateOperationsInput' })
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('parentId', { type: 'String' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('child', { type: 'UserUncheckedCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
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

export const EventCreateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateWithoutChatInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('participants', {
      type: 'UserCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('issuedBy', { type: 'UserCreateNestedOneWithoutEventsIssuedInput' })
    t.nonNull.field('room', { type: 'RoomCreateNestedOneWithoutEventsInput' })
    t.field('responsibles', {
      type: 'UserCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventUncheckedCreateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateWithoutChatInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
    t.field('participants', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('responsibles', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventCreateOrConnectWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateOrConnectWithoutChatInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('create', { type: 'EventUncheckedCreateWithoutChatInput' })
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

export const EventUpsertWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpsertWithoutChatInput',
  definition(t) {
    t.nonNull.field('update', { type: 'EventUncheckedUpdateWithoutChatInput' })
    t.nonNull.field('create', { type: 'EventUncheckedCreateWithoutChatInput' })
  },
})

export const EventUpdateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithoutChatInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('issuedBy', { type: 'UserUpdateOneWithoutEventsIssuedNestedInput' })
    t.field('room', { type: 'RoomUpdateOneRequiredWithoutEventsNestedInput' })
    t.field('responsibles', {
      type: 'UserUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateWithoutChatInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateWithoutChatInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('responsibles', {
      type: 'UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedUpdateManyWithoutEventsNestedInput',
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
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
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
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('parentId', { type: 'String' })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    })
    t.field('child', { type: 'UserUncheckedCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    })
    t.field('child', { type: 'UserUncheckedUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
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
    t.field('jobTitle', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('surname', { type: 'String' })
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
    t.field('jobTitle', { type: 'String' })
    t.field('bio', { type: 'String' })
    t.field('avatar', { type: 'String' })
    t.field('name', { type: 'String' })
    t.field('surname', { type: 'String' })
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
    t.nonNull.field('event', { type: 'EventCreateNestedOneWithoutChatInput' })
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
    t.nonNull.field('eventId', { type: 'String' })
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

export const UserCreateWithoutChildInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutChildInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('parent', { type: 'UserCreateNestedOneWithoutChildInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
  },
})

export const UserUncheckedCreateWithoutChildInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutChildInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('parentId', { type: 'String' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    })
    t.field('eventsResponsible', {
      type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
    })
  },
})

export const UserCreateOrConnectWithoutChildInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutChildInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutChildInput' })
  },
})

export const UserCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', { type: 'ProfileCreateNestedOneWithoutUserInput' })
    t.field('messages', { type: 'MessageCreateNestedManyWithoutSenderInput' })
    t.field('chats', { type: 'ChatCreateNestedManyWithoutMembersInput' })
    t.field('child', { type: 'UserCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventCreateNestedManyWithoutParticipantsInput',
    })
  },
})

export const UserUncheckedCreateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.nonNull.field('username', { type: 'String' })
    t.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('role', { type: 'UserRole' })
    t.field('profile', {
      type: 'ProfileUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedCreateNestedManyWithoutSenderInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedCreateNestedManyWithoutMembersInput',
    })
    t.field('child', { type: 'UserUncheckedCreateNestedOneWithoutParentInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedCreateNestedManyWithoutResponsiblesInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedCreateNestedManyWithoutIssuedByInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedCreateNestedManyWithoutParticipantsInput',
    })
  },
})

export const UserCreateOrConnectWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutParentInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutParentInput' })
  },
})

export const EventCreateWithoutResponsiblesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateWithoutResponsiblesInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
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
    t.field('issuedBy', { type: 'UserCreateNestedOneWithoutEventsIssuedInput' })
    t.nonNull.field('room', { type: 'RoomCreateNestedOneWithoutEventsInput' })
    t.field('categories', {
      type: 'CategoryCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventUncheckedCreateWithoutResponsiblesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateWithoutResponsiblesInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
    t.field('participants', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('chat', { type: 'ChatUncheckedCreateNestedOneWithoutEventInput' })
    t.field('categories', {
      type: 'CategoryUncheckedCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventCreateOrConnectWithoutResponsiblesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateOrConnectWithoutResponsiblesInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'EventUncheckedCreateWithoutResponsiblesInput',
    })
  },
})

export const EventCreateWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateWithoutIssuedByInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
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

export const EventUncheckedCreateWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateWithoutIssuedByInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('participants', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsParticipatingInput',
    })
    t.field('chat', { type: 'ChatUncheckedCreateNestedOneWithoutEventInput' })
    t.field('responsibles', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventCreateOrConnectWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateOrConnectWithoutIssuedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'EventUncheckedCreateWithoutIssuedByInput',
    })
  },
})

export const EventCreateManyIssuedByInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateManyIssuedByInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'EventCreateManyIssuedByInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const EventCreateWithoutParticipantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateWithoutParticipantsInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('chat', { type: 'ChatCreateNestedOneWithoutEventInput' })
    t.field('issuedBy', { type: 'UserCreateNestedOneWithoutEventsIssuedInput' })
    t.nonNull.field('room', { type: 'RoomCreateNestedOneWithoutEventsInput' })
    t.field('responsibles', {
      type: 'UserCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventUncheckedCreateWithoutParticipantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedCreateWithoutParticipantsInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
    t.field('chat', { type: 'ChatUncheckedCreateNestedOneWithoutEventInput' })
    t.field('responsibles', {
      type: 'UserUncheckedCreateNestedManyWithoutEventsResponsibleInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedCreateNestedManyWithoutEventsInput',
    })
  },
})

export const EventCreateOrConnectWithoutParticipantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateOrConnectWithoutParticipantsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'EventUncheckedCreateWithoutParticipantsInput',
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
    t.field('jobTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('surname', { type: 'NullableStringFieldUpdateOperationsInput' })
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
    t.field('jobTitle', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('bio', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('avatar', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('name', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('surname', { type: 'NullableStringFieldUpdateOperationsInput' })
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
    t.field('eventId', { type: 'StringFilter' })
  },
})

export const UserUpsertWithoutChildInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutChildInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUncheckedUpdateWithoutChildInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutChildInput' })
  },
})

export const UserUpdateWithoutChildInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutChildInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
  },
})

export const UserUncheckedUpdateWithoutChildInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutChildInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    })
    t.field('eventsResponsible', {
      type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
    })
  },
})

export const UserUpsertWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutParentInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUncheckedUpdateWithoutParentInput' })
    t.nonNull.field('create', { type: 'UserUncheckedCreateWithoutParentInput' })
  },
})

export const UserUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
  },
})

export const UserUncheckedUpdateWithoutParentInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutParentInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('chats', {
      type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
    })
    t.field('child', { type: 'UserUncheckedUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
    })
  },
})

export const EventUpsertWithWhereUniqueWithoutResponsiblesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpsertWithWhereUniqueWithoutResponsiblesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'EventUncheckedUpdateWithoutResponsiblesInput',
      })
      t.nonNull.field('create', {
        type: 'EventUncheckedCreateWithoutResponsiblesInput',
      })
    },
  })

export const EventUpdateWithWhereUniqueWithoutResponsiblesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpdateWithWhereUniqueWithoutResponsiblesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'EventUncheckedUpdateWithoutResponsiblesInput',
      })
    },
  })

export const EventUpdateManyWithWhereWithoutResponsiblesInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpdateManyWithWhereWithoutResponsiblesInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'EventUncheckedUpdateManyWithoutEventsResponsibleInput',
      })
    },
  },
)

export const EventUpsertWithWhereUniqueWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpsertWithWhereUniqueWithoutIssuedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('update', {
      type: 'EventUncheckedUpdateWithoutIssuedByInput',
    })
    t.nonNull.field('create', {
      type: 'EventUncheckedCreateWithoutIssuedByInput',
    })
  },
})

export const EventUpdateWithWhereUniqueWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithWhereUniqueWithoutIssuedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
    t.nonNull.field('data', {
      type: 'EventUncheckedUpdateWithoutIssuedByInput',
    })
  },
})

export const EventUpdateManyWithWhereWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateManyWithWhereWithoutIssuedByInput',
  definition(t) {
    t.nonNull.field('where', { type: 'EventScalarWhereInput' })
    t.nonNull.field('data', {
      type: 'EventUncheckedUpdateManyWithoutEventsIssuedInput',
    })
  },
})

export const EventUpsertWithWhereUniqueWithoutParticipantsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpsertWithWhereUniqueWithoutParticipantsInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'EventUncheckedUpdateWithoutParticipantsInput',
      })
      t.nonNull.field('create', {
        type: 'EventUncheckedCreateWithoutParticipantsInput',
      })
    },
  })

export const EventUpdateWithWhereUniqueWithoutParticipantsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpdateWithWhereUniqueWithoutParticipantsInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'EventUncheckedUpdateWithoutParticipantsInput',
      })
    },
  })

export const EventUpdateManyWithWhereWithoutParticipantsInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUpdateManyWithWhereWithoutParticipantsInput',
    definition(t) {
      t.nonNull.field('where', { type: 'EventScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'EventUncheckedUpdateManyWithoutEventsParticipatingInput',
      })
    },
  },
)

export const EventUpdateWithoutCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithoutCategoriesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUpdateOneWithoutEventNestedInput' })
    t.field('issuedBy', { type: 'UserUpdateOneWithoutEventsIssuedNestedInput' })
    t.field('room', { type: 'RoomUpdateOneRequiredWithoutEventsNestedInput' })
    t.field('responsibles', {
      type: 'UserUpdateManyWithoutEventsResponsibleNestedInput',
    })
  },
})

export const EventUncheckedUpdateWithoutCategoriesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateWithoutCategoriesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUncheckedUpdateOneWithoutEventNestedInput' })
    t.field('responsibles', {
      type: 'UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput',
    })
  },
})

export const EventUncheckedUpdateManyWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateManyWithoutEventsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const EventCreateManyRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateManyRoomInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
    t.field('userId', { type: 'String' })
  },
})

export const EventUpdateWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithoutRoomInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUpdateOneWithoutEventNestedInput' })
    t.field('issuedBy', { type: 'UserUpdateOneWithoutEventsIssuedNestedInput' })
    t.field('responsibles', {
      type: 'UserUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateWithoutRoomInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateWithoutRoomInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUncheckedUpdateOneWithoutEventNestedInput' })
    t.field('responsibles', {
      type: 'UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const UserUpdateWithoutEventsParticipatingInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutEventsParticipatingInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
  },
})

export const UserUncheckedUpdateWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedUpdateWithoutEventsParticipatingInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('username', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('password', { type: 'StringFieldUpdateOperationsInput' })
      t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
      t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('profile', {
        type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
      })
      t.field('messages', {
        type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
      })
      t.field('chats', {
        type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
      })
      t.field('child', {
        type: 'UserUncheckedUpdateOneWithoutParentNestedInput',
      })
      t.field('eventsResponsible', {
        type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
      })
      t.field('eventsIssued', {
        type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
      })
    },
  })

export const UserUncheckedUpdateManyWithoutParticipantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutParticipantsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const UserUpdateWithoutEventsResponsibleInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutEventsResponsibleInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('chats', { type: 'ChatUpdateManyWithoutMembersNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
  },
})

export const UserUncheckedUpdateWithoutEventsResponsibleInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'UserUncheckedUpdateWithoutEventsResponsibleInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('username', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('password', { type: 'StringFieldUpdateOperationsInput' })
      t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
      t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('profile', {
        type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
      })
      t.field('messages', {
        type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
      })
      t.field('chats', {
        type: 'ChatUncheckedUpdateManyWithoutMembersNestedInput',
      })
      t.field('child', {
        type: 'UserUncheckedUpdateOneWithoutParentNestedInput',
      })
      t.field('eventsIssued', {
        type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
      })
      t.field('eventsParticipating', {
        type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
      })
    },
  },
)

export const UserUncheckedUpdateManyWithoutResponsiblesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyWithoutResponsiblesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('username', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const CategoryUpdateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUpdateWithoutEventsInput',
  definition(t) {
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const CategoryUncheckedUpdateWithoutEventsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'CategoryUncheckedUpdateWithoutEventsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const CategoryUncheckedUpdateManyWithoutCategoriesInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'CategoryUncheckedUpdateManyWithoutCategoriesInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('profile', { type: 'ProfileUpdateOneWithoutUserNestedInput' })
    t.field('messages', { type: 'MessageUpdateManyWithoutSenderNestedInput' })
    t.field('parent', { type: 'UserUpdateOneWithoutChildNestedInput' })
    t.field('child', { type: 'UserUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUpdateManyWithoutParticipantsNestedInput',
    })
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('profile', {
      type: 'ProfileUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('messages', {
      type: 'MessageUncheckedUpdateManyWithoutSenderNestedInput',
    })
    t.field('child', { type: 'UserUncheckedUpdateOneWithoutParentNestedInput' })
    t.field('eventsResponsible', {
      type: 'EventUncheckedUpdateManyWithoutResponsiblesNestedInput',
    })
    t.field('eventsIssued', {
      type: 'EventUncheckedUpdateManyWithoutIssuedByNestedInput',
    })
    t.field('eventsParticipating', {
      type: 'EventUncheckedUpdateManyWithoutParticipantsNestedInput',
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
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumUserRoleFieldUpdateOperationsInput' })
    t.field('parentId', { type: 'NullableStringFieldUpdateOperationsInput' })
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

export const EventCreateManyIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventCreateManyIssuedByInput',
  definition(t) {
    t.nonNull.field('id', { type: 'String' })
    t.field('approved', { type: 'Boolean' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('shortDescription', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.nonNull.field('roomId', { type: 'String' })
    t.nonNull.field('date', { type: 'DateTime' })
    t.field('image', { type: 'String' })
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
    t.field('event', { type: 'EventUpdateOneRequiredWithoutChatNestedInput' })
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
    t.field('eventId', { type: 'StringFieldUpdateOperationsInput' })
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
    t.field('eventId', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const EventUpdateWithoutResponsiblesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithoutResponsiblesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUpdateOneWithoutEventNestedInput' })
    t.field('issuedBy', { type: 'UserUpdateOneWithoutEventsIssuedNestedInput' })
    t.field('room', { type: 'RoomUpdateOneRequiredWithoutEventsNestedInput' })
    t.field('categories', {
      type: 'CategoryUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateWithoutResponsiblesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateWithoutResponsiblesInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUncheckedUpdateOneWithoutEventNestedInput' })
    t.field('categories', {
      type: 'CategoryUncheckedUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateManyWithoutEventsResponsibleInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedUpdateManyWithoutEventsResponsibleInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
      t.field('description', { type: 'StringFieldUpdateOperationsInput' })
      t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
      t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    },
  })

export const EventUpdateWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithoutIssuedByInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUpdateOneWithoutEventNestedInput' })
    t.field('room', { type: 'RoomUpdateOneRequiredWithoutEventsNestedInput' })
    t.field('responsibles', {
      type: 'UserUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateWithoutIssuedByInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateWithoutIssuedByInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('participants', {
      type: 'UserUncheckedUpdateManyWithoutEventsParticipatingNestedInput',
    })
    t.field('chat', { type: 'ChatUncheckedUpdateOneWithoutEventNestedInput' })
    t.field('responsibles', {
      type: 'UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateManyWithoutEventsIssuedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedUpdateManyWithoutEventsIssuedInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
      t.field('description', { type: 'StringFieldUpdateOperationsInput' })
      t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
      t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    },
  },
)

export const EventUpdateWithoutParticipantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUpdateWithoutParticipantsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('chat', { type: 'ChatUpdateOneWithoutEventNestedInput' })
    t.field('issuedBy', { type: 'UserUpdateOneWithoutEventsIssuedNestedInput' })
    t.field('room', { type: 'RoomUpdateOneRequiredWithoutEventsNestedInput' })
    t.field('responsibles', {
      type: 'UserUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateWithoutParticipantsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EventUncheckedUpdateWithoutParticipantsInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('chat', { type: 'ChatUncheckedUpdateOneWithoutEventNestedInput' })
    t.field('responsibles', {
      type: 'UserUncheckedUpdateManyWithoutEventsResponsibleNestedInput',
    })
    t.field('categories', {
      type: 'CategoryUncheckedUpdateManyWithoutEventsNestedInput',
    })
  },
})

export const EventUncheckedUpdateManyWithoutEventsParticipatingInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'EventUncheckedUpdateManyWithoutEventsParticipatingInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('approved', { type: 'BoolFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('shortDescription', { type: 'StringFieldUpdateOperationsInput' })
      t.field('description', { type: 'StringFieldUpdateOperationsInput' })
      t.field('roomId', { type: 'StringFieldUpdateOperationsInput' })
      t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('image', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('userId', { type: 'NullableStringFieldUpdateOperationsInput' })
    },
  })

export const AggregateCategory = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateCategory',
  definition(t) {
    t.nullable.field('_count', { type: 'CategoryCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'CategoryAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'CategorySumAggregateOutputType' })
    t.nullable.field('_min', { type: 'CategoryMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'CategoryMaxAggregateOutputType' })
  },
})

export const AggregateRoom = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateRoom',
  definition(t) {
    t.nullable.field('_count', { type: 'RoomCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'RoomMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'RoomMaxAggregateOutputType' })
  },
})

export const AggregateEvent = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateEvent',
  definition(t) {
    t.nullable.field('_count', { type: 'EventCountAggregateOutputType' })
    t.nullable.field('_min', { type: 'EventMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'EventMaxAggregateOutputType' })
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

export const CategoryCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryCountOutputType',
  definition(t) {
    t.field('events', { type: 'Int' })
  },
})

export const CategoryCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const CategoryAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const CategorySumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategorySumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const CategoryMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const CategoryMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'CategoryMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('title', { type: 'String' })
  },
})

export const RoomCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RoomCountOutputType',
  definition(t) {
    t.field('events', { type: 'Int' })
  },
})

export const RoomCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RoomCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const RoomMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RoomMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
  },
})

export const RoomMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'RoomMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
  },
})

export const EventCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'EventCountOutputType',
  definition(t) {
    t.field('participants', { type: 'Int' })
    t.field('responsibles', { type: 'Int' })
    t.field('categories', { type: 'Int' })
  },
})

export const EventCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'EventCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('approved', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('shortDescription', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('roomId', { type: 'Int' })
    t.field('date', { type: 'Int' })
    t.field('image', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const EventMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'EventMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('approved', { type: 'Boolean' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('shortDescription', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('roomId', { type: 'String' })
    t.nullable.field('date', { type: 'DateTime' })
    t.nullable.field('image', { type: 'String' })
    t.nullable.field('userId', { type: 'String' })
  },
})

export const EventMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'EventMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('approved', { type: 'Boolean' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('shortDescription', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('roomId', { type: 'String' })
    t.nullable.field('date', { type: 'DateTime' })
    t.nullable.field('image', { type: 'String' })
    t.nullable.field('userId', { type: 'String' })
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
    t.field('eventId', { type: 'Int' })
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
    t.nullable.field('eventId', { type: 'String' })
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
    t.nullable.field('eventId', { type: 'String' })
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
    t.field('jobTitle', { type: 'Int' })
    t.field('bio', { type: 'Int' })
    t.field('avatar', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('surname', { type: 'Int' })
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
    t.nullable.field('jobTitle', { type: 'String' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('surname', { type: 'String' })
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
    t.nullable.field('jobTitle', { type: 'String' })
    t.nullable.field('bio', { type: 'String' })
    t.nullable.field('avatar', { type: 'String' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('surname', { type: 'String' })
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
    t.field('eventsResponsible', { type: 'Int' })
    t.field('eventsIssued', { type: 'Int' })
    t.field('eventsParticipating', { type: 'Int' })
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
    t.field('createdAt', { type: 'Int' })
    t.field('password', { type: 'Int' })
    t.field('role', { type: 'Int' })
    t.field('parentId', { type: 'Int' })
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
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('role', { type: 'UserRole' })
    t.nullable.field('parentId', { type: 'String' })
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
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('role', { type: 'UserRole' })
    t.nullable.field('parentId', { type: 'String' })
  },
})
