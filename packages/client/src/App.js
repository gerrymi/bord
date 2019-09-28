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
});

/**
 * Render our app
 * - We wrap the whole app with ApolloProvider, so any component in the app can
 *    make GraphqL requests. Our provider needs the client we created above,
 *    so we pass it as a prop
 * - We need a router, so we can navigate the app. We're using Reach router for this.
 *    The router chooses between which component to render, depending on the url path.
 *    ex: localhost:3000/login will render only the `Login` component
 */

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <ApolloProvider client={client}>
      <div className="app">
        {
          data.isLoggedIn ? <h1>You logged in</h1> : <UserPanel />
        }
      </div>
    </ApolloProvider>
  );
}

export default App;
