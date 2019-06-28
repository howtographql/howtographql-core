import React from 'react';
import Layout from '../shared/layout';
import Chapter from '../tutorial/Chapter';
import { TutorialOverviewQuery } from 'src/graphqlTypes';
import TutorialHeader from '../tutorial/TutorialHeader';
import { Heading, Flex, Box } from '../shared/base';
import AuthorsProgressBox from '../tutorial/AuthorsProgressBox';
import { Content } from '../shared/styledHelpers';
import { graphql } from 'gatsby';
import { optionalChaining } from '../../utils/helpers';
import { getTutorialSlug } from '../../utils/getTutorialSlug';

interface PageTemplateProps {
  data: TutorialOverviewQuery;
}

const PageTemplate: React.FunctionComponent<PageTemplateProps> = ({ data }) => {
  let gatsbyID = optionalChaining(() => data!.overview!.frontmatter!.id);

  // This is so that the start button can link to the user's current path
  // TO DO find a better way to pass in the which chapter the user is currently on
  const chapterPaths = optionalChaining(() =>
    data!.allMdx!.edges.map(a =>
      getTutorialSlug(optionalChaining(() => a.node.fileAbsolutePath)),
    ),
  );

  return (
    <Layout>
      <Content>
        <Flex>
          <Box width={3 / 4}>
            <TutorialHeader
              width={1 / 2}
              title={data!.overview!.frontmatter!.tutorialTitle || 'blank'}
              description={data!.overview!.frontmatter!.description || 'blank'}
              tags={['React', 'Apollo', 'Javascript']}
            />
          </Box>
          <Box width={1 / 4} m={3}>
            <AuthorsProgressBox
              gatsbyID={gatsbyID}
              chapterPaths={chapterPaths}
            />
          </Box>
        </Flex>
        <div>
          <Heading> Chapters </Heading>
          {data!.allMdx!.edges.map((mdx, index) => {
            let num = index + 1;
            return (
              <div>
                <Chapter num={num < 10 ? `0${num}` : num} tutorial={mdx.node} />
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
        id
        tutorialTitle
        banner
        description
      }
    }
  }
`;

export default PageTemplate;
