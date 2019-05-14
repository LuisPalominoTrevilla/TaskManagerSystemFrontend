import React, { Component } from 'react';
import './Task.scss';
import PropTypes from 'prop-types';
import { deleteTask, getUserTask } from '../../../actions/tasks';
import  Notify  from '../../../utils/notifier';


export default class Task extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleDeleteTask() {
    deleteTask(this.props.taskId).then((res) => {
      Notify.createNotification('success', 'Delete Task', 'The task was deleted successfully');
      getUserTask().then(res => {this.props.changeTask(res.data)})
    }).catch((err) => {
      Notify.createNotification('error', 'Delete Task', err.message);
    })

  }

  render() {
    return (
      <div className='task-contain-page'>
          <div className='information-task'>
            <div className='d-flex'>
                <img
                src={this.props.imageUrl}
                alt=''/>
                <div className='ml-4'>
                    <div className='title-task'>{this.props.title}</div>
                    <div className='due-date-task'>Due: {this.props.dueDate}</div>
                </div>
            </div>
            <div className="edit-erease-task">
                <i className="fas fa-pencil-alt"></i>
                <button className='task-erease-button' onClick={this.handleDeleteTask}>
                <i className="fas fa-trash-alt" ></i>
                </button>
            </div>
          </div>
          <div className='task-description'>
              {this.props.description}
          </div>
          <div className= 'd-flex justify-content-between'>
            <i className="fas fa-bell"></i>
            <select name='progress' className='select-progress-task'>
                <option value='toDo'>TO DO</option>
                <option value='inProgress'>IN PROGRESS</option>
                <option value='done'>DONE</option>
            </select>
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
}
