import gql from 'graphql-tag';

export const CURRENT_USER = gql`
  query currentUser {
    viewer {
      id
      user {
        id
        name
        avatarUrl
        githubHandle
      }
    }
  }
`;
