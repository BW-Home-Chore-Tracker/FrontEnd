import axios from 'axios';

const axiosWithAuth = () => {

    return axios.create({
        headers: {
            Authorization: localStorage.getItem('token')
        },
        baseURL: "https://chore-tracker-bw.herokuapp.com/"
    });
};
export default axiosWithAuth;