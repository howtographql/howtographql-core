import * as React from 'react';
import { Heading, Text, Card } from './shared/base';
import { getTutorialOverviewSlug } from '../utils/getTutorialSlug';
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
    <Card
      width={[1]}
      p={4}
      my={4}
      borderRadius={8}
      boxShadow="small"
      key={tutorial.id}
    >
      <Link to={getTutorialOverviewSlug(tutorial.fileAbsolutePath)}>
        <Heading>{tutorial.frontmatter.tutorialTitle}</Heading>
      </Link>
      <Text>{tutorial.frontmatter.description}</Text>
    </Card>
  );
};

export default TutorialListing;
