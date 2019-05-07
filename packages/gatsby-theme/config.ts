type Config = {
    apiUrl: string;
}

const config: Config = {
    apiUrl: process.env.GATSBY_API_URL || "http://localhost:4000"
}

export default config;