import React, { Component } from 'react';
// import Login from './components/Login/Login.js';
// import Register from './components/Register/Register.js';
// import Header from './components/Header/Header';
// import Header_Login from './components/Header_Login/Header_Login';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import HabitPage from './components/HabitPage/HabitPage';
import TaskPage from './components/TaskPage/TaskPage';
import ReportPage from './components/ReportPage/ReportPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <Route path='/habits' exact component={HabitPage}/>
        <Route path='/tasks' exact component={TaskPage}/>
        <Route path='/report' exact component={ReportPage}/>
      </BrowserRouter>
    );
  }
}

export default App;
