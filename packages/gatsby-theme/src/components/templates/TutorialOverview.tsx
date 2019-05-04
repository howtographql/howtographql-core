import React from "react";
import Layout from "../layout";
import Chapter from "../chapter";
import { TutorialOverviewQuery } from "src/graphqlTypes";
import { Author } from "../Author";
import TutorialHeader from "../overview/TutorialHeader";
import { Heading, Flex } from "../shared/base";
import ProgressBar from "../overview/ProgressBar";
import IconButton from "../Button";
import { Content } from "../shared/styledHelpers";

interface PageTemplateProps {
  data: TutorialOverviewQuery;
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = ({ data }) => {
  return (
    <Layout>
      <Content>
        <Flex>
          {/* <img src={data!.overview!.frontmatter!.banner!} /> */}
          <TutorialHeader
            title={data!.overview!.frontmatter!.tutorialTitle}
            description={data!.overview!.frontmatter!.description}
            tags={["React", "Apollo", "Javascript"]}
          />
          <div>
            <ProgressBar percentage={33} width={100} />
            <IconButton type="tutorial" link="http://localhost:8000/components">
              Start tutorial
            </IconButton>
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
      </Content>
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
