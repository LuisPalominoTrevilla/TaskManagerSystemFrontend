import axios from 'axios';

export function accountLogin(email01, password01) {
    return (axios.post('http://localhost:3000/api/v1/accounts/login',
    {
        email: email01,
        password: password01
    }
    ));
}