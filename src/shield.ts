import { UserRole } from '@prisma/client'
import { rule, shield, and, or, allow } from 'graphql-shield'
import { Context } from './context'

const isAuthenticated = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  return ctx.user !== null
})

const isStudent = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  console.log('isstudent', ctx.user, ctx.user?.role === UserRole.Student)
  return ctx.user?.role === UserRole.Student
})

const isDean = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  return ctx.user?.role === UserRole.Dean
})

const isParent = rule({ cache: 'contextual' })(async (_parent, _args, ctx: Context, _info) => {
  return ctx.user?.role === UserRole.Parent
})

// TODO: assign safe rules
export const permissions = shield({
  Mutation: {
    login: allow,
    signup: allow,
    registerForEvent: allow,
    '*': isAuthenticated,
    // approveEvent: and(isAuthenticated, isDean),
    // issueEvent: and(isAuthenticated, isStudent),
    // registerForEvent: and(isAuthenticated, or(isStudent, isParent)),
  },
}, {
  debug: process.env.NODE_ENV === 'development',
})
