import React, { Component } from 'react';
import './GoodHabit.scss';

export default class Task extends Component {
  render() {
    return (
      <div className='task-contain-page-good-habit'>
          <div className='information-task'>
            <div className='d-flex'>
                <img
                src='https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2017/dec/anon-on-laptop.jpg.transform/original/image.png'
                alt=''/>
                <div className='ml-12'>
                    <div className='title-task'>Drink Water</div>
                    <div className='info-task'>Good Habit</div>
                    <div className='info-task'>Easy to do</div>
                </div>
            </div>
            <div className="edit-erease-task">
                <i class="fas fa-pencil-alt"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
          </div>
      </div>
    )
  }
}
