import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
// import { MDXRenderer } from 'gatsby-mdx';

function PageTemplate({ data }: { data: any }) {
  return (
    <Layout>
      <div>
        <h1>{data.allMdx.totalCount}</h1>
        {/* <MDXRenderer>{mdx.code.body}</MDXRenderer> */}
      </div>
    </Layout>
  );
}
export const query = graphql`
  query TutorialOverviewQuery($folderRegex: String) {
    allMdx(filter: { fileAbsolutePath: { regex: $folderRegex } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          code {
            body
          }
        }
      }
    }
  }
`;
export default PageTemplate;
