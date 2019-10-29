import React, { useEffect, useContext, createContext, useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_USER, ADD_LIST } from '../gql';
import { AppContext } from '../App';
import ListContainer from './ListContainer';
import TaskContainer from './TaskContainer';

export const DashContext = createContext(null);

function Dashboard() {
  const _AppContext = useContext(AppContext);
  const [selectedList, setSelectedList] = useState(null);
  const [user, setUser] = useState(null);

  const token = localStorage.getItem('token');

  const [addList] = useMutation(ADD_LIST, {
    context: {
      headers: {
        authorization: token,
      },
    },
  });

  const { loading, error, data } = useQuery(GET_USER, {
    context: {
      headers: {
        authorization: token,
      },
    },
  });

  const logout = () => {
    localStorage.removeItem('token');
    _AppContext.setIsLoggedIn(false);
  };

  useEffect(() => {
    if (data) {
      setUser(data.currentUser.user);
      setSelectedList(data.currentUser.user.lists[0].id);
    }
  }, [data]);

  if (loading) return <div className="spinner" />;
  if (error) return <h1>{error.message}</h1>;

  return (
    <DashContext.Provider value={{ user, selectedList, setSelectedList }}>
      <div className="dashboard-container">
        <div className="nav-links">
          <li className="nav-item">Dashboard</li>
          <li className="nav-item">How to Use Børd</li>
          <li className="nav-item">Settings</li>
        </div>
        <div className="nav-item__button">
          <button className="logout-button" onClick={logout}>
            logout
          </button>
        </div>
        <div className="dashboard-header">
          <div className="dashboard-header-text">
            <h1>Hey, Name!</h1>
            <h5>You look good today! Here's what's on your agenda.</h5>
          </div>
        </div>
        <div className="dashboard-panel">
          <ListContainer />
          <TaskContainer />
        </div>
      </div>
    </DashContext.Provider>
  );
}

export default Dashboard;
