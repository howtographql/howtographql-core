import React from 'react';
import { Query } from 'react-apollo';
import { ViewerQuery } from '../graphqlTypes';
import gql from 'graphql-tag';
import { Text, Image, Flex } from './shared/base';
import { Link } from 'gatsby';
import { CenteredLoader } from './Loader';
import CustomButton from './CustomButton';
import { loginUser } from '../utils/auth';

const Account = () => {
  return (
    <Query<ViewerQuery>
      query={gql`
        query Viewer {
          viewer {
            id
            user {
              id
              avatarUrl
              name
            }
          }
        }
      `}
    >
      {({ data, error, loading }) => {
        if (error || loading) {
          return <CenteredLoader />;
        }
        if (data.viewer && data.viewer.user) {
          return <Profile user={data.viewer.user} />;
        }
        return (
          <CustomButton onClick={() => loginUser()} type="github">
            Sign up
          </CustomButton>
        );
      }}
    </Query>
  );
};

interface ProfileProps {
  user: User;
}

type User = {
  id: string;
  avatarUrl: string;
  name: string;
  githubHandle: string;
};

const Profile: React.FunctionComponent<ProfileProps> = ({ user }) => {
  return (
    <Link to="/profile">
      <Flex alignItems="center" justifyContent="center">
        <Image
          width={[0.5, 0.3, 0.12]}
          src={user.avatarUrl}
          borderRadius={100}
        />
        <Text m={1}> {user.name} </Text>
      </Flex>
    </Link>
  );
};

export default Account;
