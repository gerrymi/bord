import React, { useState, useEffect } from 'react'
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks'

function Dashboard({
  GET_USER,
  ADD_LIST,
  listInput,
  listOnChange
}) {
  const [currentUser, setCurrentUser] = useState({})

  const token = localStorage.getItem('token')
  const [addList] = useMutation(ADD_LIST, {
    context: {
      headers: {
        authorization: token
      }
    }
  })
  console.log(token)
  const { loading, error, data } = useQuery(GET_USER,
    {
      context: {
        headers: {
          authorization: token
        }
      }
    })

  console.log(data)
  // useEffect(() => {
  //   setCurrentUser(data.currentUser.user)
  // }, [])

  if (loading) return <div className="spinner" />
  if (error) return <h1>{error.message}</h1>

  return (
    <div className='nav-component'>
      <ul className='nav-links'>
        <li>Dashboard</li>
        <li>How to Use Børd</li>
        <li>Settings</li>
        <li>Minimize</li>
      </ul>
      <h1>Lists</h1>
      <input
        placeholder="Let's create a List..."
        value={listInput}
        onChange={listOnChange}
      />
      <button
        onClick={() => {
          addList({ variables: { name: listInput} })
        }
        }>Add List
      </button>
      {/* <ul>
        {
          data.currentUser.user.lists.map((list, i) => {
            return (
              <li>{list.name}</li>
            )
          })
        }
      </ul> */}
      <button onClick={() => localStorage.removeItem('token')}>logout</button>
    </div>
  );
}

export default Dashboard
