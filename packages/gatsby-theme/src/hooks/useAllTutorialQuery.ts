import { graphql, useStaticQuery } from 'gatsby';
import { AllTutorialsQuery } from 'src/graphqlTypes';

export const useAllTutorialQuery = () => {
  const { allMdx }: AllTutorialsQuery = useStaticQuery(graphql`
    query AllTutorials {
      allMdx {
        edges {
          node {
            id
            excerpt
            fileAbsolutePath
            frontmatter {
              path
              pageTitle
              description
            }
            code {
              body
            }
          }
        }
      }
    }
  `);

  return { allMdx };
};
