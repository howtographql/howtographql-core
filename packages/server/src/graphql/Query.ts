import { prismaObjectType } from 'yoga';

export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    // All fields from the underlying object type are exposed automatically
    // use `t.primaFields(['fieldName', ...])` to hide, customize, or select specific fields

    // This removes all fields from the underlying Query object type
    t.prismaFields([]);
  },
});
