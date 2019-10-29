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
            <div className='list-item'><strong>This is a List Item</strong></div>
            <div className='list-item'>35 Tasks</div>
            <div className='list-item'>Due 11/95</div>
          </div>
          <div className='list-container'>
            <div className='list-item'>&#10005;</div>
            <div className='list-item'><strong>This is a List Item</strong></div>
            <div className='list-item'>35 Tasks</div>
            <div className='list-item'>Due 11/95</div>
          </div>
          <div className='list-container__selected'>
            <div className='list-item__selected'>&#10005;</div>
            <div className='list-item__selected'><strong>Selected Event</strong></div>
            <div className='list-item__selected'>4 Tasks</div>
            <div className='list-item__selected'>Due 12/27</div>
          </div>
          <div className='list-container__add'>

          </div>
        </div>
        <div className='task-title'>Tasks for Selected Event
          <div className='task-container'>
            <div className='task-date'>Monday, April 27</div>
            <button className='add-task__button'>Add Task</button>
            <div className='task-item'>
              <input className='task-item__title' type="text" placeholder="Some Task"></input>
              <div className='task-item__time'>10:00 AM - 11:00 AM</div>
              <p className='task-item__info'>Bacon ipsum dolor sit, amet consectetur adipisicing elit.
                Facere quia corrupti quo, illo culpa quaerat perspiciatis earum tempora
                provident distinctio debitis architecto libero.
                Excepturi ea ducimus aliquid vitae sequi ipsam pork belly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
