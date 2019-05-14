import axios from 'axios';

export function getUserHabits() { 
    return(axios({
    method: 'get',
    url: `${process.env.REACT_APP_HABIT_API_URL}?userId=${window.localStorage.getItem('userId')}`,
    }))
}

export function addHabit(habit) { return(axios({
    method: 'post',
    url: `${process.env.REACT_APP_HABIT_API_URL}`,
    data: habit,
    headers: {
    'content-type': `multipart/form-data; boundary=${habit._boundary}`,
    },
    }))
}
