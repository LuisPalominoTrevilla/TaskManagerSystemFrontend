import React from 'react';
import {Form, Modal} from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Select from 'react-select';
import './AddTask.scss';
import { addTask } from '../../../actions/tasks';
import  Notify  from '../../../utils/notifier';

const hours = [
    { label: "01", value: 1 }, { label: "02", value: 2 }, { label: "03", value: 3 },
    { label: "04", value: 4 }, { label: "05", value: 5 }, { label: "06", value: 6 },
    { label: "07", value: 7 }, { label: "08", value: 8 }, { label: "09", value: 9 },
    { label: "10", value: 10 }, { label: "11", value: 11 }, { label: "12", value: 12 },
    { label: "13", value: 13 }, { label: "14", value: 14 }, { label: "15", value: 15 },
    { label: "16", value: 16 }, { label: "17", value: 17 }, { label: "18", value: 18 },
    { label: "19", value: 19 }, { label: "20", value: 20 }, { label: "21", value: 21},
    { label: "22", value: 22 }, { label: "23", value: 23 }, { label: "24", value: 24 },
  ];

  const minutes = [
    { label: "00", value: 0 },{ label: "01", value: 1 },{ label: "02", value: 2 },{ label: "03", value: 3 },
    { label: "04", value: 4 },{ label: "05", value: 5 },{ label: "06", value: 6 },{ label: "07", value: 7 },
    { label: "08", value: 8 },{ label: "09", value: 9 },{ label: "10", value: 10 },{ label: "11", value: 11 },
    { label: "12", value: 12 },{ label: "13", value: 13 },{ label: "14", value: 14 },{ label: "15", value: 15 },
    { label: "16", value: 16 },{ label: "17", value: 17 },{ label: "18", value: 18 },{ label: "19", value: 19 },
    { label: "20", value: 20 },{ label: "21", value: 21 },{ label: "22", value: 22 },{ label: "23", value: 23 },
    { label: "24", value: 24 },{ label: "25", value: 25 },{ label: "26", value: 26 },{ label: "27", value: 27 },
    { label: "28", value: 28 },{ label: "29", value: 29 },{ label: "30", value: 30 },{ label: "31", value: 31 },
    { label: "32", value: 32 },{ label: "33", value: 33 },{ label: "34", value: 34 },{ label: "35", value: 35 },
    { label: "36", value: 36 },{ label: "37", value: 37 },{ label: "38", value: 38 },{ label: "39", value: 39 },
    { label: "40", value: 40 },{ label: "41", value: 41 },{ label: "42", value: 42 },{ label: "43", value: 43 },
    { label: "44", value: 44 },{ label: "45", value: 45 },{ label: "46", value: 46 },{ label: "47", value: 47 },
    { label: "48", value: 48 },{ label: "49", value: 49 },{ label: "50", value: 50 },{ label: "51", value: 51 },
    { label: "52", value: 52 },{ label: "53", value: 53 },{ label: "54", value: 54 },{ label: "55", value: 55 },
    { label: "56", value: 56 },{ label: "57", value: 57 },{ label: "58", value: 58 },{ label: "59", value: 59 }    
  ];
  

