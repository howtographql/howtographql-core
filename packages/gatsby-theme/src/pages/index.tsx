import { RouterProps } from '@reach/router';
import * as React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag';

import Layout from '../components/layout';
import Listing from '../components/listing';
import { GlobalStyles } from '../styles';

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Query query={gql`
      query Test {
        feed {
          id
        }
      }
    `}>
      {({ data, error, loading }) => {
        console.log(data, error, loading)
        return <div />
      }}
    </Query>
    <GlobalStyles />
    <Listing />
  </Layout>
);

export default IndexPage;
