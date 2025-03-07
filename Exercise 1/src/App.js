import './App.css';
import React from 'react';

function App() {

  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;
  const loginMessage = isLoggedIn ? 'Welcome back!' : 'Please log in';

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>


      <p>Current Year: {currentYear}</p>

      <p>{ loginMessage}</p>
    </div>
  );
}

export default App;