class AddTask extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          selectedDay: undefined,
          title: null,
          description: null,
          dueDate: null,
          reminderDate: null,
          userId: null,
          image: null,
          reminder: false,
          imageURL: '',
          hours: null,
          minutes: null,
          selectDay: null,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeHours = this.handleChangeHours.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
        this.handleChangeReminderDate = this.handleChangeReminderDate.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
    
        this.state = {
          show: false,
        };
      }
      handleDayClick(day) {
        let today = new Date(day);
        today = today.toISOString();
        today = today.toString();
        this.setState({ selectedDay: day, selectDay: today });
        console.log(this.state.selectDay);
      }
      
    getPickerValue = value => {
        console.log(value);
    }

    handleClose() {
        this.setState({ 
            show: false,
            selectedDay: undefined,
            title: null,
            description: null,
            dueDate: null,
            reminderDate: null,
            userId: null,
            image: null,
            reminder: false,
            imageURL: '',
            hours: null,
            minutes: null,
            selectDay: null,
        });
    }
    
    handleShow() {
        this.setState({ show: true });
    }

    handleChangeTitle = (e) => {
        this.setState({
          title: e.target.value
        });
    }
    handleChangeDescription = (e) => {
        this.setState({
          description: e.target.value
        });
    }
    handleChangeReminderDate = (e) => {
        this.setState({
          reminderDate: e.target.value
        });
    }
    handleChangeImage = (e) => {
        this.setState({ image: e.target.files[0] });
        this.setState({ imageURL: URL.createObjectURL(new Blob(e.target.files))});
    }
    handleChangeHours = (e) => {
        if (e.value === 24){
            e.value = 0;
        }
        this.setState({
            hours: e.value
          });
        console.log(this.state.hours);
    }
    handleChangeMinutes = (e) => {
        this.setState({
            minutes: e.value
          });
          console.log(this.state.minutes);
    }

    handleSubmit = (e) => {
        console.log(this.state);
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.image)
        formData.set('description', this.state.description)
        formData.set('dueDate', this.state.selectDay)
        if (this.state.reminder){
            var dt = new Date(this.state.selectedDay);
            console.log(dt.setDate(dt.getDate() - this.state.reminderDate));
            dt.setHours(dt.getHours() + this.state.hours-17 );
            dt.setMinutes(dt.getMinutes() + this.state.minutes);
            dt = dt.toISOString();
            dt = dt.toString();
            dt = dt.split('Z');
            console.log(dt[0]);
            dt = dt[0] + '-05:00';
            formData.set('reminderDate', dt)

        }
        formData.set('userId', window.localStorage.getItem('userId'))
        formData.set('title', this.state.title)
        var object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });
        var json = JSON.stringify(object);

        console.log(json);

        addTask(formData).then((res) => {
            if(res.data.title) {
                this.handleClose();
                Notify.createNotification('success', 'Add Task', 'Task has been added');
            }
        }).catch((err) => {
            Notify.createNotification('error', 'Add Task Error', err.message);
        });
       

    }


    render() {
        return (
            <div>
            <button className='habit-page-button' onClick={this.handleShow}>+</button>
            <Modal size ="xl"className='container container-add-task' show={this.state.show} onHide={this.handleClose}>
                <div className='row col-12 m-auto addTask-header'>
                    <div className="col-6">
                        <div className="col-12 title-addTask">ADD TASK</div>
                    </div>
                    <div className="col-6">
                        <button type="button" id="button_close" className="close close-btn" aria-label="Close" onClick={this.handleClose}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>                                           
                </div>
                <div className='row'>
                    <div className='width'>
                        <div className="card-body">
                            <div className="col-12 input-group title-addTask">TASK TITLE</div>
                            <div className="col-12">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control id="input_taskTitle" type="text" placeholder="Title" onChange={this.handleChangeTitle} />                                
                            </Form.Group>
                            </div>                    
                        </div> 
                        <div className='card-body second'>
                            <div className="form-group">
                                <img src={this.state.imageURL} alt="" className="task-before-image"/>
                                <input type="file" className="form-control-file" id="file" onChange={this.handleChangeImage}/>
                            </div>
                        </div>                                  
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 ml-auto">
                        <div className="card-body">
                            <div className="col-12 input-group title-addTask">TASK DESCRIPTION</div>
                            <div className="col-12">
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" id="input_taskDescription" rows="3" onChange={this.handleChangeDescription}/>
                            </Form.Group>
                            </div>                    
                        </div>                                   
                    </div>                 
                    <div className="col-6 ml-auto">
                        <div className="card-body">
                            <div className="col-12 input-group title-addTask">DUE DATE</div>                        
                            <DayPicker onDayClick={this.handleDayClick} selectedDays={this.state.selectedDay}/>
                            {this.state.selectedDay ? (
                                <p className="col-12">You selected {this.state.selectedDay.toLocaleDateString()}</p>) : (
                                <p className="col-12">Please select a day.</p>
                            )}
                        </div>                                   
                    </div>  
                    <div className="col-6 ml-auto">
                        <div className="card-body">
                            <div className="col-12 input-group title-addTask">REMINDER</div>                        
                            <div className="col-12">
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Would you like a reminder?</Form.Label><br/>
                                    <Form.Group>
                                        <Form.Check type="radio" label="Yes" name="formHorizontalRadios" id="radio_yes" onClick={() => this.setState({reminder: true})} />
                                        <Form.Check type="radio" label="No" name="formHorizontalRadios" id="radio_no" onClick={() => this.setState({reminder: false})}/>
                                    </Form.Group>
                                    <Form.Label>At what time of the day?</Form.Label>
                                    <div className="row col-8 time-container mr-auto">
                                        <Select className="col-5" id="select_hours" options={ hours } onChange={this.handleChangeHours}/>
                                        <p className="col-2">:</p>
                                        <Select className="col-5" id="select_minutes" options={ minutes } onChange={this.handleChangeMinutes}/>
                                    </div>                                    
                                    <Form.Label>Number of days before the due date to be informed:</Form.Label>
                                    <Form.Control className="col-6" id="input_numDays" type="number" placeholder="e.g. 3" onChange={this.handleChangeReminderDate}/>                                
                                </Form.Group>
                            </div>                    
                        </div>                                   
                    </div>   
                </div>
                <div className='row'>
                    <div className="col-6 custom-div">
                        <div className="card-body">
                            <div className="col-8 m-auto">
                                <button id="button_addTask" className="custom-btn" onClick={this.handleSubmit}><b>ADD</b></button>                            
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            </div>
        )
    }

}

export default AddTask;