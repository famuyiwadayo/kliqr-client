import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:3221/graphql",
  // uri: "https://mercs.co/graphql",
  cache: new InMemoryCache(),
});
