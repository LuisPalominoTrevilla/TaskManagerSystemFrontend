import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import AddTask from '../TaskPage/AddTask/AddTask'
import './TaskPage';
import Task from './Task/Task';
import { getUserTask } from '../../actions/tasks';

function RenderTasks({ tasks }) {
  return tasks.map(task => (
    <Task
    title= {task.title}
    taskId = {task.taskId}
    description={task.description}
    dueDate={task.dueDate}
    reminderDate={task.reminderDate}
    imageUrl={task.imageUrl}
    userId={task.userId}
    />
  ));
}

class TaskPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
          tasks: [],
        };
      }

      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
      componentDidMount(){
        getUserTask().then(res => {this.setState({tasks: res.data})})

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
            <RenderTasks tasks={this.state.tasks ? this.state.tasks: []}/>
        </div>)
    }
}

export default TaskPage;