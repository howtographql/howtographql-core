import * as React from 'react';
import { Heading, Text, Card, Flex, Box } from '../shared/base';
import { getTutorialOverviewSlug } from '../../utils/getTutorialSlug';
import { Link } from 'gatsby';
import { Query } from 'react-apollo';
import UpvoteMutation from './UpvoteMutation';
import BookmarkMutation from './BookmarkMutation';
import Percentage from '../shared/Percentage';
import { getTutorialbyGatsbyID } from '../../utils/queries';

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
  let tutorialPath = getTutorialOverviewSlug(tutorial.fileAbsolutePath);
  return (
    <Query query={getTutorialbyGatsbyID} variables={{ gatsbyID: gatsbyID }}>
      {({ data }) => {
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
                {data.getTutorialbyGatsbyID && (
                  <div>
                    <UpvoteMutation tutorial={data.getTutorialbyGatsbyID} />
                    <BookmarkMutation tutorial={data.getTutorialbyGatsbyID} />
                    <Percentage tutorial={data.getTutorialbyGatsbyID} />
                  </div>
                )}
              </Box>

              <Box width={11 / 12}>
                <Link to={tutorialPath}>
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
