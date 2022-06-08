import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.BACKEND_URL}`
});

const client = new ApolloClient({
  cache,
  link
});

export default client;
