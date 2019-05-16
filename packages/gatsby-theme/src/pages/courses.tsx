import * as React from 'react';
import Layout from '../components/layout';
import { Content } from '../components/shared/styledHelpers';
import { Heading, Text } from '../components/shared/base';

const courses = () => {
  return (
    <Layout>
      <Content>
        <Heading> Fullstack Course </Heading>
        <Text>A general introduction to GraphQL for frontend and backend developers.</Text>
        <Text> Read this tutorial to learn about GraphQL's basic concepts and prepare
          yourself for a hands-on beginner tutorial.</Text>
      </Content>
    </Layout>
  );
};

export default courses;
