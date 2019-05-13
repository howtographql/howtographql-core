type Config = {
  apiUrl: string;
  githubClientId: string;
};

const config: Config = {
  apiUrl: process.env.GATSBY_API_URL || 'http://localhost:4000',
  githubClientId: process.env.GATSBY_GITHUB_CLIENT_ID || '2f9502dd9f0f44ca2e3b',
};

export default config;
