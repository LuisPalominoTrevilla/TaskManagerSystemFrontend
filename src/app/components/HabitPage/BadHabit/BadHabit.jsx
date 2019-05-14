import React from 'react';
import './BadHabit.scss';

class BadHabit extends React.Component {
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