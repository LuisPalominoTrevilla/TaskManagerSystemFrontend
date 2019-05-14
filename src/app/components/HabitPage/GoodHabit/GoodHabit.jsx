import React from 'react';
import './GoodHabit.scss';
import { getUserHabits, deleteHabit } from '../../../actions/habits';
import  Notify  from '../../../utils/notifier';

class GoodHabit extends React.Component {
    constructor() {
        super();
        // this.handleNegative = this.handleNegative.bind(this);
        this.handleDeleteHabit = this.handleDeleteHabit.bind(this);
      }
    //   handleNegative() {
    //     const data = {
    //         completionStatus: 0
    //     }
    //         completeHabit(this.props.id, querystring.stringify(data)).then(()=>{
    //             Notify.createNotification('success', 'Update Score', 'Score Updated Successfuly');
    //         }).catch((err) => {
    //             Notify.createNotification('error', 'Update Score', err.message);
    //         })
    //   }

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
            <div hidden={!this.props.good} className='contain-good-habit'>
                <div className='button-positive'>
                    <i className="fas fa-plus"></i>
                </div>
                <div className='content-good-habit'>
                    <img 
                    src={this.props.imageUrl}
                    alt =''/>
                    <div className='information-good-habit'>
                        <div>
                            <div className='information-header-good-habit'>
                                <div className='title-good-habit'>
                                    {this.props.title}
                                </div>
                                <div className='score-good-habit'>
                                    Score: {this.props.score}
                                </div>
                            </div>
                            <div className='description-good-habit'>
                                {this.props.type}
                                <br/>
                                {this.props.dificulty}
                            </div>
                        </div>
                        <div className="edit-erease-good-habit">
                            <i className="fas fa-pencil-alt"></i>
                            <button  style={{color: 'green'}} onClick={this.handleDeleteHabit}>
                            <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default GoodHabit;