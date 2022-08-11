import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_HYGRAPH_CONTENT_API_URL}`,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN}`
  }
});

const client = new ApolloClient({
  cache,
  link
});

export default client;
