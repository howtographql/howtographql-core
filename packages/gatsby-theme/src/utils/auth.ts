import gql from 'graphql-tag';
import { client } from '../Apollo';

const TOKEN_KEY = 'token';

const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUser($code: String!) {
    authenticate(githubCode: $code) {
      token
    }
  }
`;
export const authenticateUser = async (code: string) => {
  const res = await client.mutate({
    mutation: AUTHENTICATE_USER_MUTATION,
    variables: {
      code,
    },
  });
  localStorage.setItem(TOKEN_KEY, res.data.authenticate.token);
  client.resetStore();
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
  client.resetStore();
};
