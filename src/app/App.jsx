import React, { Component } from 'react';
import Logo from './components/LogoExample.jsx';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Header from './components/Header/Header';
import Header_Login from './components/Header_Login/Header_Login';
import logo from '../assets/icons/logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <Header_Login/>
        <Login />
        {/* <Register /> */}
      </div>
    );
  }
}

export default App;
