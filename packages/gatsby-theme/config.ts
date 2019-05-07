type Config = {
    apiUrl: string;
    githubClientId: string;
}

const config: Config = {
    apiUrl: process.env.GATSBY_API_URL || "http://localhost:4000",
    githubClientId: process.env.GATSBY_GITHUB_CLIENT_ID || "Iv1.5345771c55b8eb37"
}

export default config;