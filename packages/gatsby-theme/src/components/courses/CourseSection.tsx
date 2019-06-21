import * as React from 'react';
import { Heading, Text, Flex, Box } from '../shared/base';
import CourseCard from './CourseCard';

type CourseSectionProps = {
  heading: string;
  body: string;
  data: [QueryData];
};

type QueryData = {
  node: Node;
};

type Node = {
  id: string;
  fileAbsolutePath: string;
  frontmatter: Frontmatter;
};

type Frontmatter = {
  tutorialTitle: string;
  description: string;
};

const CourseSection: React.FunctionComponent<CourseSectionProps> = ({
  heading,
  body,
  data,
}) => {
  return (
    <Flex m={[1, 1, 1]}>
      <Box width={[0.2, 0.2, 0.2]}>
        <Heading> {heading} </Heading>
        <Text>{body}</Text>
      </Box>
      <Box width={[0.8, 0.8, 0.8]}>
        <Flex alignItems="top" justifyContent="center" flexWrap="wrap">
          {data.map(tutorial => (
            <Box width={[1, 0.8, 0.4]} key={tutorial.node.id}>
              <CourseCard
                tutorialTitle={tutorial.node.frontmatter.tutorialTitle}
                fileAbsolutePath={tutorial.node.fileAbsolutePath}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default CourseSection;
