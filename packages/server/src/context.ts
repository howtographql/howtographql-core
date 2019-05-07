import { prisma, Prisma } from '../.yoga/prisma-client'
import { yogaContext } from 'yoga'

export interface Context {
  prisma: Prisma
  req: any
}

export default yogaContext(({ req }) => ({
  req,
  prisma,
}))
