import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Select from 'react-select';
import {Form} from 'react-bootstrap';
import './AdminTaskPage.scss';
import GoodHabit from '../ReportPage/GoodHabit/GoodHabit';
import Task from '../TaskPage/Task/Task';

class ReportPage extends React.Component {
    render() {
        return(
        <div className='habit-contain'>
            <Header/>
            <Menu/>
            <div className="container-fluid">                
                <div className="row col-12">
                    <div className="col-6">
                        <div className="col-12 admin-text-titles">COMPLETED TASKS</div>
                        <div className="col-12 admin-text-numbers">100</div>
                        <div className="col-11 ml-auto admin-text-subtitles">Before due date</div>
                        <div className="col-12 admin-text-numbers">100</div>
                        <div className="col-11 ml-auto admin-text-subtitles">After due date</div>
                        <div className="col-12 admin-text-numbers">100</div>                        
                    </div>
                    <div className="col-6">
                        <div className="col-12 admin-text-titles">DELAYED TASKS</div>
                        <div className="col-12 admin-text-numbers">100</div>
                        <div>                    
                            <div className="col-12">
                                <div className="col-12 admin-text-titles">AVAILABLE TASKS</div>
                                <div className="col-12 admin-text-numbers">100</div>
                                <div className="col-11 ml-auto admin-text-subtitles">To be done today</div>
                                <div className="col-12 admin-text-numbers">100</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>)
    }
}

export default ReportPage;