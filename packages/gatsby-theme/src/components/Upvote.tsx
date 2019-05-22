import * as React from 'react';
import { Heading, Flex } from './shared/base';
import { VoteButton } from './buttons';
import { loginUser } from '../utils/auth/';
import WithCurrentUser from '../utils/auth/WithCurrentUser';

// Still to-do:
// Query the backend with the ID of the tutorial to see whcih tutorial was upvoted
// Create a way to store which user has upvoted the tutorial so that they can only
// upvote it once

const Upvote = () => {
  return (
    <WithCurrentUser>
      {({ user }) => {
        if (user) {
          return <UpvoteData event={() => console.log('upvoted!')} />;
        }
        return <UpvoteData event={() => loginUser()} />;
      }}
    </WithCurrentUser>
  );
};

type UpvoteDataProps = {
  event: string;
};

// place holder until we have a backend that stores the number of upvotes
// and can keep track of which tutorials a user upvotes
const UpvoteData: React.FunctionComponent<UpvoteDataProps> = ({ event }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <VoteButton onClick={event} />
      <Heading>{Math.floor(Math.random() * 100)}</Heading>
    </Flex>
  );
};
export default Upvote;
