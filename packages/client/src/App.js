import React, { useState, useEffect, createContext } from 'react';
import { UserPanel, Dashboard } from './components';
import './App.css';

export const AppContext = createContext(null);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [list, setList] = useState([]);
  const [listInput, setListInput] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  function listOnChange(e) {
    setListInput(e.target.value);
  }

  return (
    <AppContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <div className="app">
        {isLoggedIn ? (
          <Dashboard
            list={list}
            setList={setList}
            listInput={listInput}
            setListInput={setListInput}
            listOnChange={listOnChange}
          />
        ) : (
          <div className="app">
            <h1 className="bord-title">Børd</h1>
            <div className="art-panel" />
            <UserPanel />
          </div>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
