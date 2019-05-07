import * as React from "react";
import Layout from "../components/layout";
import GithubAuth from "../components/GithubAuth";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { navigate } from "gatsby";

import { Flex, Text, Box } from "../components/shared/base";

const Signup = () => (
  <Query
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
        return "Loading or error...";
      }
      if (data.viewer && data.viewer.user) {
        navigate("/profile/");
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
          <GithubAuth> Sign in with Github </GithubAuth>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Signup;
