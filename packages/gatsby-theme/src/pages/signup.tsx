import * as React from "react";
import Layout from "../components/layout";
import GithubAuth from "../components/GithubAuth";
import { Flex, Text, Box } from "../components/shared/base";

const Signup = () => (
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

export default Signup;
