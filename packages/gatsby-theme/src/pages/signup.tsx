import * as React from 'react';
import Layout from '../components/layout';
import { navigate } from 'gatsby';
import { CenteredLoader } from '../components/Loader';
import { Flex, Text, Box } from '../components/shared/base';
import { GithubButton } from '../components/buttons';
import WithCurrentUser from '../utils/auth/WithCurrentUser';
import { loginUser } from '../utils/auth/';

const Signup = () => {
  return (
    <WithCurrentUser>
      {({ user, loading }) => {
        if (loading) {
          return <CenteredLoader />;
        }
        if (user) {
          navigate('/profile/');
          return null;
        }
        return <SignupPage />;
      }}
    </WithCurrentUser>
  );
};

const SignupPage = () => {
  return (
    <Layout>
      <Flex flexDirection="column" alignItems="center">
        <h1>Sign in with Github</h1>
        <Text>
          Vivamus iaculis tincidunt eros, eget imperdiet sapien fermentum ut.
          Lorem ipsum dolor sit amet.
        </Text>
        <Box m={4}>
          <GithubButton onClick={() => loginUser()}>
            Sign in with Github
          </GithubButton>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Signup;
