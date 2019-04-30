import { graphql, useStaticQuery } from "gatsby";

import { LayoutInformationQuery } from "src/graphqlTypes";

export const useLayoutQuery = () => {
  const { site }: LayoutInformationQuery = useStaticQuery(graphql`
    query LayoutInformation {
      site {
        siteMetadata {
          # change siteMetaData in 'gatsby-config.js'
          title
          description
          keywords
        }
      }
    }
  `);

  return { site };
};
