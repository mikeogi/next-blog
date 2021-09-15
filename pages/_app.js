import { ApolloProvider } from "@apollo/client";
import apolloClient from '../services/apollo'
import '../styles/globals.css'
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
