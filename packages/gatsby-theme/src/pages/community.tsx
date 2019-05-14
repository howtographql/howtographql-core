import * as React from 'react';
import Layout from '../components/layout';
import { Content } from '../shared/styledHelpers';
import { graphql } from 'gatsby';
import { Heading, Text, Card } from '../components/shared/base';
import { getTutorialSlug } from '../utils/getTutorialSlug';
import { Link } from 'gatsby';

const Community = data => {
  console.log(data);
  console.log(data.data.tutorials.edges);
  const tutorials = data.data.tutorials.edges;
  return (
    <Layout>
      <Heading> Community Tutorials </Heading>
      {tutorials.map(tutorial => {
        return (
          <Card
            width={[1]}
            p={4}
            my={4}
            borderRadius={8}
            boxShadow="small"
            key={tutorial.node.id}
          >
            <Link to={getTutorialSlug(tutorial.node.fileAbsolutePath)}>
              <Heading>{tutorial.node.frontmatter.tutorialTitle}</Heading>
            </Link>
            <Text>{tutorial.node.frontmatter.description}</Text>
          </Card>
        );
      })}
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
            tutorialTitle
            description
          }
        }
      }
    }
  }
`;

export default Community;
