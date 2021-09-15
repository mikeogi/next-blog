import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

const apollo = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
});

export default apollo

