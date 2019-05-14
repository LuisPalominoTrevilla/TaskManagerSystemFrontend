import React from 'react';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import './HabitPage.scss';
import GoodHabit from './GoodHabit/GoodHabit';
import BadHabit from './BadHabit/BadHabit';
import BothHabit from './BothHabit/BothHabit';
import AddHabit from './AddHabit/AddHabit';
import { getUserHabits } from '../../actions/habits';

class HabitPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          habits: [],
        };
        this.handleType = this.handleType.bind(this);
      }
      componentDidMount(){
        getUserHabits().then(res => {this.setState({habits: res.data})})
      }
      handleType(type){
          if(type === 1){
              return 'Good Habit';
          }
          if(type === 0){
              return 'Both Good and Bad Habit';
          }
          if(type === -1){
              return 'Bad Habit';
          }
      }
      handleDificulty(difficulty){
        if(difficulty === 2){
            return 'Difficulty: Easy';
        }
        if(difficulty === 3){
            return 'Difficulty: Medium';
        }
        if(difficulty === 5){
            return 'Difficulty: Hard';
        }

      }
      handleBad(type){
        if(type === -1){
            return true;
        }
        return false;
      }
      handleGood(type){
        if(type === 1){
            return true;
        }
        return false;
      }
      handleBoth(type){
        if(type === 0){
            return true;
        }
        return false;
      }

      handleLanguage(langValue) {
        this.setState({habits: langValue});
      }
      
    render() {
        return(
        <div className='habit-contain'>
            <Header/>
            <Menu/>
            <div className='habits'>
                <div className='habit-button-alignment'>
                <AddHabit
                changeHabit ={this.handleLanguage.bind(this)}/>
                </div>
                {
              this.state.habits.map(habit => (
              <div className='w-100'>
                    <BadHabit
                    bad={this.handleBad(habit.type)}
                    title={habit.title}
                    score={habit.score}
                    imageUrl={habit.imageUrl}
                    dificulty={this.handleDificulty(habit.difficulty)}
                    type={this.handleType(habit.type)}
                    />
                    <GoodHabit
                    good={this.handleGood(habit.type)}
                    title={habit.title}
                    score={habit.score}
                    imageUrl={habit.imageUrl}
                    dificulty={this.handleDificulty(habit.difficulty)}
                    type={this.handleType(habit.type)}
                    />
                    <BothHabit
                    both={this.handleBoth(habit.type)}
                    title={habit.title}
                    score={habit.score}
                    imageUrl={habit.imageUrl}
                    dificulty={this.handleDificulty(habit.difficulty)}
                    type={this.handleType(habit.type)}
                    />
              </div>
              ))}
            </div>
        </div>)
    }
}

export default HabitPage;