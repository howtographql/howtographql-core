import * as React from 'react';
import { Heading, Text, Card, Flex, Box } from './shared/base';
import { getTutorialOverviewSlug } from '../utils/getTutorialSlug';
import Upvote from './Upvote';
import { Link } from 'gatsby';

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
  return (
    <Card width={[1]} p={4} my={4} borderRadius={8} boxShadow="small">
      <Flex alignItems="center" justifyContent="center">
        <Box width={1 / 12}>
          <Upvote />
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
};

export default TutorialListing;
