import * as React from 'react';
import { Query } from 'react-apollo';
import { CurrentUserQuery } from '../graphqlTypes';
import { Image, Heading, Flex } from './shared/base';
import CustomButton from './CustomButton';
import { optionalChaining } from '../utils/helpers';
import { loginUser } from '../utils/auth';
import { CURRENT_USER } from './queries/userQueries';

const Upvote = () => {
  return (
    <Query<CurrentUserQuery> query={CURRENT_USER}>
      {({ data, error, loading }) => {
        if (error || loading) {
          return null;
        }
        if (optionalChaining(() => data.viewer.user)) {
          return <UpvoteData event={() => console.log('upvoted!')} />;
        }
        return <UpvoteData event={() => loginUser()} />;
      }}
    </Query>
  );
};

const UpvoteData = props => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      <CustomButton type="vote" onClick={props.event} />
      <Heading>{Math.floor(Math.random() * 100)}</Heading>
    </Flex>
  );
};
export default Upvote;
