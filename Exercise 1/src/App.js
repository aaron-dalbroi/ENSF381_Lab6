import './App.css';
import React from 'react';

function App() {
  // JavaScript Expressions
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true; // Change to false to test

  return (
    <div>
      {/* JSX Elements */}
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>

      {/* Embedding JavaScript Expression */}
      <p>Current Year: {currentYear}</p>

      {/* Conditional Rendering */}
      <p>
        {(() => {
          if (isLoggedIn) {
            return "Welcome back!";
          } else {
            return "Please log in.";
          }
        })()}
      </p>
    </div>
  );
}

export default App;