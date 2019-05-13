import axios from 'axios';

export function accountLogin(email, password) {
    return (axios.post(`${process.env.REACT_APP_ACCOUNT_API_URL}/login`,
    {
        email: email,
        password: password
    }
    ));
}

export function accountRegister(email, password, name) {
    return (axios.post(`${process.env.REACT_APP_ACCOUNT_API_URL}`,
    {
        email: email,
        password: password,
        name: name
    }
    ));
}