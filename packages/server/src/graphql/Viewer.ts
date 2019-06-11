import { queryField, objectType } from 'yoga';

export const Viewer = objectType({
  name: 'Viewer',
  definition: t => {
    t.id('id');
    t.field('user', {
      type: 'User',
      resolve: async (parent, _, ctx) => {
        const { id } = parent;
        return await ctx.prisma.user({ id });
      },
    });
  },
});

export const viewer = queryField('viewer', {
  type: Viewer,
  nullable: true,
  resolve: (_, args, ctx) => {
    try {
      const id = ctx.currentUserId;
      if (!id) {
        return null;
      }
      return {
        id,
      };
    } catch (e) {
      return null;
    }
  },
});
