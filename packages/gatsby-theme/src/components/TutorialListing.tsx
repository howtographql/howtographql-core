import * as React from 'react';
import { Heading, Text, Card, Flex, Box } from './shared/base';
import { getTutorialOverviewSlug } from '../utils/getTutorialSlug';
import Upvote from './Upvote';
import { Link } from 'gatsby';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { optionalChaining } from '../utils/helpers';

type TutorialListingProps = {
  tutorial: Tutorial;
};

type Tutorial = {
  id: string;
  fileAbsolutePath: string;
  frontmatter: FrontMatter;
};

type FrontMatter = {
  tutorialTitle: string;
  description: string;
};

const TutorialListing: React.FunctionComponent<TutorialListingProps> = ({
  tutorial,
}) => {
  const tutorialId = "cjwb6f2hy7e4f0b14bxh1mar2";
  return (
    <Query
      query={gql`
        query TutorialListing($id: ID!) {
          tutorial(id: $id) {
            id
            upvotes
            numberOfStudents
            viewerUserTutorial {
              id
              upvoted
              saved
            }
          }
        }
      `}
      variables={{ id: tutorialId }}
    >
      {({ data }) => {
        return (
          <Card width={[1]} p={4} my={4} borderRadius={8} boxShadow="small">
            <Flex alignItems="center" justifyContent="center">
              <Box width={1 / 12}>
                <Mutation
                  mutation={gql`
                    mutation UpvoteTutorial($id: ID!) {
                      upvoteTutorial(tutorialId: $id) {
                        code
                        success
                        userTutorial {
                          id
                          upvoted
                          tutorial {
                            id
                            upvotes
                          }
                        }
                      }
                    }
                  `}
                  variables={{
                    id: tutorialId
                  }}
                >
                  {(upvote) => {
                    return (
                      <Upvote
                        onClick={() => upvote()}
                        active={optionalChaining(() => data.tutorial.viewerUserTutorial.upvoted)}
                        count={optionalChaining(() => data.tutorial.upvotes)}
                      />
                    )
                  }}
                </Mutation>
              </Box>
              <Box width={11 / 12}>
                <Link to={getTutorialOverviewSlug(tutorial.fileAbsolutePath)}>
                  <Heading>{tutorial.frontmatter.tutorialTitle}</Heading>
                </Link>
                <Text>{tutorial.frontmatter.description}</Text>
              </Box>
            </Flex>
          </Card>
        )
      }}
    </Query>
  );
};

export default TutorialListing;
