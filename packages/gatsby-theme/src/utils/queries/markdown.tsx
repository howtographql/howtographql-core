import { graphql } from 'gatsby';

export const CommunityTutorialQuery = graphql`
  query CommunityTutorialQuery {
    tutorials: allMdx(
      filter: {
        frontmatter: { tutorialTitle: { ne: null } }
        fileAbsolutePath: { regex: "/community/" }
      }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            id
            tutorialTitle
            description
          }
        }
      }
    }
  }
`;

export const FullStackCourseQuery = graphql`
  query FullStackCourseQuery {
    frontend: allMdx(
      filter: {
        frontmatter: { tutorialTitle: { ne: null } }
        fileAbsolutePath: { regex: "/courses/frontend/" }
      }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            tutorialTitle
            description
          }
        }
      }
    }
    backend: allMdx(
      filter: {
        frontmatter: { tutorialTitle: { ne: null } }
        fileAbsolutePath: { regex: "/courses/backend/" }
      }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            tutorialTitle
            description
          }
        }
      }
    }
  }
`;
