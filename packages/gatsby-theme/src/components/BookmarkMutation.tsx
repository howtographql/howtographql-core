import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { loginUser } from '../utils/auth';

import { handleMutationResponse, ApiErrors } from '../utils/errorHandling';
import { Button } from './shared/base';

const BookmarkMutation = ({ tutorial }) => (
  <Mutation
    mutation={gql`
      mutation BookmarkTutorial($id: ID!) {
        bookmarkTutorial(tutorialId: $id) {
          code
          success
          userTutorial {
            id
            bookmarked
          }
        }
      }
    `}
    variables={{
      id: tutorial.id,
    }}
  >
    {bookmark => {
      return (
        <Button
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
        >
          Bookmark
        </Button>
      );
    }}
  </Mutation>
);

export default BookmarkMutation;
