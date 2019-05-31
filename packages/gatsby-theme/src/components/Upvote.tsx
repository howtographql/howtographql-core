import * as React from 'react';
import { Heading, Flex } from './shared/base';
import { VoteButton } from './buttons';
import { loginUser } from '../utils/auth/';
import WithCurrentUser from '../utils/auth/WithCurrentUser';

// Still to-do:
// Query the backend with the ID of the tutorial to see whcih tutorial was upvoted
// Create a way to store which user has upvoted the tutorial so that they can only
// upvote it once

// const Upvote = ({active}) => {
//   return (
//     <WithCurrentUser>
//       {({ user }) => {
//         if (user) {
//           return <UpvoteData active={active} event={() => console.log('upvoted!')} />;
//         }
//         return <UpvoteData active={active} event={() => loginUser()} />;
//       }}
//     </WithCurrentUser>
//   );
// };

type UpvoteDataProps = {
  onClick: () => any;
  count: number;
  active: boolean;
};

// place holder until we have a backend that stores the number of upvotes
// and can keep track of which tutorials a user upvotes
const Upvote: React.FunctionComponent<UpvoteDataProps> = ({ onClick: event, active, count = "..." }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <VoteButton active={active} onClick={event} />
      <Heading>{count}</Heading>
    </Flex>
  );
};
export default Upvote;
