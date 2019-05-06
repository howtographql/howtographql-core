import { queryField, objectType } from "yoga";
import { getUserId } from "../utils";

export const Viewer = objectType({
    name: "Viewer",
    definition: (t) => {
        t.field("user", {
            type: "User",
            resolve: async (_, args, ctx) => {
                const id = getUserId(ctx)
                return await ctx.prisma.user({ id })
            }
        })
    }
});

export const viewer = queryField("viewer", {
    type: Viewer,
    resolve: () => ({})
})