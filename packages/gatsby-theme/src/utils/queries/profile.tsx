import gql from 'graphql-tag';

export const PROFILE_QUERY = gql`
  query profileQuery {
    viewer {
      user {
        id
        name
        githubHandle
        avatarUrl
        bio
        upvoted: userTutorials(where: { upvoted: true }) {
          tutorial {
            id
            name
          }
        }
        bookmarked: userTutorials(where: { bookmarked: true }) {
          tutorial {
            id
            name
          }
        }
        progress: userTutorials(where: { currentChapter_not: 0 }) {
          tutorial {
            id
            name
          }
        }
      }
    }
  }
`;
