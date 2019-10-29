import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';

function SignUp({ buttonsDisplayed, setButtonsDisplayed, SIGN_UP }) {
  function goBack() {
    console.log(buttonsDisplayed);
    setButtonsDisplayed(true);
  }
  const [register, { loading, error, data }] = useMutation(SIGN_UP);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function usernameOnChange(e) {
    setUsername(e.target.value);
  }
  function emailOnChange(e) {
    setEmail(e.target.value);
  }
  function passwordOnChange(e) {
    setPassword(e.target.value);
  }

  function goBack() {
    console.log(buttonsDisplayed);
    setButtonsDisplayed(true);
  }

  function keyDownSignUp() {
    register({
      variables: { email: email, username: username, password: password },
    });
  }

  return (
    <div className="sign-up__concept">
      <input
        placeholder="Username"
        className="user-panel__input"
        onChange={usernameOnChange}
        onKeyDown={keyDownSignUp}
      />
      <input
        className="user-panel__input"
        placeholder="E-mail Address"
        onChange={emailOnChange}
        onKeyDown={keyDownSignUp}
      />
      <input
        type="password"
        className="user-panel__input"
        placeholder="Password"
        onChange={passwordOnChange}
      />
      <button
        className="register-button"
        onClick={() => {
          register({
            variables: { email: email, username: username, password: password },
          });
        }}
        onKeyDown={keyDownSignUp}
      >
        Create Account
      </button>
      <button
        className="back-button"
        onClick={() => {
          goBack();
        }}
      >
        {' '}
        <i>&#60; Back</i>
      </button>
    </div>
  );
}

export default SignUp;
