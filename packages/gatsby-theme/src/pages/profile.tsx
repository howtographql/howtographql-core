import * as React from 'react';
import Layout from '../components/layout';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ViewerQuery } from '../graphqlTypes';
import { Text, Image, Flex } from '../components/shared/base';
import { logoutUser } from '../utils/auth';
import { navigate } from 'gatsby';
import { CenteredLoader } from '../components/Loader';
import { optionalChaining } from '../utils/helpers';

import { CURRENT_USER } from '../components/queries/userQueries';

const Profile = () => (
  <Query<ViewerQuery> query={CURRENT_USER}>
    {({ data, error, loading }) => {
      if (error || loading) {
        return <CenteredLoader />;
      }
      if (optionalChaining(() => data.viewer.user)) {
        return <ProfilePage user={data.viewer.user} />;
      }
      navigate('/signup/');
      return null;
    }}
  </Query>
);

type ProfileProps = {
  user: User;
};

type User = {
  id: string;
  avatarUrl: string;
  name: string;
  githubHandle: string;
};

const ProfilePage: React.FunctionComponent<ProfileProps> = ({ user }) => {
  return (
    <Layout>
      <Flex flexDirection="column">
        <Image
          width={[0.5, 0.3, 0.12]}
          src={user.avatarUrl}
          borderRadius={100}
        />
        <h1> {user.name} </h1>
        <Text> @{user.githubHandle} </Text>
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet
        tempus malesuada. Mauris et semper lorem. Quisque at erat feugiat,
        viverra nibh nec, ultrices risus. */
      </Text>
      <button onClick={() => logoutUser()}> Log out </button>
    </Layout>
  );
};
export default Profile;
