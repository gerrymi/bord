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
    <div className='nav-component'>
      <div className='nav-link'>
        <li className='nav-item'>Dashboard</li>
        <li className='nav-item'>How to Use Børd</li>
        <li className='nav-item'>Settings</li>
      </div>
      <button
        className='logout-button'
        onClick={() => localStorage.removeItem('token')}>
        logout</button>
    </div>
  );
}

export default Dashboard
