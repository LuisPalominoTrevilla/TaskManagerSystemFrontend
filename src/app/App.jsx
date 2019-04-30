import React, { Component } from 'react';
import Logo from './components/LogoExample.jsx';

import Header from './components/Header/Header';
import logo from '../assets/icons/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
