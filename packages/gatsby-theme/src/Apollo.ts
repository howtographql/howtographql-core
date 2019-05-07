import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import config from '../config';

export const client = new ApolloClient({
    link: new HttpLink({ uri: config.apiUrl, fetch }),
    cache: new InMemoryCache(),
});
