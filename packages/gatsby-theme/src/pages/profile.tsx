import * as React from 'react';
import Layout from '../components/shared/layout';
import { Heading, Text, Image, Flex } from '../components/shared/base';
import { logoutUser } from '../utils/auth';
import { navigate } from 'gatsby';
import { Query } from 'react-apollo';
import { PROFILE_QUERY } from '../utils/queries';
import { optionalChaining } from '../utils/helpers';
import { CenteredLoader } from '../components/shared/Loader';

const Profile = () => {
  return (
    <Query query={PROFILE_QUERY}>
      {({ data, loading }) => {
        if (loading) {
          return <CenteredLoader />;
        }
        if (optionalChaining(() => data!.viewer!.user)) {
          return <ProfilePage user={data.viewer.user} />;
        }
        navigate('/signup/');
        return null;
      }}
    </Query>
  );
};

type ProfileProps = {
  user: User;
};

type User = {
  id: string;
  avatarUrl: string;
  name: string;
  githubHandle: string;
  bio: string;
  upvoted: [Tutorials];
  bookmarked: [Tutorials];
};

type Tutorials = {
  tutorial: Tutorial;
};

type Tutorial = {
  id: 'string';
  name: 'string';
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
      <Heading> Upvoted Tutorials </Heading>
      <ul>
        {user.upvoted.map(
          a =>
            a.tutorial && (
              <li key={a.tutorial.id}>
                <span>{a.tutorial.name}</span>
              </li>
            ),
        )}
      </ul>
      <Heading> Bookmarked Tutorials </Heading>
      <ul>
        {user.bookmarked.map(
          a =>
            a.tutorial && (
              <li key={a.tutorial.id}>
                <span>{a.tutorial.name}</span>
              </li>
            ),
        )}
      </ul>
      <Heading> In Progress Tutorials </Heading>
      <ul>
        {user.progress.map(
          a =>
            a.tutorial && (
              <li key={a.tutorial.id}>
                <span>{a.tutorial.name}</span>
              </li>
            ),
        )}
      </ul>
    </Layout>
  );
};
export default Profile;
