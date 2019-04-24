import React, { Component } from 'react';
import Logo from './components/LogoExample.jsx';

import logo from '../assets/icons/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo logo={logo}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
