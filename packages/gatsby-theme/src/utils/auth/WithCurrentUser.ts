import React from 'react';
import { Query } from 'react-apollo';
import { optionalChaining } from '../helpers';
import gql from 'graphql-tag';
import { User } from 'src/graphqlTypes';

type ChildrenRenderProps = {
  user?: User | boolean;
  loading?: boolean;
};
type WithCurrentUserProps = {
  children: (renderProps: ChildrenRenderProps) => any;
};

const WithCurrentUser: React.FunctionComponent<WithCurrentUserProps> = ({
  children,
}) => (
  <Query query={CURRENT_USER}>
    {({ data, error, loading }) => {
      if (loading) {
        return children({ loading });
      }
      if (optionalChaining(() => data.viewer.user)) {
        return children({ user: data.viewer.user });
      } else {
        return children({ user: false });
      }
    }}
  </Query>
);

export const CURRENT_USER = gql`
  query currentUser {
    viewer {
      id
      user {
        id
        name
        avatarUrl
        githubHandle
      }
    }
  }
`;

export default WithCurrentUser;
