import * as React from 'react';
import Layout from '../components/layout';
import { Content } from '../components/shared/styledHelpers';
import {
  Heading,
  Text,
  Card,
  Flex,
  Image,
  Box,
} from '../components/shared/base';
import { TutorialButton } from '../components/buttons';
import { getTutorialOverviewSlug } from '../utils/getTutorialSlug';
import ProgressBar from '../components/ProgressBar';

const courses = data => {
  const courseSectionData = [
    {
      heading: `Frontend`,
      body: `Implement a web frontend for a Hacker News app that talks to a GraphQL
            API. We provide a hosted GraphQL API for you so that you can test your
            app in a real world environment.`,
      data: data.data.frontend.edges,
    },
    {
      heading: `Backend`,
      body: `Implement a GraphQL API that's backed by a database. The tutorial
      teach schema design and implement features like authentication,
      filtering, pagination and a lot more`,
      data: data.data.backend.edges,
    },
  ];
  return (
    <Layout>
      <Content>
        <Heading> Fullstack Course </Heading>
        <Text>
          A general introduction to GraphQL for frontend and backend developers.
        </Text>
        <Text>
          Read this tutorial to learn about GraphQL's basic concepts and prepare
          yourself for a hands-on beginner tutorial.
        </Text>
        {courseSectionData.map(section => (
          <div key={section.heading}>
            <CourseSection {...section} />
          </div>
        ))}
      </Content>
    </Layout>
  );
};

type CourseSectionProps = {
  heading: string;
  body: string;
  data: [QueryData];
};

type QueryData = {
  node: Node;
};

type Node = {
  id: string;
  fileAbsolutePath: string;
  frontmatter: Frontmatter;
};

type Frontmatter = {
  tutorialTitle: string;
  description: string;
};

const CourseSection: React.FunctionComponent<CourseSectionProps> = ({
  heading,
  body,
  data,
}) => {
  return (
    <Flex m={[1, 1, 1]}>
      <Box width={[0.2, 0.2, 0.2]}>
        <Heading> {heading} </Heading>
        <Text>{body}</Text>
      </Box>
      <Box width={[0.8, 0.8, 0.8]}>
        <Flex alignItems="top" justifyContent="center" flexWrap="wrap">
          {data.map(tutorial => (
            <Box width={[1, 0.8, 0.4]} key={tutorial.node.id}>
              <CourseCard
                tutorialTitle={tutorial.node.frontmatter.tutorialTitle}
                fileAbsolutePath={tutorial.node.fileAbsolutePath}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

type CourseCardProps = {
  tutorialTitle: string;
  fileAbsolutePath: string;
};

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  tutorialTitle,
  fileAbsolutePath,
}) => {
  return (
    <Card m={[1, 1, 1]} p={[2, 2, 2]}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Image
          width={[0.5, 0.5, 0.5]}
          src="https://i.ibb.co/TcKwmwR/Icons.png"
        />
        <h3>{tutorialTitle}</h3>
        <ProgressBar percentage={Math.floor(Math.random() * 100)} width={80} />
        <a href={getTutorialOverviewSlug(fileAbsolutePath)}>
          <TutorialButton>Start Tutorial</TutorialButton>
        </a>
      </Flex>
    </Card>
  );
};

export const query = graphql`
  query FullStackCourseQuery {
    frontend: allMdx(
      filter: {
        frontmatter: { tutorialTitle: { ne: null } }
        fileAbsolutePath: { regex: "/courses/frontend/" }
      }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            tutorialTitle
            description
          }
        }
      }
    }
    backend: allMdx(
      filter: {
        frontmatter: { tutorialTitle: { ne: null } }
        fileAbsolutePath: { regex: "/courses/backend/" }
      }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            tutorialTitle
            description
          }
        }
      }
    }
  }
`;

export default courses;
