import React from 'react';
import './GoodHabit.scss';

class GoodHabit extends React.Component {
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
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default GoodHabit;