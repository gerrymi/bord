import React from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { useState } from 'react';

function Login({ buttonsDisplayed, setButtonsDisplayed, LOGIN }) {
  const client = useApolloClient();
  const [login, { data, loading, error }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      client.writeData({ data: { isLoggedIn: true } });
      console.log(login.token);
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
    login({ variables: { username: username, password: password } });
  }

  return (
    <div className="log-in__concept">
      <input
        className="user-panel__input"
        placeholder="Username"
        onChange={usernameOnChange}
        onKeyDown={keyDownLogin}
      />
      <input
        type="password"
        className="user-panel__input"
        placeholder="Password"
        onChange={passwordOnChange}
        onKeyDown={keyDownLogin}
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
