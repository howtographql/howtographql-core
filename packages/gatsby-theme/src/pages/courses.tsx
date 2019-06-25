import * as React from 'react';
import Layout from '../components/shared/layout';
import CourseSection from '../components/courses/CourseSection';
import { Content } from '../components/shared/styledHelpers';
import { Heading, Text } from '../components/shared/base';
import { graphql } from 'gatsby';

const courses = ({ data }) => {
  const courseSectionData = [
    {
      heading: `Frontend`,
      body: `Implement a web frontend for a Hacker News app that talks to a GraphQL
            API. We provide a hosted GraphQL API for you so that you can test your
            app in a real world environment.`,
      data: data.frontend.edges,
    },
    {
      heading: `Backend`,
      body: `Implement a GraphQL API that's backed by a database. The tutorial
      teach schema design and implement features like authentication,
      filtering, pagination and a lot more`,
      data: data.backend.edges,
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
            id
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
            id
            tutorialTitle
            description
          }
        }
      }
    }
  }
`;

export default courses;
