import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";

// import { MDXRenderer } from 'gatsby-mdx';

function PageTemplate({ data }: { data: any }) {
  return (
    <Layout>
      <div>
        <img src={data.overview.frontmatter.banner} />
        <h1>{data.overview.frontmatter.tutorialTitle}</h1>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query TutorialOverviewQuery($folderRegex: String) {
    allMdx(
      filter: {
        frontmatter: { pageTitle: { ne: null } }
        fileAbsolutePath: { regex: $folderRegex }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            tutorialTitle
            pageTitle
            title
            banner
          }
        }
      }
    }
    overview: mdx(
      frontmatter: { tutorialTitle: { ne: null } }
      fileAbsolutePath: { regex: $folderRegex }
    ) {
      id
      frontmatter {
        tutorialTitle
        title
        banner
      }
    }
  }
`;
export default PageTemplate;
