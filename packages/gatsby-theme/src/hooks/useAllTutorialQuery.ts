import { graphql, useStaticQuery } from "gatsby";
import { PostsQueryData } from "../interfaces/PostsQuery.interface";

export const useAllTutorialQuery = () => {
  const { allMdx }: PostsQueryData = useStaticQuery(graphql`
    query ALL_TUTORIALS {
      allMdx {
        edges {
          node {
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
