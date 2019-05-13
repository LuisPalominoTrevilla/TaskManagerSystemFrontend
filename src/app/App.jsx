import React, { Component } from 'react';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import './App.scss';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import HabitPage from './components/HabitPage/HabitPage';
import TaskPage from './components/TaskPage/TaskPage';
import ReportPage from './components/ReportPage/ReportPage';
import './global.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"/>
        <Route path='/' exact render = {() => (
          global.user !== '' ? <Redirect to='/habits'/> : <Redirect to='/login'/> 
        )}/>
        <Route path='/habits' exact component={HabitPage}/>
        <Route path='/tasks' exact component={TaskPage}/>
        <Route path='/report' exact component={ReportPage}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
      </BrowserRouter>
    );
  }
}

export default App;
