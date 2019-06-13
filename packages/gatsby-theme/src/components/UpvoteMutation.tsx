import * as React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { optionalChaining } from '../utils/helpers';
import { loginUser } from '../utils/auth';
import { handleMutationResponse, ApiErrors } from '../utils/errorHandling';
import Upvote from './Upvote';

const UpvoteMutation = ({ tutorial }) => (
  <Mutation
    mutation={gql`
      mutation UpvoteTutorial($id: ID!) {
        upvoteTutorial(tutorialId: $id) {
          code
          success
          userTutorial {
            id
            upvoted
            tutorial {
              id
              upvotes
            }
          }
        }
      }
    `}
    variables={{
      id: tutorial.id,
    }}
  >
    {upvote => {
      return (
        <Upvote
          onClick={async () => {
            const mutationRes = await handleMutationResponse(upvote());
            if (mutationRes.error) {
              if (mutationRes.error === ApiErrors.AUTHORIZATION) {
                loginUser();
              } else {
                console.log(tutorial.id);
                console.log(tutorial);

                console.log(mutationRes.error);
              }
            }
          }}
          active={
            optionalChaining(() => tutorial.viewerUserTutorial.upvoted) || false
          }
          upvotes={optionalChaining(() => tutorial.upvotes)}
        />
      );
    }}
  </Mutation>
);

export default UpvoteMutation;
