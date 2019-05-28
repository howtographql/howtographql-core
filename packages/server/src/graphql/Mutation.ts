import { prismaObjectType, interfaceType } from 'yoga'


export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    // All fields from the underlying object type are exposed automatically
    // use `t.primaFields(['fieldName', ...])` to hide, customize, or select specific fields

    // This removes all fields from the underlying Mutation object type
    t.prismaFields([])
  },
})

export const PayloadInterface = interfaceType({
  name: "PayloadInterface",
  description: "The standard interface for all mutation responses",
  definition: (t) => {
    t.string("code");
    t.boolean("success");
    t.string("message");
    t.resolveType(() => null);
  }
})
