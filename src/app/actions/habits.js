import axios from 'axios';

export function getUserHabits() { 
    return(axios({
    method: 'get',
    url: `${process.env.REACT_APP_HABIT_API_URL}?userId=${window.localStorage.getItem('userId')}`,
    }))
}
