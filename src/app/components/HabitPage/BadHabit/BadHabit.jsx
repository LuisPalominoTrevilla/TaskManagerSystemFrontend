import React from 'react';
import './BadHabit.scss';

class BadHabit extends React.Component {
    render() {
        return (
            <div className='contain-bad-habit'>
                <div className='content-bad-habit'>
                    <img 
                    src="https://media.npr.org/assets/img/2018/03/16/cig-in-air_wide-cf2d76590e33ee7b85f9f9ba1d0db11a0ce79e9d-s800-c85.jpg"
                    alt =''/>
                    <div className='information-bad-habit'>
                        <div>
                            <div className='information-header-bad-habit'>
                                <div className='title-bad-habit'>
                                    Smoke
                                </div>
                                <div className='score-bad-habit'>
                                    Score: 45
                                </div>
                            </div>
                            <div className='description-bad-habit'>
                                Bad Habit
                                <br/>
                                hard to do
                            </div>
                        </div>
                        <div className="edit-erease-bad-habit">
                            <i className="fas fa-pencil-alt"></i>
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <div className='button-negative'>
                    <i className="fas fa-minus"></i>
                </div>
            </div>
        )
    }

}

export default BadHabit;