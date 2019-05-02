import React from 'react';
import './BothHabit.scss';

class BothHabit extends React.Component {
    render() {
        return (
            <div className='contain-both-habit'>
                <div className='button-negative'>
                    <i class="fas fa-plus"></i>
                </div>
                <div className='content-both-habit'>
                    <img 
                    src="https://media.npr.org/assets/img/2018/03/16/cig-in-air_wide-cf2d76590e33ee7b85f9f9ba1d0db11a0ce79e9d-s800-c85.jpg"
                    alt =''/>
                    <div className='information-both-habit'>
                        <div>
                            <div className='information-header-both-habit'>
                                <div className='title-both-habit'>
                                    Smoke
                                </div>
                                <div className='score-both-habit'>
                                    Score: 45
                                </div>
                            </div>
                            <div className='description-both-habit'>
                                Bad Habit
                                <br/>
                                hard to do
                            </div>
                        </div>
                        <div className="edit-erease-both-habit">
                            <i class="fas fa-pencil-alt"></i>
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <div className='button-negative'>
                    <i class="fas fa-minus"></i>
                </div>
            </div>
        )
    }

}

export default BothHabit;