import React from 'react';
import './BadHabit.scss';
import { completeHabit, getUserHabits, deleteHabit } from '../../../actions/habits';
import  Notify  from '../../../utils/notifier';
import querystring from 'querystring';

class BadHabit extends React.Component {
    constructor() {
        super();
        this.handleNegative = this.handleNegative.bind(this);
        this.handleDeleteHabit = this.handleDeleteHabit.bind(this);
      }
      handleNegative() {
        const data = {
            completionStatus: 0
        }
            completeHabit(this.props.id, querystring.stringify(data)).then(()=>{
                Notify.createNotification('success', 'Update Score', 'Score Updated Successfuly');
            }).catch((err) => {
                Notify.createNotification('error', 'Update Score', err.message);
            })
      }

      handleDeleteHabit() {
        deleteHabit(this.props.id).then(() => {
          Notify.createNotification('success', 'Delete Habit', 'The habit was deleted successfully');
          getUserHabits().then(res => {this.props.changeHabit(res.data)})
        }).catch((err) => {
          Notify.createNotification('error', 'Delete Habit', err.message);
        })
    
      }
    render() {
        return (
            <div hidden={!this.props.bad} className='contain-bad-habit'>
                <div className='content-bad-habit'>
                    <img 
                    src={this.props.imageUrl}
                    alt =''/>
                    <div className='information-bad-habit'>
                        <div>
                            <div className='information-header-bad-habit'>
                                <div className='title-bad-habit'>
                                    {this.props.title}
                                </div>
                                <div className='score-bad-habit'>
                                    Score: {this.props.score}
                                </div>
                            </div>
                            <div className='description-bad-habit'>
                                {this.props.type}
                                <br/>
                                {this.props.dificulty}
                            </div>
                        </div>
                        <div className="edit-erease-bad-habit">
                            <i className="fas fa-pencil-alt"></i>
                            <button  style={{color: 'red'}} onClick={this.handleDeleteHabit}>
                            <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='button-negative' onClick={this.handleNegative}>
                    <i className="fas fa-minus"></i>
                </div>
            </div>
        )
    }

}

export default BadHabit;