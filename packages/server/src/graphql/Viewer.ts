import { queryField, objectType } from "yoga";
import { getUserId } from "../utils";

export const Viewer = objectType({
    name: "Viewer",
    definition: (t) => {
        t.id("id");
        t.field("user", {
            type: "User",
            resolve: async ({ id }, args, ctx) => {
                return await ctx.prisma.user({ id })
            }
        })
    }
});

export const viewer = queryField("viewer", {
    type: Viewer,
    nullable: true,
    resolve: (_, args, ctx) => {
        try {
            const id = getUserId(ctx)
            return {
                id
            }
        } catch (e) {
            return null;
        }
    }
})