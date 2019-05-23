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
  console.log(data);
  let frontend = data.data.frontend.edges;
  let backend = data.data.backend.edges;
  console.log(frontend);
  console.log(backend);

  return (
    <Layout>
      <Content>
        <Heading> Fullstack Course </Heading>
        <Text>
          A general introduction to GraphQL for frontend and backend developers.
        </Text>
        <Text>
          {' '}
          Read this tutorial to learn about GraphQL's basic concepts and prepare
          yourself for a hands-on beginner tutorial.
        </Text>
        <Flex m={[1, 1, 1]}>
          <Box width={[0.2, 0.2, 0.2]}>
            <Heading> Frontend </Heading>
            <Text>
              Implement a web frontend for a Hacker News app that talks to a
              GraphQL API. We provide a hosted GraphQL API for you so that you
              can test your app in a real world environment.
            </Text>
          </Box>
          <Box width={[0.8, 0.8, 0.8]}>
            <Flex alignItems="top" justifyContent="center" flexWrap="wrap">
              {frontend.map(tutorial => (
                <CourseCard
                  tutorialTitle={tutorial.node.frontmatter.tutorialTitle}
                  fileAbsolutePath={tutorial.node.fileAbsolutePath}
                />
              ))}
            </Flex>
          </Box>
        </Flex>

        <Flex m={[1, 1, 1]}>
          <Box width={[0.2, 0.2, 0.2]}>
            <Heading> Backend </Heading>
            <Text>
              Implement a GraphQL API that's backed by a database. The tutorial
              teach schema design and implement features like authentication,
              filtering, pagination and a lot more
            </Text>
          </Box>
          <Box width={[0.8, 0.8, 0.8]}>
            <Flex alignItems="top" justifyContent="center" flexWrap="wrap">
              {backend.map(tutorial => (
                <CourseCard
                  tutorialTitle={tutorial.node.frontmatter.tutorialTitle}
                  fileAbsolutePath={tutorial.node.fileAbsolutePath}
                />
              ))}
            </Flex>
          </Box>
        </Flex>
      </Content>
    </Layout>
  );
};

const CourseCard = ({ tutorialTitle, fileAbsolutePath }) => {
  return (
    <Card m={[2, 2, 2]} p={[2, 2, 2]} width={[1 / 2, 1 / 2, 1 / 4]}>
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
