import React, { useState } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormPanel from './FormPanel'
import SignUp from './SignUp';
import Login from './Login';

function UserPanel({
  LOGIN,
  SIGN_UP
}) {
  const [signUpToggle, setSignUpToggle] = useState(false)
  const [logInToggle, setLogInToggle] = useState(false)
  const [buttonsDisplayed, setButtonsDisplayed] = useState(true)

  function onClickSignUp() {
    setSignUpToggle(true)
    setLogInToggle(false)
    setButtonsDisplayed(false)
  }

  function onClickLogIn() {
    setLogInToggle(true)
    setSignUpToggle(false)
    setButtonsDisplayed(false)
  }

  function returnToUserPanel() {
    setLogInToggle(false)
    setSignUpToggle(false)
  }

  return (
    <div className="user-panel">
      <div className="user-panel__content-container">
        <div className="user-panel__text">
          <h1 className="user-panel__header">Let's get productive.</h1>
          <p className="user-panel__description">Børd helps you track your day-to-day tasks ensuring optimal prodcutivity.</p>
        </div>
        <div className="user-panel__options">
          {
            buttonsDisplayed ?
              <div className='user-panel__buttons'>
                <button className="sign-up" onClick={() => onClickSignUp()}>Sign Up</button>
                <button className="log-in" onClick={() => onClickLogIn()}>Log In</button>
              </div>
              : signUpToggle ?
                <SignUp
                  login
                  buttonsDisplayed={buttonsDisplayed}
                  setButtonsDisplayed={setButtonsDisplayed}
                  SIGN_UP={SIGN_UP}
                />
                : <Login
                  LOGIN={LOGIN}
                  buttonsDisplayed={buttonsDisplayed}
                  setButtonsDisplayed={setButtonsDisplayed}
                />
          }
        </div>
      </div>
    </div>
  )
}

export default UserPanel