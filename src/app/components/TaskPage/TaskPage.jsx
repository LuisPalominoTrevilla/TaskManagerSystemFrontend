import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import AddTask from '../TaskPage/AddTask/AddTask'
import {Modal, Button, Col} from 'react-bootstrap';
import './TaskPage';
import Task from './Task/Task';

class TaskPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }

      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    
    render() {
        return(
        <div className='task-contain'>
            <Header/>
            <Menu/>
            <div className='habits'>
                <div className='habit-button-alignment'>
                    <AddTask/>
                </div>
            </div>
            <Task/>
        </div>)
    }
}

export default TaskPage;