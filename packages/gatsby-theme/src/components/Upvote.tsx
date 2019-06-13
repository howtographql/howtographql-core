import * as React from 'react';
import { Heading, Flex } from './shared/base';
import { VoteButton } from './buttons';

type UpvoteDataProps = {
  onClick: () => any;
  upvotes: number;
  active: boolean;
};

// place holder until we have a backend that stores the number of upvotes
// and can keep track of which tutorials a user upvotes
const Upvote: React.FunctionComponent<UpvoteDataProps> = ({
  onClick: event,
  active,
  upvotes,
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <VoteButton active={active} onClick={event} />
      <Heading>{upvotes}</Heading>
    </Flex>
  );
};
export default Upvote;
