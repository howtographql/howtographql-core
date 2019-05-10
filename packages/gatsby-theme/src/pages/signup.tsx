import * as React from 'react';
import Layout from '../components/layout';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ViewerQuery } from '../graphqlTypes';
import { navigate } from 'gatsby';
import { CenteredLoader } from '../components/Loader';
import { Flex, Text, Box } from '../components/shared/base';
import CustomButton from '../components/CustomButton';
import { loginUser } from '../utils/auth';

const Signup = () => (
  <Query<ViewerQuery>
    query={gql`
      query Viewer {
        viewer {
          id
          user {
            id
            avatarUrl
            name
            githubHandle
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
