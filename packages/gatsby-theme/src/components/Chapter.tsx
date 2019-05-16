import React from 'react';
import { getTutorialSlug } from '../utils/getTutorialSlug';
import { Link } from 'gatsby';
import { Heading, Text, Flex, Card } from './shared/base';

type ChapterProps = {
  num: string | number;
  tutorial: Tutorial;
};

type Tutorial = {
  id: string;
  fileAbsolutePath: string;
  frontmatter: FrontMatter;
};

type FrontMatter = {
  pageTitle: string | null;
  description: string | null;
}

const Chapter: React.FunctionComponent<ChapterProps> = ({
 num, tutorial
}) => {
  return (
    <Card width={[1]} p={4} my={4} borderRadius={8} boxShadow="small">
      <Flex alignItems="center">
        <Heading p={4}>{num}</Heading>
        <div>
          <Link to={getTutorialSlug(tutorial.fileAbsolutePath)}>
            <Heading as="h2">{tutorial.frontmatter.pageTitle}</Heading>
          </Link>
          <Text>{tutorial.frontmatter.description}</Text>

        </div>
      </Flex>
    </Card>
  );
};

export default Chapter;
