import * as React from 'react';
import { upsertCurrentChapter } from '../../utils/queries';
import { Mutation } from 'react-apollo';
import { loginUser } from '../../utils/auth';
import { handleMutationResponse, ApiErrors } from '../../utils/errorHandling';
import { Button } from '../shared/base';

type ChapterMutationProps = {
  gatsbyID: any;
  currentChapter: any;
};

const ChapterMutation: React.FunctionComponent<ChapterMutationProps> = ({
  gatsbyID,
  currentChapter,
}) => (
  <Mutation
    mutation={upsertCurrentChapter}
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
