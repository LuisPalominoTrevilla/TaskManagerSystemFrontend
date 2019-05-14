import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import AddTask from '../TaskPage/AddTask/AddTask'
import './TaskPage.scss';
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
          color: 'blue'
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
      updateColor(someDate) {
        someDate = new Date(someDate);
        const today = new Date()
        if( someDate.getDate() == today.getDate() &&
          someDate.getMonth() == today.getMonth() &&
          someDate.getFullYear() == today.getFullYear()) {
            return '#C80E14';
          } else if (someDate > today){
            return '#F7AF47';
          } else {
            return '#F7AF47';
          }
      }

      overdue(someDate) {
        someDate = new Date(someDate);
        const today = new Date()
        if( someDate.getDate() == today.getDate() &&
          someDate.getMonth() == today.getMonth() &&
          someDate.getFullYear() == today.getFullYear()) {
            return false;
          } else if (someDate > today){
            return false;
          } else {
            return true;
          }
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
            <div className='d-flex justify-content-between'>
              <div className='w-50'>
                <div className='tasks-title-incoming' style={{color: '#F7AF47'}}>INCOMING TASKS</div>
              {
              this.state.tasks.map(task => (
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
              color={this.updateColor(task.dueDate)}
              overdue={false}
              />
              ))}
              </div>
              <div className='w-50'>
              <div className='tasks-title-incoming' style={{color: '#F7AF47'}}>OVERDUE TASKS</div>
              {
              this.state.tasks.map(task => (
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
              color={this.updateColor(task.dueDate)}
              overdue={true}
              />
              ))}
              </div>
            </div>
            
        </div>)
    }
}

export default TaskPage;