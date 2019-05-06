export type Config = {
    github: {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
    },
    jwt: {
        SECRET: string
    }
};
// https://github.com/login/oauth/authorize?client_id=Iv1.5345771c55b8eb37&redirect_uri=http://localhost:8000
const config: Config = {
    github: {
        CLIENT_ID: process.env.GQL_GITHUB_CLIENT_ID || "Iv1.5345771c55b8eb37",
        CLIENT_SECRET: process.env.GQL_GITHUB_CLIENT_SECRET || "19cef65a19b44c2c28e86f3969d83583cf071b02"
    },
    jwt: {
        SECRET: process.env.GQL_JWT_SECRET || "helloworld"
    }
}

export default config;