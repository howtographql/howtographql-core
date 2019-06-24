import * as React from 'react';
import { Heading, Text, Card, Flex, Box } from '../shared/base';
import { getTutorialOverviewSlug } from '../../utils/getTutorialSlug';
import { Link } from 'gatsby';
import { Query } from 'react-apollo';
import UpvoteMutation from './UpvoteMutation';
import BookmarkMutation from './BookmarkMutation';
import ProgressBanner from './ProgressBanner';
import { getTutorialbyGatsbyID } from '../../utils/queries';
import { GetTutorialbyGatsbyIdQuery, Mdx } from '../../graphqlTypes';

type TutorialListingProps = {
  tutorial: Mdx;
};

const TutorialListing: React.FunctionComponent<TutorialListingProps> = ({
  tutorial,
}) => {
  const gatsbyID = tutorial!.frontmatter!.id;
  let tutorialPath = getTutorialOverviewSlug(tutorial!.fileAbsolutePath);
  return (
    <Query<GetTutorialbyGatsbyIdQuery>
      query={getTutorialbyGatsbyID}
      variables={{ gatsbyID: gatsbyID }}
    >
      {({ data }) => {
        const gatsbyTutorial = data!.getTutorialbyGatsbyID;
        return (
          <Card
            width={[1]}
            p={4}
            my={4}
            borderRadius={8}
            boxShadow="small"
            backgroundColor="white"
          >
            <Flex alignItems="center" justifyContent="center">
              <Box width={1 / 12}>
                {gatsbyTutorial && (
                  <div>
                    <UpvoteMutation tutorial={gatsbyTutorial} />
                    <BookmarkMutation tutorial={gatsbyTutorial} />
                    <ProgressBanner tutorial={gatsbyTutorial} />
                  </div>
                )}
              </Box>
              <Box width={11 / 12}>
                <Link to={tutorialPath}>
                  <Heading>{tutorial!.frontmatter!.tutorialTitle}</Heading>
                </Link>
                <Text>{tutorial!.frontmatter!.description}</Text>
              </Box>
            </Flex>
          </Card>
        );
      }}
    </Query>
  );
};

export default TutorialListing;
