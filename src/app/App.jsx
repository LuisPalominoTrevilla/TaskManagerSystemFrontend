import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import HabitPage from './components/HabitPage/HabitPage';
import TaskPage from './components/TaskPage/TaskPage';
import ReportPage from './components/ReportPage/ReportPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/habits' exact component={HabitPage}/>
        <Route path='/tasks' exact component={TaskPage}/>
        <Route path='/report' exact component={ReportPage}/>
      </BrowserRouter>
    );
  }
}

export default App;
