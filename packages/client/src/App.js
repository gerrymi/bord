import React from 'react';
import gql from 'graphql-tag';
import { UserPanel, Dashboard } from './components'
import './App.css';

const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      success,
      message,
      token
    }
  }
`

const SIGN_UP = gql`
  mutation Register($email: String!, $username: String!, $password: String!) {
    register(email: $email, username: $username, password: $password) {
      success,
      message
    }
  }
`

const GET_USER = gql`
  query GetUser {
    currentUser {
      success
      message
      user {
        username
        email
      }
    }
  }
`

function App() {
  return (
    <div className="app">
      <h1 className='bord-title'>Børd</h1>
      <div className="art-panel" />
      {localStorage.getItem('token') ?
        <div>
          <Dashboard
            GET_USER={GET_USER}
          />
        </div>
        :
        <UserPanel
          LOGIN={LOGIN}
          SIGN_UP={SIGN_UP}
        />
      }

    </div>
  );
}


export default App;
