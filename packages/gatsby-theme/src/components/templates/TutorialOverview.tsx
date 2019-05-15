import React from 'react';
import Layout from '../layout';
import Chapter from '../Chapter';
import { TutorialOverviewQuery } from 'src/graphqlTypes';
import AuthorList from '../AuthorList';
import TutorialHeader from '../overview/TutorialHeader';
import { Heading, Flex, Box } from '../shared/base';
import ProgressBar from '../overview/ProgressBar';
import CustomButton from '../CustomButton';
import { Content } from '../shared/styledHelpers';
import { authors } from '../../utils/sampleData';
import { graphql } from 'gatsby';

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
              tags={['React', 'Apollo', 'Javascript']}
            />
          </Box>
          <Box width={1 / 4} m={3}>
            <CustomButton type="tutorial">Continue Tutorial</CustomButton>
            <Box m={3}>
              <ProgressBar percentage={33} width={100} />
            </Box>
            <Flex>
              <CustomButton type="github">Github</CustomButton>
              <CustomButton type="spectrum">Spectrum</CustomButton>
            </Flex>
            <AuthorList authors={authors} />
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
                  tutorial = {mdx.node}
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
          fileAbsolutePath
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

export default PageTemplate;
