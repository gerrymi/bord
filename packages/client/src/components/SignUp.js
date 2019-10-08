import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'

function SignUp({
  buttonsDisplayed,
  setButtonsDisplayed,
  SIGN_UP
}) {
  const [register, { loading, error, data }] = useMutation(SIGN_UP)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function usernameOnChange(e) {
    setUsername(e.target.value)
  }
  function emailOnChange(e) {
    setEmail(e.target.value)
  }
  function passwordOnChange(e) {
    setPassword(e.target.value)
  }

  function goBack() {
    console.log(buttonsDisplayed)
    setButtonsDisplayed(true)
  }
  return (
    <div className="sign-up">
      <input placeholder="User Name"
        onChange={usernameOnChange}
      />
      <input placeholder="Email"
        onChange={emailOnChange}
      />
      <input placeholder="Create Password"
        onChange={passwordOnChange}
        type="password"
      />
      <button
        onClick={() => {
          register({ variables: { email: email, username: username, password: password } })
        }}
      >Register</button>
      <button onClick={() => {
        goBack()
      }}>Back</button>
    </div>
  )
}

export default SignUp