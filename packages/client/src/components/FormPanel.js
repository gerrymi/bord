import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'

function FormPanel({
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
    <div className="user-panel__options">
      {
        buttonsDisplayed ?
          <div className='user-panel__buttons'>
            <button className="sign-up" onClick={() => onClickSignUp()}>Sign Up</button>
            <button className="log-in" onClick={() => onClickLogIn()}>Log In</button>
          </div>
          : signUpToggle ?
            <SignUp
              buttonsDisplayed={buttonsDisplayed}
              setButtonsDisplayed={setButtonsDisplayed}
              SIGN_UP={SIGN_UP}
            />
            : <Login
              buttonsDisplayed={buttonsDisplayed}
              setButtonsDisplayed={setButtonsDisplayed}
              LOGIN={LOGIN}
            />
      }
    </div>
  )
}

export default FormPanel