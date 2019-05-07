import { RouterProps } from '@reach/router';
import * as React from 'react';
import Layout from '../components/layout';
import Listing from '../components/listing';
import { GlobalStyles } from '../styles';

const IndexPage: React.FunctionComponent<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <GlobalStyles />
    <Listing />
  </Layout>
);

export default IndexPage;
