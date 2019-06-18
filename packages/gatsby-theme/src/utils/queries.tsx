import gql from 'graphql-tag';

export const getTutorialbyGatsbyID = gql`
  query getTutorialbyGatsbyID($gatsbyID: String!) {
    getTutorialbyGatsbyID(gatsbyID: $gatsbyID) {
      id
      name
      upvotes
      numberofChapters
      numberOfStudents
      viewerUserTutorial {
        id
        upvoted
        bookmarked
        currentChapter
      }
    }
  }
`;

export const upsertCurrentChapter = gql`
  mutation upsertCurrentChapter($gatsbyID: String!, $chapter: Int!) {
    upsertCurrentChapter(gatsbyID: $gatsbyID, chapter: $chapter) {
      code
      success
      userTutorial {
        id
        currentChapter
      }
    }
  }
`;

export const BookmarkTutorial = gql`
  mutation BookmarkTutorial($id: ID!) {
    bookmarkTutorial(tutorialId: $id) {
      code
      success
      userTutorial {
        id
        bookmarked
      }
    }
  }
`;

export const UpvoteTutorial = gql`
  mutation UpvoteTutorial($id: ID!) {
    upvoteTutorial(tutorialId: $id) {
      code
      success
      userTutorial {
        id
        upvoted
        tutorial {
          id
          upvotes
        }
      }
    }
  }
`;

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
