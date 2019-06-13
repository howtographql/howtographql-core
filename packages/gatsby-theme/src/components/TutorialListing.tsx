import * as React from 'react';
import { Heading, Text, Card, Flex, Box } from './shared/base';
import { getTutorialOverviewSlug } from '../utils/getTutorialSlug';
import { Link } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import UpvoteMutation from './UpvoteMutation';
import BookmarkMutation from './BookmarkMutation';

type TutorialListingProps = {
  tutorial: Tutorial;
};

type Tutorial = {
  id: string;
  fileAbsolutePath: string;
  frontmatter: FrontMatter;
};

type FrontMatter = {
  id: string;
  tutorialTitle: string;
  description: string;
};

const TutorialListing: React.FunctionComponent<TutorialListingProps> = ({
  tutorial,
}) => {
  const gatsbyID = tutorial.frontmatter.id;
  return (
    <Query
      query={gql`
        query gatsbyTutorialQuery($gatsbyID: String!) {
          gatsbyTutorialQuery(gatsbyID: $gatsbyID) {
            id
            name
            upvotes
            numberOfStudents
            viewerUserTutorial {
              id
              upvoted
              bookmarked
            }
          }
        }
      `}
      variables={{ gatsbyID: gatsbyID }}
    >
      {({ data }) => {
        return (
          <Card width={[1]} p={4} my={4} borderRadius={8} boxShadow="small">
            <Flex alignItems="center" justifyContent="center">
              <Box width={1 / 12}>
                {data.gatsbyTutorialQuery && (
                  <UpvoteMutation tutorial={data.gatsbyTutorialQuery} />
                )}
                {data.gatsbyTutorialQuery && (
                  <BookmarkMutation tutorial={data.gatsbyTutorialQuery} />
                )}
              </Box>

              <Box width={11 / 12}>
                <Link to={getTutorialOverviewSlug(tutorial.fileAbsolutePath)}>
                  <Heading>{tutorial.frontmatter.tutorialTitle}</Heading>
                </Link>
                <Text>{tutorial.frontmatter.description}</Text>
              </Box>
            </Flex>
          </Card>
        );
      }}
    </Query>
  );
};

export default TutorialListing;
