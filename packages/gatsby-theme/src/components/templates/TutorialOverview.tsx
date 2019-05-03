import React from "react";
import Layout from "../layout";
import Chapter from "../chapter";
import { TutorialOverviewQuery } from "src/graphqlTypes";
import { Author } from "../Author";
import TutorialHeader from "../overview/TutorialHeader";
import { Heading, Flex } from "../shared/base";
import ProgressBar from "../ProgressBar";

interface PageTemplateProps {
  data: TutorialOverviewQuery;
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = ({ data }) => {
  return (
    <Layout>
      <TutorialButton
        text="Start Introduction"
        icon="https://i.ibb.co/MBKTQ9b/Icon.png"
      />
      <Flex>
        {/* <img src={data!.overview!.frontmatter!.banner!} /> */}
        <TutorialHeader
          title={data!.overview!.frontmatter!.tutorialTitle}
          description={data!.overview!.frontmatter!.description}
          tags={["React", "Apollo", "Javascript"]}
        />
        <div>
          <ProgressBar percentage={33} width={100} />
          <button> Spectrum </button>
          <Author authors={authors} />
        </div>
      </Flex>
      <div>
        <Heading> Chapters </Heading>
        {data!.allMdx!.edges.map((mdx, index) => {
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
        description
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
