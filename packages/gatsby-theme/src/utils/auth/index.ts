import gql from 'graphql-tag';
import { client } from '../../Apollo';
import config from '../../../config';

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

export const loginUser = async () => {
  const popup = openPopup();
  const code = await listen();
  try {
    await authenticateUser(code);
  } catch (e) {
    console.error(e);
  }
  popup.close();
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
  client.resetStore();
};

export const getAuthToken = () => {
  return localStorage.getItem('token');
};

const listen = async () => {
  return new Promise(resolve => {
    window.addEventListener('message', receiveMessage, false);
    function receiveMessage(event: any) {
      if (event.data) {
        window.removeEventListener('message', receiveMessage);
        resolve(event.data);
      }
    }
  });
};

const openPopup = () => {
  const width = 600,
    height = 600;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;
  const url = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${
    config.githubClientId
    }`;

  return window.open(
    url,
    '',
    `toolbar=no, location=no, directories=no, status=no, menubar=no,
      scrollbars=no, resizable=no, copyhistory=no, width=${width},
      height=${height}, top=${top}, left=${left}`,
  );
};
