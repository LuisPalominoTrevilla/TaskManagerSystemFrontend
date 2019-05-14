import axios from 'axios';

export function addTask(task) { return(axios({
    method: 'post',
    url: `${process.env.REACT_APP_TASK_API_URL}`,
    data: task,
    headers: {
    'content-type': `multipart/form-data; boundary=${task._boundary}`,
    },
    }))
}

export function getUserTask() { 
    return(axios({
    method: 'get',
    url: `${process.env.REACT_APP_TASK_API_URL}?userId=${window.localStorage.getItem('userId')}`,
    }))
}

export function updateTask(task, taskData) { 
    return(axios({
    method: 'update',
    data: taskData,
    url: `${process.env.REACT_APP_TASK_API_URL}/${task}`,
    }))
}

export function deleteTask(task) { 
    return(axios({
    method: 'delete',
    url: `${process.env.REACT_APP_TASK_API_URL}/${task}`,
    }))
}