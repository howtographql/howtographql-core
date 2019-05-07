import React from "react";
import Layout from "../layout";
import Chapter from "../chapter";
import { TutorialOverviewQuery } from "src/graphqlTypes";
import { Author } from "../Author";
import TutorialHeader from "../overview/TutorialHeader";
import { Heading, Flex, Box } from "../shared/base";
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
          <Box width={3 / 4} aligncontent="center">
            <TutorialHeader
              width={1 / 2}
              title={data!.overview!.frontmatter!.tutorialTitle}
              description={data!.overview!.frontmatter!.description}
              tags={["React", "Apollo", "Javascript"]}
            />
          </Box>
          <Box width={1 / 4} m={3}>
            <IconButton type="tutorial" link="http://localhost:8000/components">
              Continue Tutorial
            </IconButton>
            <Box m={3}>
              <ProgressBar percentage={33} width={100} />
            </Box>
            <Flex>
              <IconButton type="github" link="http://localhost:8000/components">
                Github
              </IconButton>
              <IconButton
                type="spectrum"
                link="http://localhost:8000/components"
              >
                Spectrum
              </IconButton>
            </Flex>

            <Author authors={authors} />
          </Box>
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
