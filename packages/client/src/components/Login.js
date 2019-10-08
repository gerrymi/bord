import React from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { useState } from 'react'

function Login({
  buttonsDisplayed,
  setButtonsDisplayed,
  LOGIN
}) {
  const client = useApolloClient();
  const [login, { data, loading, error }] = useMutation(LOGIN,
    {
      onCompleted({ login }) {
        localStorage.setItem('token', login.token)
        client.writeData({ data: { isLoggedIn: true } })
        console.log(login.token)
      }
    }
  )
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function usernameOnChange(e) {
    setUsername(e.target.value)
  }

  function passwordOnChange(e) {
    setPassword(e.target.value)
  }

  function goBack() {
    setButtonsDisplayed(true)
  }

  return (
    <div className="sign-up">
      <input placeholder="Username" onChange={usernameOnChange} />
      <input type="password" placeholder="Create Password" onChange={passwordOnChange} />
      <button onClick={() => {
        login({ variables: { username: username, password: password } })
      }
      }>Log In</button>
      <button onClick={() => {
        goBack()
        client.writeData({ data: { isLoggedIn: false } })
      }}>Back</button>
    </div>
  )
}
export default Login