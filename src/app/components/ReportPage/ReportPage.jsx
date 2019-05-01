import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './ReportPage';

class ReportPage extends React.Component {
    render() {
        return(
        <div className='habit-contain'>
            <Header/>
            <Menu/>
        </div>)
    }
}

export default ReportPage;