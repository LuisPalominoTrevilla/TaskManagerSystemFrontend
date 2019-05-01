import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './TaskPage';

class TaskPage extends React.Component {
    render() {
        return(
        <div className='task-contain'>
            <Header/>
            <Menu/>
        </div>)
    }
}

export default TaskPage;