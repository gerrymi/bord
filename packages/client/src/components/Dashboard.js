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
    <div className="dashboard-container">
      <div className='nav-links'>
        <li className='nav-item'>Dashboard</li>
        <li className='nav-item'>How to Use Børd</li>
        <li className='nav-item'>Settings</li>

        <button
          className='logout-button'
          onClick={() => localStorage.removeItem('token')}>
          logout</button>

      </div>
      <div className='dashboard-header'>
        <div className='dashboard-header-text'>
          <h1>Hey, Name!</h1>
          <h5>You look good today! Here's what's on your agenda.</h5>
        </div>
      </div>
      <div className='dashboard-panel'>
        <div className='list-title'>List
          <div className='list-container'>
            <div className='list-item'>&#10005;</div>
            <div className='list-item'>This is a List Item</div>
            <div className='list-item'>35 Tasks</div>
            <div className='list-item'>Due 11/95</div>
          </div>
          <div className='list-container'>
            <div className='list-item'>&#10005;</div>
            <div className='list-item'>This is a List Item</div>
            <div className='list-item'>35 Tasks</div>
            <div className='list-item'>Due 11/95</div>
          </div>
          <div className='list-container__selected'>
            <div className='list-item__selected'>&#10005;</div>
            <div className='list-item__selected'>Selected Event</div>
            <div className='list-item__selected'>4 Tasks</div>
            <div className='list-item__selected'>Due 12/27</div>
          </div>
          <div className='list-container__add'>

          </div>
        </div>
        <div className='task-title'>Tasks for Selected Event

        </div>
      </div>
    </div>
  );
}

export default Dashboard
