import React from 'react';
import './GoodHabit.scss';

class GoodHabit extends React.Component {
    render() {
        return (
            <div className='contain-good-habit'>
                <div className='button-positive'>
                    <i className="fas fa-plus"></i>
                </div>
                <div className='content-good-habit'>
                    <img 
                    src="https://cdn1.medicalnewstoday.com/content/images/articles/290/290814/benefits-of-drinking-water.jpg"
                    alt =''/>
                    <div className='information-good-habit'>
                        <div>
                            <div className='information-header-good-habit'>
                                <div className='title-good-habit'>
                                    Drink Water
                                </div>
                                <div className='score-good-habit'>
                                    Score: 45
                                </div>
                            </div>
                            <div className='description-good-habit'>
                                Good Habit
                                <br/>
                                Easy to do
                            </div>
                        </div>
                        <div className="edit-erease-good-habit">
                            <i className="fas fa-pencil-alt"></i>
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default GoodHabit;