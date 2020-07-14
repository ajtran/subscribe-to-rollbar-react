import React from 'react';

import logo from './logo.svg';
import './App.css';

import SubscriberForm from './SubscriberForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Keep up with Rollbar!</h1>
        <div className="App">
          <SubscriberForm />
        </div>
      </header>
    </div>
  );
}

export default App;
