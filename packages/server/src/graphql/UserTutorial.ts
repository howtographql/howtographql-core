import { prismaObjectType, objectType, mutationField, idArg } from 'yoga';
import { PayloadInterface } from './PayloadInterface';
import { authorizeUser } from './auth';
import { Context } from '../context';
import {
  UserTutorial as UserTutorialType,
  UserTutorialCreateInput,
} from '../../.yoga/prisma-client';

export const UserTutorial = prismaObjectType({
  name: 'UserTutorial',
  definition(t) {
    // If you wish you customize/hide fields, call `t.prismaFields(['id', ...])`  with the desired field names
    // If you wish to add custom fields on top of prisma's ones, use t.field/string/int...
    t.prismaFields(['*']);
  },
});

export const UserTutorialPayload = objectType({
  name: 'UserTutorialPayload',
  definition: type => {
    type.implements(PayloadInterface);
    type.field('userTutorial', {
      type: UserTutorial,
      nullable: true,
    });
  },
});

export const upvoteTutorial = mutationField('upvoteTutorial', {
  type: UserTutorialPayload,
  description: 'An authenticated user can upvote a tutorial.',
  args: {
    tutorialId: idArg({
      required: true,
    }),
  },
  authorize: authorizeUser(),
  resolve: async (_, { tutorialId }, ctx) => {
    const userId = ctx.currentUserId;
    const existingUserTutorial = await getUserTutorial(
      {
        userId,
        tutorialId,
      },
      ctx,
    );
    let upsertedUserTutorial = await upsertUserTutorial(
      {
        userId,
        tutorialId,
        userTutorialId: existingUserTutorial && existingUserTutorial.id,
        updates: {
          upvoted: existingUserTutorial ? !existingUserTutorial.upvoted : true,
        },
      },
      ctx,
    );
    return {
      code: '200',
      success: true,
      message: null,
      userTutorial: upsertedUserTutorial,
    };
  },
});

export const bookmarkTutorial = mutationField('bookmarkTutorial', {
  type: UserTutorialPayload,
  description: 'An authenticated user can bookmark a tutorial.',
  args: {
    tutorialId: idArg({
      required: true,
    }),
  },
  authorize: authorizeUser(),
  resolve: async (_, { tutorialId }, ctx) => {
    const userId = ctx.currentUserId;
    const existingUserTutorial = await getUserTutorial(
      {
        userId,
        tutorialId,
      },
      ctx,
    );
    let upsertedUserTutorial = await upsertUserTutorial(
      {
        userId,
        tutorialId,
        userTutorialId: existingUserTutorial && existingUserTutorial.id,
        updates: {
          bookmarked: existingUserTutorial
            ? !existingUserTutorial.bookmarked
            : true,
        },
      },
      ctx,
    );
    return {
      code: '200',
      success: true,
      message: null,
      userTutorial: upsertedUserTutorial,
    };
  },
});

async function upsertUserTutorial(
  args: {
    userTutorialId?: string;
    updates: UserTutorialCreateInput;
    userId: string;
    tutorialId: any;
  },
  ctx: Context,
): Promise<UserTutorialType> {
  const { userTutorialId, updates, userId, tutorialId } = args;
  let upsertedUserTutorial;
  if (userTutorialId) {
    upsertedUserTutorial = await ctx.prisma.updateUserTutorial({
      where: {
        id: userTutorialId,
      },
      data: updates,
    });
  } else {
    upsertedUserTutorial = await ctx.prisma.createUserTutorial({
      ...updates,
      user: {
        connect: {
          id: userId,
        },
      },
      tutorial: {
        connect: {
          id: tutorialId,
        },
      },
    });
  }
  return upsertedUserTutorial;
}

export async function getUserTutorial(
  args: { userId: string; tutorialId: any },
  ctx: Context,
): Promise<null | UserTutorialType> {
  const { userId, tutorialId } = args;
  const existingUserTutorials = await ctx.prisma.userTutorials({
    first: 1,
    where: {
      user: {
        id: userId,
      },
      tutorial: {
        id: tutorialId,
      },
    },
  });
  if (existingUserTutorials.length > 0) {
    return existingUserTutorials[0];
  }
  return null;
}
