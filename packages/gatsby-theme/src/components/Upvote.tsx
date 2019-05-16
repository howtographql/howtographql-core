import * as React from 'react';
import { Heading, Flex } from './shared/base';
import CustomButton from './CustomButton';
import { loginUser } from '../utils/auth/auth';
import WithCurrentUser from '../utils/auth/WithCurrentUser';

const Upvote = () => {
  return (
    <WithCurrentUser>
      {({ user }) => {
        if (user) {
          return <UpvoteData event={() => console.log('upvoted!')} />;
        } else {
          return <UpvoteData event={() => loginUser()} />;
        }
      }}
    </WithCurrentUser>
  );
};

type UpvoteDataProps = {
  event: string;
};

const UpvoteData: React.FunctionComponent<UpvoteDataProps> = ({ event }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <CustomButton type="vote" onClick={event} />
      <Heading>{Math.floor(Math.random() * 100)}</Heading>
    </Flex>
  );
};
export default Upvote;
