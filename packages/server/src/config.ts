export type Config = {
  github: {
    CLIENT_ID: string
    CLIENT_SECRET: string
  }
  jwt: {
    SECRET: string
  }
}
// https://github.com/login/oauth/authorize?client_id=2f9502dd9f0f44ca2e3b&redirect_uri=http://localhost:8000
const config: Config = {
  github: {
    CLIENT_ID: process.env.GQL_GITHUB_CLIENT_ID || '2f9502dd9f0f44ca2e3b',
    CLIENT_SECRET:
      process.env.GQL_GITHUB_CLIENT_SECRET ||
      'c89179109eec632c40ae3b589ed231497eb78cf1',
  },
  jwt: {
    SECRET: process.env.GQL_JWT_SECRET || 'helloworld',
  },
}

export default config
