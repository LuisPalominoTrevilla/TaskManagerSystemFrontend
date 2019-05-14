import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import Select from 'react-select';
import './AddHabit.scss';
import { addHabit, getUserHabits } from '../../../actions/habits';
import  Notify  from '../../../utils/notifier';


const difficulties = [
    { label: "Easy", value: 2 },
    { label: "Medium", value: 3 },
    { label: "Hard", value: 5 }
  ];

const habitTypes = [
    { label: "Good", value: 1 },
    { label: "Bad", value: -1 },
    { label: "Both", value: 0 }
  ];

class AddHabit extends React.Component {
    constructor() {
        super();
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handleDifficulties = this.handleDifficulties.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = {
          show: false,
          image: '',
          imageUrl: null,
          title: null,
          type: null, 
          difficulty: null
        };
      }
    
      handleChangeImage = (e) => {
        this.setState({ image: e.target.files[0] });
        this.setState({ imageURL: URL.createObjectURL(new Blob(e.target.files))});
    }

    handleChangeTitle = (e) => {
        this.setState({
          title: e.target.value
        });
    }

    handleClose() {
        this.setState({ show: false });
        this.setState({
            show: false,
            image: null,
            imageUrl: '',
            title: null,
            type: null, 
            difficulty: null
        })
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleType(e) {
        console.log(e.value);
        this.setState({type: e.value});
    }

    handleDifficulties(e) {
        console.log(e.value);
        this.setState({difficulty: e.value});
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append('image', this.state.image)
        formData.set('title', this.state.title)
        formData.set('type', this.state.type)
        formData.set('difficulty', this.state.difficulty)
        formData.set('userId', window.localStorage.getItem('userId'))
        addHabit(formData).then((res) => {
            if(res.data.title) {
                this.handleClose();
                Notify.createNotification('success', 'Add Task', 'Task has been added');
                getUserHabits().then(res => {this.props.changeHabit(res.data)})
            }
        }).catch((err) => {
            Notify.createNotification('error', 'Add Task Error', err.message);
        });
    }
    
    render() {
        return (
            <div>
            <button className='habit-page-button' onClick={this.handleShow}>+</button>
            <Modal className='container container-add-habit' show={this.state.show} onHide={this.handleClose}>
                <div className='row col-12 m-auto addHabit-header'>
                    <div className="col-6">
                        <div className="col-12 title-addHabit">ADD HABIT</div>
                    </div>
                    <div className="col-6">
                        <button type="button" id="button_close" className="close close-btn" aria-label="Close" onClick={this.handleClose}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>                                           
                </div>
                <div className='row'>
                    <div className="col-6">
                        <div className="col-12 ml-auto">
                        <div className='card-body second'>
                            <div className="form-group">
                                <img src={this.state.imageURL} alt="" className="task-before-image"/>
                                <input type="file" className="form-control-file" id="file" onChange={this.handleChangeImage}/>
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
                                <Form.Control id="input_habitTitle" type="text" placeholder="Text Input" onChange={this.handleChangeTitle} />                                
                            </Form.Group>
                            </div>                    
                        </div>                                   
                    </div>                 
                    <div className="col-6 ml-auto">
                        <div className="card-body">
                            <div className="col-12 input-group title-addHabit">HABIT TYPE</div>
                            <div className="col-12">
                                <Select id="select_habitType" options={ habitTypes } onChange={this.handleType}/>
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
                                    <Select id="select_habitDifficulty" options={ difficulties } onChange={this.handleDifficulties}/>
                                </div>                    
                            </div>
                            <div className="col-8 m-auto">
                                <button id="button_addHabit" className="custom-btn" onClick={this.handleSubmit}><b>ADD</b></button>                            
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            </div>
        )
    }

}

export default AddHabit;