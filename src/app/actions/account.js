import axios from 'axios';

export function accountLogin() {
    axios.get('').then(
        (res) => {
            console.log(res.data);
        }
    )
}