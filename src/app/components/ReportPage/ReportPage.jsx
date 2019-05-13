import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Select from 'react-select';
import {Form} from 'react-bootstrap';
import './ReportPage.scss';
import GoodHabit from '../ReportPage/GoodHabit/GoodHabit';
import Task from '../TaskPage/Task/Task';


const filter = [
    { label: "Week", value: 1 },
    { label: "Month", value: 2 },
    { label: "Year", value: 3 }
  ];

class ReportPage extends React.Component {
    render() {
        return(
        <div className='habit-contain'>
            <Header/>
            <Menu/>
            <div className="container-fluid">
                <div className="row col-6">
                    <div className="col-6">
                        <Form.Label className="text-filter">Filter by: </Form.Label>
                        <Select id="select_habitDifficulty" options={ filter } />
                    </div>                  
                </div>
                <div className="row col-12">
                    <div className="col-6">
                        <div className="col-12 text-titles">TASKS FOR TODAY</div>
                        <Task />
                        <Task />
                    </div>
                    <div className="col-6">
                        <div className="col-12 text-titles">DELAYED TASKS</div>
                        <Task />
                    </div>
                </div>
                <div className="row col-12">
                    <div className="col-6">
                        <div className="col-12 text-titles">GOOD HABITS</div>
                        <GoodHabit />
                        <GoodHabit />
                    </div>
                    <div className="col-6">
                        <div className="col-12 text-titles">BAD HABITS</div>
                        <GoodHabit />
                    </div>
                </div>
            </div>        
        </div>)
    }
}

export default ReportPage;