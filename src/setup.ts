import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: 'http://localhost:3221/graphql',
  uri: "http://167.99.3.111/graphql",
  cache: new InMemoryCache(),
});
