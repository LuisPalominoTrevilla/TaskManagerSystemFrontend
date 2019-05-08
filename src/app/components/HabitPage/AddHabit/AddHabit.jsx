import React from 'react';
import {Form, Figure, Button} from 'react-bootstrap';
import Select from 'react-select';
import './AddHabit.scss';

const difficulties = [
    { label: "Easy", value: 1 },
    { label: "Medium", value: 2 },
    { label: "Hard", value: 3 }
  ];

const habitTypes = [
    { label: "Good", value: 1 },
    { label: "Bad", value: 2 },
    { label: "Both", value: 3 }
  ];

class AddHabit extends React.Component {

    
    render() {
        return (
            <div className='container container-add-habit'>
                <div className='row col-12 m-auto addHabit-header'>
                    <div className="col-6">
                        <div className="col-12 title-addHabit">ADD HABIT</div>
                    </div>
                    <div className="col-6">
                        <button type="button" id="button_close" className="close close-btn" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>                                           
                </div>
                <div className='row'>
                    <div className="col-6">
                        <div className="col-12 ml-auto">
                            <div className="row col-12">
                            <img id="img_imgHabit"
                                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-young-woman-on-morning-run-royalty-free-image-856985422-1533935456.jpg?resize=980:*"
                                alt =''/>
                            </div>
                            <div className="row col-12">
                                <div className="col-6">
                                <button id="button_upload" class="custom-btn"><b>UPLOAD IMAGE</b></button>                            </div>
                                <div className="col-6">
                                    <p id="p_fileName">File:</p>
                                </div>
                            </div>                                        
                        </div> 
                    </div>                                           
                </div>
                <div className='row'>
                    <div className="col-6 ml-auto">
                        <div className="card-body">
                            <div className="col-12 input-group title-addHabit">HABIT TITLE</div>
                            <div className="col-12">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control id="input_habitTitle" type="text" placeholder="Text Input" />                                
                            </Form.Group>
                            </div>                    
                        </div>                                   
                    </div>                 
                    <div className="col-6 ml-auto">
                        <div className="card-body">
                            <div className="col-12 input-group title-addHabit">HABIT TYPE</div>
                            <div className="col-12">
                                <Select id="select_habitType" options={ habitTypes } />
                            </div>                    
                        </div>                                   
                    </div>   
                </div>
                <div className='row'>
                    <div className="col-6 custom-div">
                        <div className="card-body">
                            <div className="card-body">
                                <div className="col-12 input-group title-addHabit">DIFFICULTY</div>
                                <div className="col-12">
                                    <Select id="select_habitDifficulty" options={ difficulties } />
                                </div>                    
                            </div>
                            <div className="col-8 m-auto">
                                <button id="button_addHabit" class="custom-btn"><b>ADD</b></button>                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AddHabit;