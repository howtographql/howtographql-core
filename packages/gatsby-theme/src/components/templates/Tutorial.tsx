import * as React from 'react';
import { RouterProps } from '@reach/router';
import Layout from '../layout';
import { MDXRenderer } from 'gatsby-mdx';
import { graphql } from 'gatsby';
import { Sidebar, TabletSidebar } from '../TutorialSidebar';
import { TutorialMdxQuery } from '../../graphqlTypes';
import { HideOnTablet, ShowOnTablet } from '../../utils/responsive';
import { Flex, Box } from '../shared/base';
import { optionalChaining } from '../../utils/helpers';

type TutorialLayoutProps = { data: TutorialMdxQuery } & RouterProps;

const TutorialLayout: React.FunctionComponent<TutorialLayoutProps> = ({
  data,
  ...props
}) => {
  if (!data) {
    return null;
  }
  console.log(data);
  const { pageTitle } = data!.mdx!.frontmatter!;
  const tutorialTitle = optionalChaining(() => data!.tutorialTitle!.frontmatter!.tutorialTitle!);
  const chapters = optionalChaining(() => data!.pageTitles!.edges!.map(
    a => a.node!.frontmatter!.pageTitle!,
  )) || [];
  const { location } = props;

  return (
    <Layout location={location}>
      <ShowOnTablet>
        <Flex alignItems="center">
          <Box width={7 / 8} m={2}>
            <h1>{pageTitle}</h1>
          </Box>
          <Box width={1 / 8} m={2}>
            <TabletSidebar chapters={chapters} tutorialTitle={tutorialTitle} />
          </Box>
        </Flex>
      </ShowOnTablet>
      <HideOnTablet>
        <Flex>
          <Box width={1 / 4} m={2}>
            <Sidebar chapters={chapters} tutorialTitle={tutorialTitle} />
          </Box>
          <Box width={3 / 4} m={2}>
            <h1>{pageTitle}</h1>
            <MDXRenderer>{data!.mdx!.code!.body}</MDXRenderer>
          </Box>
        </Flex>
      </HideOnTablet>
      <ShowOnTablet>
        <MDXRenderer>{data!.mdx!.code!.body}</MDXRenderer>
      </ShowOnTablet>
    </Layout>
  );
};

export default TutorialLayout;

export const pageQuery = graphql`
  query TutorialMDX($id: String!, $folderRegex: String) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      frontmatter {
        path
        pageTitle
      }
    }
    pageTitles: allMdx(
      sort: { fields: fileAbsolutePath }
      filter: {
        frontmatter: { pageTitle: { ne: null } }
        fileAbsolutePath: { regex: $folderRegex }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            pageTitle
          }
        }
      }
    }
    tutorialTitle: mdx(
      frontmatter: { tutorialTitle: { ne: null } }
      fileAbsolutePath: { regex: $folderRegex }
    ) {
      frontmatter {
        tutorialTitle
      }
    }
  }
`;
