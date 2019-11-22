import axiosWithAuth from '../components/axiosWithAuth';
import axios from 'axios';


export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const CREATE_USER_START = "CREATE_USER_START";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAIL = "CREATE_USER_FAIL";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";
export const WELCOME_BACK = "WELCOME_BACK";

export const doSignIn = (users, props) => dispatch => {
    dispatch({ type: LOGIN_START })
    axios.post('https://chore-tracker-bw.herokuapp.com/users/login', users)
        .then(response => {
            dispatch({ type: LOGIN_SUCCESS, payload: response.data.token })
            const token = response.data.token;
            localStorage.setItem('token', token)
            props.history.push('/children')
                .catch(error => {
                    dispatch({ type: LOGIN_FAIL, payload: error })
                })
        })
}

export const doCreateAccount = user => dispatch => {
    dispatch({ type: CREATE_USER_START })
    axios.post('https://chore-tracker-bw.herokuapp.com/users/register', user)
        .then(res =>
            dispatch({ type: CREATE_USER_SUCCESS, payload: res.data })
        )
        .catch(err => {
            dispatch({ type: CREATE_USER_FAIL, payload: err });
        })

}
export const doSignOut = () => dispatch => {
    dispatch({ type: LOGOUT_START });
    localStorage.clear();
    this.props.history.replace('/');
}
export const doWelcomeBack = token => {
    return { type: WELCOME_BACK, payload: token };
};