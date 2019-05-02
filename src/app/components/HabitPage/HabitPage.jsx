import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './HabitPage.scss';
import GoodHabit from './GoodHabit/GoodHabit';
import BadHabit from './BadHabit/BadHabit';
import BothHabit from './BothHabit/BothHabit';

class HabitPage extends React.Component {
    render() {
        return(
        <div className='habit-contain'>
            <Header/>
            <Menu/>
            <div className='habits'>
                <GoodHabit/>
                <BadHabit/>
                <BothHabit/>
            </div>
        </div>)
    }
}

export default HabitPage;