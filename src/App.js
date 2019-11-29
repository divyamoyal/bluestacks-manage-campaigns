import React from 'react';
import logo from './assets/logo.png';
import ManageCampain from './containers/ManageCampain';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" height="50" width="166" />
      </header>
      <div className="main">
        <ManageCampain />
      </div>
    </div>
  );
}

export default App;
