import React, { Component } from 'react';
import './Task.scss';

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
                    <div className='title-task'>Study Math</div>
                    <div className='due-date-task'>Due: 07/04/2019</div>
                </div>
            </div>
            <div className="edit-erease-task">
                <i class="fas fa-pencil-alt"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
          </div>
          <div className='task-description'>
              Study for my math exam, that is tomorrow. Topics are: Derivatives, Integrals and Graphs.
          </div>
          <div className= 'd-flex justify-content-between'>
            <i class="fas fa-bell"></i>
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