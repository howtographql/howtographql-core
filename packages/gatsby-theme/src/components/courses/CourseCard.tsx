import * as React from 'react';
import { Card, Flex, Image } from '../shared/base';
import { Query } from 'react-apollo';
import ProgressBar from '../shared/ProgressBar';
import { TutorialButton } from '../shared/buttons';
import { getTutorialbyGatsbyID } from '../../utils/queries';
import { GetTutorialbyGatsbyIdQuery } from '../../graphqlTypes';
import { getTutorialOverviewSlug } from '../../utils/getTutorialSlug';
import { optionalChaining, percent } from '../../utils/helpers';

type CourseCardProps = {
  tutorialTitle: Maybe<string>;
  fileAbsolutePath: Maybe<string>;
  gatsbyID: Maybe<string>;
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
        <Query<GetTutorialbyGatsbyIdQuery>
          query={getTutorialbyGatsbyID}
          variables={{ gatsbyID: gatsbyID }}
        >
          {({ data }) => {
            let buttonText = 'Start Tutorial';
            let percentage = 0;
            if (
              optionalChaining(
                () =>
                  data!.getTutorialbyGatsbyID!.viewerUserTutorial!
                    .currentChapter,
              )
            ) {
              percentage = percent(
                data!.getTutorialbyGatsbyID!.numberofChapters,
                data!.getTutorialbyGatsbyID!.viewerUserTutorial!.currentChapter,
              );
              buttonText = 'Continue Tutorial';
              if (percentage === 100) {
                buttonText = 'Take Again';
              }
            }
            return (
              <div>
                {!!percentage && <ProgressBar percentage={percentage} />}
                <a href={path}>
                  <TutorialButton>{buttonText}</TutorialButton>
                </a>
              </div>
            );
          }}
        </Query>
      </Flex>
    </Card>
  );
};

export default CourseCard;
