import * as React from 'react';
import { Mutation } from 'react-apollo';
import { loginUser } from '../../utils/auth';
import { BookmarkButton } from '../shared/buttons';
import { BookmarkTutorial } from '../../utils/queries';
import { BookmarkTutorialMutation } from '../../graphqlTypes';
import { optionalChaining } from '../../utils/helpers';
import { handleMutationResponse, ApiErrors } from '../../utils/errorHandling';

const BookmarkMutation = ({ tutorial }) => (
  <Mutation<BookmarkTutorialMutation>
    mutation={BookmarkTutorial}
    variables={{
      id: tutorial.id,
    }}
  >
    {bookmark => {
      let bookmarked = optionalChaining(
        () => tutorial.viewerUserTutorial.bookmarked,
      );
      return (
        <BookmarkButton
          active={bookmarked}
          onClick={async () => {
            const mutationRes = await handleMutationResponse(bookmark());
            if (mutationRes.error) {
              if (mutationRes.error === ApiErrors.AUTHORIZATION) {
                loginUser();
              } else {
                console.log(mutationRes.error);
              }
            }
          }}
        />
      );
    }}
  </Mutation>
);

export default BookmarkMutation;
