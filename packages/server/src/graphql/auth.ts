import { mutationField, stringArg, objectType } from "yoga";
import * as jwt from 'jsonwebtoken'
import { getGithubToken, getGithubUser, GithubUser } from '../github';
import { Context } from "../context";
import { User } from "../../.yoga/prisma-client";
import config from "../config";
import { PayloadInterface } from "./PayloadInterface";

export const AuthenticateUserPayload = objectType({
    name: "AuthenticateUserPayload",
    definition: (t) => {
        t.implements(PayloadInterface);
        t.field("user", {
            type: "User"
        })
        t.string("token")
    }
})

export const authenticate = mutationField("authenticate", {
    type: AuthenticateUserPayload,
    nullable: true,
    args: {
        githubCode: stringArg({
            required: true,
            description: "GitHub OAuth Token from the client."
        })
    },
    resolve: async (_, { githubCode }, ctx) => {
        const githubToken = await getGithubToken(githubCode)
        const githubUser = await getGithubUser(githubToken)
        let user = await getPrismaUser(ctx, githubUser.id.toString())

        if (!user) {
            user = await createPrismaUser(ctx, githubUser)
        }

        return {
            success: true,
            message: null,
            code: null,
            token: jwt.sign({ userId: user.id }, config.jwt.SECRET),
            user
        }
    }
})

// Helpers -------------------------------------------------------------------

async function getPrismaUser(ctx: Context, githubUserId: string): Promise<User> {
    return await ctx.prisma.user({ githubUserId })
}

async function createPrismaUser(ctx: Context, githubUser: GithubUser): Promise<User> {
    const user = await ctx.prisma.createUser({
        githubUserId: githubUser.id.toString(),
        name: githubUser.name,
        email: githubUser.email,
        githubHandle: githubUser.login,
        bio: githubUser.bio,
        avatarUrl: githubUser.avatar_url
    })
    return user
}