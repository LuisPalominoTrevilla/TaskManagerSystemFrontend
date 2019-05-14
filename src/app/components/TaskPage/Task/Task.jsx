import React, { Component } from 'react';
import './Task.scss';
import PropTypes from 'prop-types';

export default class Task extends Component {
  render() {
    return (
      <div className='task-contain-page'>
          <div className='information-task'>
            <div className='d-flex'>
                <img
                src='https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2017/dec/anon-on-laptop.jpg.transform/original/image.png'
                alt=''/>
                <div className='ml-4'>
                    <div className='title-task'>{this.props.title}</div>
                    <div className='due-date-task'>Due: {this.props.dueDate}</div>
                </div>
            </div>
            <div className="edit-erease-task">
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-trash-alt"></i>
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
  taskId: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  reminderDate: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired
}
