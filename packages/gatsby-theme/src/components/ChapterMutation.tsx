import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { loginUser } from '../utils/auth';
import { handleMutationResponse, ApiErrors } from '../utils/errorHandling';
import { Button } from './shared/base';

type ChapterMutationProps = {
  gatsbyID: any;
  currentChapter: any;
};

const ChapterMutation: React.FunctionComponent<ChapterMutationProps> = ({
  gatsbyID,
  currentChapter,
}) => (
  <Mutation
    mutation={gql`
      mutation upsertCurrentChapter($gatsbyID: String!, $chapter: Int!) {
        upsertCurrentChapter(gatsbyID: $gatsbyID, chapter: $chapter) {
          code
          success
          userTutorial {
            id
            currentChapter
          }
        }
      }
    `}
    variables={{
      gatsbyID: gatsbyID,
      chapter: currentChapter,
    }}
  >
    {currentChapter => {
      return (
        <Button
          onClick={async () => {
            const mutationRes = await handleMutationResponse(currentChapter());
            if (mutationRes.error) {
              if (mutationRes.error === ApiErrors.AUTHORIZATION) {
                loginUser();
              } else {
                console.log(mutationRes.error);
              }
            }
          }}
        >
          Next Chapter
        </Button>
      );
    }}
  </Mutation>
);

export default ChapterMutation;
