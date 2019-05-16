import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER } from '../components/queries/userQueries';
import { optionalChaining } from './helpers';

const WithCurrentUser = ({ children }) => {
  return (
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
};

export default WithCurrentUser;
