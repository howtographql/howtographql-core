import * as React from 'react';
import Layout from '../components/layout';
import { navigate } from 'gatsby';
import { CenteredLoader } from '../components/Loader';
import { Flex, Text, Box } from '../components/shared/base';
import CustomButton from '../components/CustomButton';
import { loginUser } from '../utils/auth';
<<<<<<< HEAD
import { CURRENT_USER } from '../components/queries/userQueries';
import { optionalChaining } from '../utils/helpers';
=======
import WithCurrentUser from '../utils/WithCurrentUser';
>>>>>>> create WithCurrentUser component

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
        } else {
          return <SignupPage />;
        }
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
          <CustomButton onClick={() => loginUser()} type="github">
            Sign in with Github
          </CustomButton>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Signup;
