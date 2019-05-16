import * as React from 'react';
import Layout from '../components/layout';
import { Query } from 'react-apollo';
import { CurrentUserQuery } from '../graphqlTypes';
import { navigate } from 'gatsby';
import { CenteredLoader } from '../components/Loader';
import { Flex, Text, Box } from '../components/shared/base';
import CustomButton from '../components/CustomButton';
import { loginUser } from '../utils/auth';
import { CURRENT_USER } from '../components/queries/userQueries';
import { optionalChaining } from '../utils/helpers';

const Signup = () => (
  <Query<CurrentUserQuery> query={CURRENT_USER}>
    {({ data, error, loading }) => {
      if (error || loading) {
        return <CenteredLoader />;
      }
      if (optionalChaining(() => data.viewer.user)) {
        navigate('/profile/');
        return null;
      }
      return <SignupPage />;
    }}
  </Query>
);

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
