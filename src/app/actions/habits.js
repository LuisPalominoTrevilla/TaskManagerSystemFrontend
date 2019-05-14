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
    'content-type': `application/x-www-form-urlencoded`,
    },
    }))
}

export function completeHabit(id, score) { return(axios({
    method: 'post',
    url: `${process.env.REACT_APP_HABIT_API_URL}/${id}/complete`,
    data: score,
    headers: {
        'content-type': `multipart/form-data; boundary=${score._boundary}`,
    },
    }))
}

export function deleteHabit(habit) { 
    return(axios({
    method: 'delete',
    url: `${process.env.REACT_APP_HABIT_API_URL}/${habit}`,
    }))
}
