import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Chapter from "../chapter";
import { TutorialOverviewQuery } from "src/graphqlTypes";
import { Author } from "../Author";

interface PageTemplateProps {
  data: TutorialOverviewQuery;
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = ({ data }) => {
  return (
    <Layout>
      <div>
        <img src={data!.overview!.frontmatter!.banner!} />
<<<<<<< HEAD
        {/* TODO: implement author querying and info */}
        <Author name="Kelsey Yim" job="Developer @ Novvum" info="hi" />
=======
        <Author authors={authors} />
>>>>>>> add functionality for multiple authors
        <h1>{data!.overview!.frontmatter!.tutorialTitle}</h1>
        <div>
          {data!.allMdx!.edges.map((mdx, index) => {
            console.log(mdx.node.id);
            let num = index + 1;
            return (
              <div>
                <Chapter
                  num={num < 10 ? `0${num}` : num}
                  title={mdx.node.frontmatter!.pageTitle}
                  description={mdx.node.frontmatter!.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query TutorialOverview($folderRegex: String) {
    allMdx(
      sort: { fields: fileAbsolutePath }
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
        banner
      }
    }
  }
`;

let authors = [
  {
    name: "Kelsey Yim",
    job: "Software Developer",
    picture: "https://www.w3schools.com/howto/img_avatar2.png"
  },
  {
    name: "Alli Colyer",
    job: "Party Planner",
    picture: "https://www.w3schools.com/howto/img_avatar2.png"
  }
];

export default PageTemplate;
