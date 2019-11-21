import React from 'react';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../actions/authActions";

const initialState = {

    username: "",
    password: "",
    isAuth: false,
    isLoading: false,
    errors: null,
    isSuccess: false,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_START:
            return { ...state, isLoading: true, errors: null, isAuth: false, user: action.payload, isSuccess: false };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                errors: null,
                user: action.payload,
                isSuccess: false
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                errors: action.payload
            };
        case CREATE_USER_START:
            return {
                ...state,
                isLoading: true,
                errors: null,
                isAuth: false,
                user: "",
                isSuccess: false
            };
        case CREATE_USER_SUCCESS:
            return { ...state, isLoading: false, errors: null, isAuth: false, user: action.payload, isSuccess: true };
        case CREATE_USER_FAIL:
            return { ...state, isLoading: false, errors: action.payload, isAuth: false, user: action.payload, isSuccess: false };
        case LOGOUT_START:
            return { ...state, isLoading: true, errors: null, isSuccess: false };
        case LOGOUT_SUCCESS:
            return { ...state, user: {}, isAuth: false, errors: null, isLoading: false, isSuccess: false };
        case LOGOUT_FAIL:
            return { ...state, isLoading: false, errors: 'An unknown error has occurred', isSuccess: false };

        default:
            return state;
    }
}
        //         case WELCOME_BACK:
        //             const wbUser = payload;
        //             return { ...state, isLoading: false, errors: null, isAuth: true, user: wbUser, isSuccess: false };
        //         default:
        //             return state;
        //     }

