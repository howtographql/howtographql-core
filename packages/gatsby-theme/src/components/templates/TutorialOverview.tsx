import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import { TutorialOverviewQuery } from "src/graphqlTypes";

function PageTemplate({ data }: { data: TutorialOverviewQuery }) {
  return (
    <Layout>
      <div>
        <img src={data!.overview!.frontmatter!.banner!} />
        <h1>{data!.overview!.frontmatter!.tutorialTitle}</h1>
        <div>
          {data!.allMdx!.edges.map(mdx => {
            return (
              <div>
                {mdx.node.frontmatter!.pageTitle}
                {mdx.node.frontmatter!.description}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
export const query = graphql`
  query TutorialOverview($folderRegex: String) {
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
            pageTitle
            description
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
