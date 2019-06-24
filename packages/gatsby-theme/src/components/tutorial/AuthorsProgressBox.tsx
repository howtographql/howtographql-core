import * as React from 'react';
import AuthorList from './AuthorList';
import { authors } from '../../utils/sampleData';
import ProgressBar from '../shared/ProgressBar';
import { getTutorialbyGatsbyID } from '../../utils/queries';
import { GetTutorialbyGatsbyIdQuery } from '../../graphqlTypes';
import { Query } from 'react-apollo';
import {
  GithubButton,
  SpectrumButton,
  TutorialButton,
} from '../shared/buttons';
import { Flex, Box } from '../shared/base';
import { optionalChaining, percent } from '../../utils/helpers';

const AuthorsProgressBox = ({ gatsbyID, chapterPaths }) => (
  <Query<GetTutorialbyGatsbyIdQuery>
    query={getTutorialbyGatsbyID}
    variables={{ gatsbyID: gatsbyID }}
  >
    {({ data }) => {
      let buttonText = 'Start Tutorial';
      let percentage = 0;
      let currentChapter =
        optionalChaining(
          () => data!.getTutorialbyGatsbyID!.viewerUserTutorial!.currentChapter,
        ) || 0;
      //This link you to the next chapter you have not done
      let currentChapterPath = chapterPaths[0];
      if (currentChapter) {
        percentage = percent(
          data!.getTutorialbyGatsbyID!.numberofChapters,
          data!.getTutorialbyGatsbyID!.viewerUserTutorial!.currentChapter,
        );
        buttonText = 'Continue Tutorial';

        if (percentage === 100) {
          buttonText = 'Take Again';
        } else {
          //This link you to the next chapter you have not done. Since this is
          //an array you don't need to add 1
          // if you have already completed the tutorial you are still sent
          //to the first chapter
          currentChapterPath = chapterPaths[currentChapter];
        }
      }
      return (
        <div>
          <a href={currentChapterPath}>
            <TutorialButton>{buttonText}</TutorialButton>
          </a>
          {!!percentage && (
            <Box m={3}>
              <ProgressBar percentage={percentage} />
            </Box>
          )}
          <Flex>
            <GithubButton>Github</GithubButton>
            <SpectrumButton>Spectrum</SpectrumButton>
          </Flex>
          <AuthorList authors={authors} />
        </div>
      );
    }}
  </Query>
);

export default AuthorsProgressBox;
