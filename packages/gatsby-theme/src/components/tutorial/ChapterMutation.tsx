import * as React from 'react';
import { upsertCurrentChapter } from '../../utils/queries';
import {
  UpsertCurrentChapterMutation,
  UpsertCurrentChapterMutationVariables,
} from '../../graphqlTypes';
import { Mutation } from 'react-apollo';
import { loginUser } from '../../utils/auth';
import { handleMutationResponse, ApiErrors } from '../../utils/errorHandling';
import { Button } from '../shared/base';

const ChapterMutation: React.FunctionComponent<
  UpsertCurrentChapterMutationVariables
> = ({ gatsbyID, chapter }) => (
  <Mutation<UpsertCurrentChapterMutation>
    mutation={upsertCurrentChapter}
    variables={{
      gatsbyID: gatsbyID,
      chapter: chapter,
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
