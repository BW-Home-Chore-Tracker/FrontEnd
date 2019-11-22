import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: "https://cors-anywhere.herokuapp.com/https://chore-tracker-bw.herokuapp.com/",
        headers: {
            Authorization: token
        }

    });
};
export default axiosWithAuth;