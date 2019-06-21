import * as React from 'react';
import { Card, Flex, Image } from '../shared/base';
import ProgressBar from '../shared/ProgressBar';
import { TutorialButton } from '../shared/buttons';
import { getTutorialOverviewSlug } from '../../utils/getTutorialSlug';

type CourseCardProps = {
  tutorialTitle: string;
  fileAbsolutePath: string;
};

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  tutorialTitle,
  fileAbsolutePath,
}) => {
  return (
    <Card m={[1, 1, 1]} p={[2, 2, 2]}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Image
          width={[0.5, 0.5, 0.5]}
          src="https://i.ibb.co/TcKwmwR/Icons.png"
        />
        <h3>{tutorialTitle}</h3>
        <ProgressBar percentage={Math.floor(Math.random() * 100)} width={80} />
        <a href={getTutorialOverviewSlug(fileAbsolutePath)}>
          <TutorialButton>Start Tutorial</TutorialButton>
        </a>
      </Flex>
    </Card>
  );
};

export default CourseCard;
