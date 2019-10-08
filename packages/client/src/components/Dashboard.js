import React from 'react'
import { useQuery } from '@apollo/react-hooks'

function Dashboard({
  GET_USER
}) {
  const { loading, error, data } = useQuery(GET_USER, {
    context: {
      headers: {
        authorization: localStorage.getItem('token')
      }
    }
  })
  if (loading) return <div className="spinner" />
  // if (error) return <h1>{error.message}</h1>
  console.log(data)
  return (
    <div className="dashboard">
      {/* <h1>{data.user.username}</h1> */}
      <button onClick={() => localStorage.removeItem('token')}>logout</button>
    </div>
  )
}

export default Dashboard