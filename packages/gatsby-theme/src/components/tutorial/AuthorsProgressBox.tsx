import * as React from 'react';
import AuthorList from './AuthorList';
import { authors } from '../../utils/sampleData';
import ProgressBar from '../shared/ProgressBar';
import { getTutorialbyGatsbyID } from '../../utils/queries';
import { Query } from 'react-apollo';
import {
  GithubButton,
  SpectrumButton,
  TutorialButton,
} from '../shared/buttons';
import { Flex, Box } from '../shared/base';
import { optionalChaining, percent } from '../../utils/helpers';

const AuthorsProgressBox = ({ gatsbyID }) => (
  <Query query={getTutorialbyGatsbyID} variables={{ gatsbyID: gatsbyID }}>
    {({ data }) => {
      let buttonText = 'Start Tutorial';
      let percentage = 0;

      if (
        optionalChaining(
          () => data.getTutorialbyGatsbyID.viewerUserTutorial.currentChapter,
        )
      ) {
        percentage = percent(
          data.getTutorialbyGatsbyID.numberofChapters,
          data.getTutorialbyGatsbyID.viewerUserTutorial.currentChapter,
        );
        buttonText = 'Continue Tutorial';
        if (percentage === 100) {
          buttonText = 'Take Again';
        }
      }
      return (
        <div>
          <TutorialButton>{buttonText}</TutorialButton>
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
