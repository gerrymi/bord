import React, { useState, useEffect } from 'react';
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

const ADD_LIST = gql`
  mutation AddList($name: String!) {
    addList(name: $name) {
      success
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
        id
        lists {
          name
          id
          tasks {
            name
            description
            id
          }
        }
      }
    }
  }
`

function App() {
  const [list, setList] = useState([])
  const [listInput, setListInput] = useState('')

  function listOnChange(e) {
    setListInput(e.target.value)
  }

  return (
    <div className="app">
      {localStorage.getItem('token') ?

          <Dashboard
            GET_USER={GET_USER}
            ADD_LIST={ADD_LIST}
            list={list}
            setList={setList}
            listInput={listInput}
            setListInput={setListInput}
            listOnChange={listOnChange}
          />

        :
        <div className="app">
          <h1 className='bord-title'>Børd</h1>
          <div className="art-panel" />
          <UserPanel
            LOGIN={LOGIN}
            SIGN_UP={SIGN_UP}
          />
        </div>
      }

    </div>
  );
}


export default App;
