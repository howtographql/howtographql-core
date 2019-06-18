import * as React from 'react';
import Layout from '../components/shared/layout';
import { Content } from '../components/shared/styledHelpers';
import TutorialListing from '../components/community/TutorialListing';
import { Heading } from '../components/shared/base';
import { graphql } from 'gatsby';

const community = ({ data }) => {
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

export default community;
