import * as React from 'react';
import { Card, Flex, Image } from '../shared/base';
import { Query } from 'react-apollo';
import ProgressBar from '../shared/ProgressBar';
import { TutorialButton } from '../shared/buttons';
import { getTutorialbyGatsbyID } from '../../utils/queries';
import { getTutorialOverviewSlug } from '../../utils/getTutorialSlug';
import { optionalChaining, percent } from '../../utils/helpers';

type CourseCardProps = {
  tutorialTitle: string;
  fileAbsolutePath: string;
  gatsbyID: string;
};

const CourseCard: React.FunctionComponent<CourseCardProps> = ({
  gatsbyID,
  tutorialTitle,
  fileAbsolutePath,
}) => {
  let path = getTutorialOverviewSlug(fileAbsolutePath);
  return (
    <Card m={[1, 1, 1]} p={[2, 2, 2]}>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Image
          width={[0.5, 0.5, 0.5]}
          src="https://i.ibb.co/TcKwmwR/Icons.png"
        />
        <h3>{tutorialTitle}</h3>
        <Query query={getTutorialbyGatsbyID} variables={{ gatsbyID: gatsbyID }}>
          {({ data }) => {
            let buttonText = 'Continue Tutorial';
            if (
              optionalChaining(
                () =>
                  data.getTutorialbyGatsbyID.viewerUserTutorial.currentChapter,
              )
            ) {
              let percentage = percent(
                data.getTutorialbyGatsbyID.numberofChapters,
                data.getTutorialbyGatsbyID.viewerUserTutorial.currentChapter,
              );
              if (percentage === 100) {
                buttonText = 'Take Again';
              }
              return (
                <div>
                  <ProgressBar percentage={percentage} />
                  <a href={path}>
                    <TutorialButton>{buttonText}</TutorialButton>
                  </a>
                </div>
              );
            } else
              return (
                <a href={path}>
                  <TutorialButton>Start Tutorial</TutorialButton>
                </a>
              );
          }}
        </Query>
      </Flex>
    </Card>
  );
};

export default CourseCard;
