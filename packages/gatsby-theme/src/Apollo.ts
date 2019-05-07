import { ApolloClient } from 'apollo-client';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-fetch';
import config from '../config';
import { getAuthToken } from './utils/auth';

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getAuthToken();
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});
const httpLink = new HttpLink({ uri: config.apiUrl, fetch });
export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
