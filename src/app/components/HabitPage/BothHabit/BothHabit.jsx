import React from 'react';
import './BothHabit.scss';

class BothHabit extends React.Component {
    render() {
        return (
            <div hidden={!this.props.both} className='contain-both-habit'>
                <div className='button-negative'>
                    <i className="fas fa-plus"></i>
                </div>
                <div className='content-both-habit'>
                    <img 
                    src={this.props.imageUrl}
                    alt =''/>
                    <div className='information-both-habit'>
                        <div>
                            <div className='information-header-both-habit'>
                                <div className='title-both-habit'>
                                    {this.props.title}
                                </div>
                                <div className='score-both-habit'>
                                    Score: {this.props.score}
                                </div>
                            </div>
                            <div className='description-both-habit'>
                                {this.props.type}
                                <br/>
                                {this.props.dificulty}
                            </div>
                        </div>
                        <div className="edit-erease-both-habit">
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

export default BothHabit;