import { UserRole } from '@prisma/client'
import { rule, shield, not, and, or } from 'graphql-shield'
import { Context } from './context'

const isAuthenticated = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  return ctx.user !== null
})

const isStudent = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  return ctx.user.role === UserRole.Student
})

const isDean = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  return ctx.user.role === UserRole.Dean
})

const isParent = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  return ctx.user.role === UserRole.Parent
})

// TODO: assign safe rules
export const permissions = shield({
  Mutation: {
    login: not(isAuthenticated),
    signup: not(isAuthenticated),
    approveEvent: and(isAuthenticated, isDean),
    issueEvent: and(isAuthenticated, isStudent),
    registerForEvent: and(isAuthenticated, or(isStudent, isParent)),
    '*': isAuthenticated,
  },
})
