import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Cube from './cube.js';
import './app.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Cube/>
        <p>igor zanne</p>
        <button className='app-resume'>resume</button>
        <div>
          <SocialIcon url="https://www.linkedin.com/in/igorzanne/" style={{height: 28, width: 28}} target='_blank' />
          <SocialIcon url="https://github.com/IgorZanne" style={{height: 28, width: 28, marginLeft: 16}} target='_blank'/>
          <SocialIcon url="https://www.instagram.com/igorzanne/" style={{height: 28, width: 28, marginLeft: 16}} target='_blank'/>
          <SocialIcon url="https://twitter.com/igorzanne" style={{height: 28, width: 28, marginLeft: 16}} target='_blank'/>
        </div>
      </header>
    </div>
  );
}

export default App;
