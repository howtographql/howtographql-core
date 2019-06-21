import * as React from 'react';
import { RouterProps } from '@reach/router';
import Layout from '../shared/layout';
import { MDXRenderer } from 'gatsby-mdx';
import { graphql } from 'gatsby';
import { Sidebar, TabletSidebar } from '../tutorial/TutorialSidebar';
import { TutorialMdxQuery } from '../../graphqlTypes';
import { HideOnTablet, ShowOnTablet } from '../../utils/responsive';
import { Flex, Box } from '../shared/base';
import { optionalChaining } from '../../utils/helpers';
import ChapterMutation from '../tutorial/ChapterMutation';
import { getTutorialSlug } from '../../utils/getTutorialSlug';

type TutorialLayoutProps = { data: TutorialMdxQuery } & RouterProps;

const TutorialLayout: React.FunctionComponent<TutorialLayoutProps> = ({
  data,
  ...props
}) => {
  if (!data) {
    return null;
  }

  //title of the chapter
  const { pageTitle } = optionalChaining(() => data.mdx.frontmatter);
  //title of the tutorial
  const tutorialTitle = optionalChaining(
    () => data.tutorialTitle.frontmatter.tutorialTitle,
  );
  //gatsbyID to fetch user information about tutorial
  const gatsbyID = optionalChaining(() => data.tutorialTitle.frontmatter.id);
  //all chapters in this tutorial
  const chapters = optionalChaining(() =>
    data.pageTitles.edges.map(a => {
      return {
        chapterTitle: optionalChaining(() => a.node.frontmatter.pageTitle),
        chapterPath: optionalChaining(() => a.node.fileAbsolutePath),
      };
    }),
  );

  const { location } = props;

  //all titles of chapters in this tutorial
  const chapterTitles = chapters.map(chapter => chapter.chapterTitle);
  //the number of this current chapter
  const currentChapterIndex = chapterTitles.indexOf(pageTitle);
  const findNextChapterPath = () => {
    if (currentChapterIndex + 1 === chapters.length) {
      return null;
    } else {
      return getTutorialSlug(chapters[currentChapterIndex + 1].chapterPath);
    }
  };

  const nextChapterPath = findNextChapterPath();

  return (
    <Layout location={location}>
      <ShowOnTablet>
        <Flex alignItems="center">
          <Box width={7 / 8} m={2}>
            <h1>{pageTitle}</h1>
          </Box>
          <Box width={1 / 8} m={2}>
            <TabletSidebar
              chapters={chapterTitles}
              tutorialTitle={tutorialTitle}
            />
          </Box>
        </Flex>
      </ShowOnTablet>
      <HideOnTablet>
        <Flex>
          <Box width={1 / 4} m={2}>
            <Sidebar chapters={chapterTitles} tutorialTitle={tutorialTitle} />
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
      <a href={nextChapterPath}>
        <ChapterMutation
          gatsbyID={gatsbyID}
          currentChapter={currentChapterIndex + 1}
        />
      </a>
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
          fileAbsolutePath
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
        id
        tutorialTitle
      }
    }
  }
`;
