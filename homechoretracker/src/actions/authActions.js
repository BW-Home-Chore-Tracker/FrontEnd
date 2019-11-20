import axiosWithAuth from '../components/axiosWithAuth';
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

export const doSignIn = users => dispatch => {
    axiosWithAuth().post('/users/login', users)
        .then(response => {
            localStorage.setItem('token', response.data.payload);
            this.props.history.push('/protected');
        })

};

export const doCreateAccount = user => dispatch => {
    axiosWithAuth().post('/users/register', user)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            this.props.history.push('protected');
        })
        .catch(err => console.log(err));
};


export const doSignOut = () => dispatch => {
    dispatch({ type: LOGOUT_START });
    try {
        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL });
    }
};

export const doWelcomeBack = token => {
    return { type: WELCOME_BACK, payload: token };
};