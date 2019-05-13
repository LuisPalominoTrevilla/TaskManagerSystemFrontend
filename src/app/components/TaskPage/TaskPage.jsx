import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './TaskPage';
import Task from './Task/Task';

class TaskPage extends React.Component {
    render() {
        return(
        <div className='task-contain'>
            <Header/>
            <Menu/>
            <div>
            <Task/>
            </div>
        </div>)
    }
}

export default TaskPage;