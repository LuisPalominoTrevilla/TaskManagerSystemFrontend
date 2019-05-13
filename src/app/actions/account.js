import axios from 'axios';

export function accountLogin() {
    axios.get('localhost:3000/api/v1/accounts').then(
        (res) => {
            console.log(res.data);
        }
    )
}