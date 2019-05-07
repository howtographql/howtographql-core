import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import GithubAuth from "./GithubAuth";
import { Text, Image, Flex } from "./shared/base";
import { Link } from "gatsby";

const Account = () => {
  return (
    <Query
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
          return "Loading or error...";
        }
        if (data.viewer && data.viewer.user) {
          return <Profile user={data.viewer.user} />;
        }
        return <GithubAuth> Sign up </GithubAuth>;
      }}
    </Query>
  );
};

const Profile = ({ user }) => {
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
