import * as React from 'react';
import Layout from '../components/shared/layout';
import { Content } from '../components/shared/styledHelpers';
import TutorialListing from '../components/community/TutorialListing';
import { Heading } from '../components/shared/base';
import { CommunityTutorialQuery } from '../utils/queries/markdown';

const Community = ({ data }) => {
  const tutorials = data.tutorials.edges;
  return (
    <Layout>
      <Content>
        <Heading> Community Tutorials </Heading>
        {tutorials.map(tutorial => {
          return (
            <div key={tutorial.node.id}>
              <TutorialListing tutorial={tutorial.node} />
            </div>
          );
        })}
      </Content>
    </Layout>
  );
};

export default Community;
