import './App.css';
import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';

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
          <Home title='Home Page'
              description= 'Welcome to our website'
          ></Home>
          <About title='About Page'
              description='We are passionate about
                            delivering quality experiences'
          ></About>
          <Contact title='Contact Page'
              description='Feel free to reach out to us via
                            email or phone'
          ></Contact>
    </div>
  );
}

export default App;