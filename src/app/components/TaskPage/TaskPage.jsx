import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import AddTask from '../TaskPage/AddTask/AddTask'
import './TaskPage';
import Task from './Task/Task';
import { getUserTask } from '../../actions/tasks';

function RenderTasks( {tasks}, taskChange) {
  console.log(taskChange);
  return tasks.map(task => (
    <Task
    title= {task.title}
    taskId = {task.taskId}
    description={task.description}
    dueDate={task.dueDate}
    reminderDate={task.reminderDate}
    imageUrl={task.imageUrl}
    userId={task.userId}
    changeTask ={taskChange}
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

      handleLanguage(langValue) {
        this.setState({tasks: langValue});
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
                    <AddTask
                    changeTask = {this.handleLanguage.bind(this)}
                    />
                </div>
            </div>
            {this.state.tasks.map(task => (
            <Task
            title= {task.title}
            taskId = {task.taskId}
            description={task.description}
            dueDate={task.dueDate}
            reminderDate={task.reminderDate}
            imageUrl={task.imageUrl}
            userId={task.userId}
            completed={task.completed}
            changeTask ={this.handleLanguage.bind(this)}
            color={'green'}
            />
            ))}
        </div>)
    }
}

export default TaskPage;