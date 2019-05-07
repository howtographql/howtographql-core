import { prismaObjectType } from 'yoga'

/*
type Mutation {
  deletePost(id: ID!): Post
  signupUser(name: String!, email: String!): User!
  createDraft(title: String!, content: String!, authorEmail: String!): Post!
  publish(id: ID!): Post!
}
 */
export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    // All fields from the underlying object type are exposed automatically
    // use `t.primaFields(['fieldName', ...])` to hide, customize, or select specific fields

    // This removes all fields from the underlying Mutation object type
    t.prismaFields([])
  },
})
