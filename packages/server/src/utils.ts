import * as jwt from 'jsonwebtoken'
import { Context } from "./context";
import config from './config';

export function getUserId(ctx: Context) {
    const Authorization = ctx.req.get('Authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, config.jwt.SECRET!) as {
            userId: string
        }
        return userId
    }

    throw new AuthError()
}

export class AuthError extends Error {
    constructor() {
        super('Not authorized')
    }
}
