import * as React from 'react';
import Layout from '../components/layout';
import { Content } from '../components/shared/styledHelpers';
import { graphql } from 'gatsby';
import TutorialListing from '../components/TutorialListing';
import { Heading } from '../components/shared/base';

const Community = data => {
  const tutorials = data.data.tutorials.edges;
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

export const query = graphql`
  query CommunityTutorialQuery {
    tutorials: allMdx(
      filter: {
        frontmatter: { tutorialTitle: { ne: null } }
        fileAbsolutePath: { regex: "/community/" }
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

export default Community;
