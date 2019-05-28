import { prismaObjectType, objectType, mutationField, idArg } from 'yoga'
import { getUserId } from '../utils';

export const UserTutorial = prismaObjectType({
  name: 'UserTutorial',
  definition(t) {
    // If you wish you customize/hide fields, call `t.prismaFields(['id', ...])`  with the desired field names
    // If you wish to add custom fields on top of prisma's ones, use t.field/string/int...
    t.prismaFields(['*'])
  },
})

export const UserTutorialPayload = objectType({
  name: "UserTutorialPayload",
  definition: (t) => {
    t.implements("PayloadInterface");
    t.field("userTutorial", {
      type: UserTutorial
    });
  }
})

export const upvote = mutationField("upvote", {
  type: UserTutorialPayload,
  description: "A user can upvote a tutorial.",
  args: {
    tutorialId: idArg({
      required: true
    })
  },
  resolve: async (parent, args, ctx) => {
    const currentUserId = getUserId(ctx);
    return ({
      code: "200",
      success: true,
      userTutorial: {
        id: "123"
      }
    })
  }
})
