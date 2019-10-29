import React, { useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { AppContext } from '../App';
import { LOGIN, GET_USER } from '../gql';

function Login({ setButtonsDisplayed }) {
  const _AppContext = useContext(AppContext);
  const [login, { loading, error, data }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      if (login.token) {
        localStorage.setItem('token', login.token);
        _AppContext.setIsLoggedIn(true);
      }
    },
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function usernameOnChange(e) {
    setUsername(e.target.value);
  }

  function passwordOnChange(e) {
    setPassword(e.target.value);
  }

  function goBack() {
    setButtonsDisplayed(true);
  }

  function keyDownLogin() {
    login({ variables: { username, password } });
  }

  return (
    <div className="log-in__concept">
      <input
        className="user-panel__input"
        placeholder="Username"
        onChange={usernameOnChange}
      />
      <input
        type="password"
        className="user-panel__input"
        placeholder="Password"
        onChange={passwordOnChange}
      />
      <button className="log-in-button" onClick={keyDownLogin}>
        Log In
      </button>
      <button
        className="back-button"
        onClick={() => {
          goBack();
        }}
      >
        <i>&#60; Back</i>
      </button>
    </div>
  );
}

export default Login;
