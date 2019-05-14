import React, { Component } from 'react';
import './Task.scss';
import PropTypes from 'prop-types';
import { deleteTask, getUserTask, updateTask } from '../../../actions/tasks';
import  Notify  from '../../../utils/notifier';


export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state ={
      color: this.props.color,
      completed: this.props.completed,
      overdue: this.props.overdue,
      isOverdue: false,
    }
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.updateComplete = this.updateComplete.bind(this);
    this.done = this.done.bind(this);
  }

  componentDidMount(){
    let someDate = new Date(this.props.dueDate);
        const today = new Date()
        if( someDate.getDate() === today.getDate() &&
          someDate.getMonth() === today.getMonth() &&
          someDate.getFullYear() === today.getFullYear()) {
            this.setState({isOverdue: false});
          } else if (someDate > today){
            this.setState({isOverdue: false});
          } else {
            this.setState({isOverdue: true});
          }
  }

  handleDeleteTask() {
    deleteTask(this.props.taskId).then((res) => {
      Notify.createNotification('success', 'Delete Task', 'The task was deleted successfully');
      getUserTask().then(res => {this.props.changeTask(res.data)})
    }).catch((err) => {
      Notify.createNotification('error', 'Delete Task', err.message);
    })

  }

  updateComplete() {
    updateTask( this.props.taskId ).then(()=> {
      Notify.createNotification('success', 'Update Task Status', 'The task was edited successfully');
      this.setState({completed: true});
    }).catch((err) => {
      Notify.createNotification('error', 'Update Task Status', err.message);
    })
  }

  done() {
    var e = document.getElementById("task-done");
    var value = e.options[e.selectedIndex].value;
    this.setState({completed: value});
    this.updateComplete();
  }


  render() {
    return (
      <div hidden={!(this.state.overdue === this.state.isOverdue)} className='task-contain-page' style={{borderColor: this.state.color}}>
          <div className='information-task'>
            <div className='d-flex'>
                <img
                src={this.props.imageUrl}
                alt=''/>
                <div className='ml-4'>
                    <div className='title-task' style={{color: this.state.color}} >{this.props.title}</div>
                    <div className='due-date-task'>Due: {this.props.dueDate}</div>
                </div>
            </div>
            <div className="edit-erease-task" style={{color: this.state.color}}>
                <button className='task-erease-button' style={{color: this.state.color}}>
                <i className="fas fa-pencil-alt"></i>
                </button>
                <button className='task-erease-button' style={{color: this.state.color}} onClick={this.handleDeleteTask}>
                <i className="fas fa-trash-alt" ></i>
                </button>
            </div>
          </div>
          <div className='task-description'>
              {this.props.description}
          </div>
          <div className= 'd-flex justify-content-between'>
            <div></div>
            <select hidden={this.state.completed} name='progress' id='task-done' onChange={this.done} className='select-progress-task'>
                <option selected={this.state.completed} value={false} >TO DO</option>
                <option selected={this.state.completed} value={true} >DONE</option>
            </select>
            <div hidden={!this.state.completed}>COMPLETED</div>
          </div>
        
      </div>
    )
  }
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  reminderDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
