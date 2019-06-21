import * as React from 'react';
import { Mutation } from 'react-apollo';
import { loginUser } from '../../utils/auth';
import { handleMutationResponse, ApiErrors } from '../../utils/errorHandling';
import { VoteButton } from '../shared/buttons';
import { Heading, Flex } from '../shared/base';
import { optionalChaining } from '../../utils/helpers';
import { UpvoteTutorial } from '../../utils/queries';

const UpvoteMutation = ({ tutorial }) => (
  <Mutation mutation={UpvoteTutorial} variables={{ id: tutorial.id }}>
    {upvote => {
      let active = optionalChaining(() => tutorial.viewerUserTutorial.upvoted);
      let upvotes = optionalChaining(() => tutorial.upvotes);
      return (
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <VoteButton
            onClick={async () => {
              const mutationRes = await handleMutationResponse(upvote());
              if (mutationRes.error) {
                if (mutationRes.error === ApiErrors.AUTHORIZATION) {
                  loginUser();
                } else {
                  console.log(mutationRes.error);
                }
              }
            }}
            active={active}
          />
          <Heading>{upvotes}</Heading>
        </Flex>
      );
    }}
  </Mutation>
);

export default UpvoteMutation;
