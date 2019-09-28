import React from 'react';
import ApolloClient from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { gql } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { UserPanel } from './components'
// import { LOGIN } from './gql/mutations'
import './App.css';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  }
})

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
    cartItems: [],
  },
})

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return   data.isLoggedIn ? <h1>You logged in</h1> : <UserPanel />
}


function App() {
  return (
    <ApolloProvider client={client}>
        {
        <IsLoggedIn/>
        }
    </ApolloProvider>
  );
}

export default App;
