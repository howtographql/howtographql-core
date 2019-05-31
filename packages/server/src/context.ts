import { prisma, Prisma } from '../.yoga/prisma-client'
import { yogaContext } from 'yoga'
import { getUserId } from './utils';

export interface Context {
  prisma: Prisma
  req: any
  currentUserId?: string;
}

export default yogaContext(({ req }) => {
  const context = {
    req,
    prisma,
    currentUserId: null
  } as Context;
  try {
    context.currentUserId = getUserId(context);
  } catch (e) {
    // no user
  }
  return context;
})
