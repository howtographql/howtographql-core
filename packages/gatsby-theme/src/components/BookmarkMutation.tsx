import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { loginUser } from '../utils/auth';
import { BookmarkButton } from './buttons';
import { handleMutationResponse, ApiErrors } from '../utils/errorHandling';

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
      let bookmarked = tutorial.viewerUserTutorial.bookmarked;
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
