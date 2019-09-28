import React from 'react';
import './App.css';
import { Button, Header, UserPanel } from './components'

function App() {
  return (
    <div className="app">
      <h1 className='bord-title'>Børd</h1>
      <div className="art-panel"/>
      <UserPanel/>
    </div>
  );
}

export default App;
