import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './HabitPage';

class HabitPage extends React.Component {
    render() {
        return(
        <div className='habit-contain'>
            <Header/>
            <Menu/>
        </div>)
    }
}

export default HabitPage;