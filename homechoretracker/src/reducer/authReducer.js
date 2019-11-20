import React from 'react';
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAIL, LOGOUT_START, LOGOUT_SUCCESS, LOGOUT_FAIL } from "../actions/authActions";

const initialState = {
    user: {},
    isAuth: false,
    isLoading: false,
    errors: null,
    isSuccess: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.LOGIN_START:
            return { ...state, isLoading: true, errors: null, isAuth: false, user: {}, isSuccess: false };
        case types.LOGIN_SUCCESS:
            const user = payload.token;
            return { ...state, isLoading: false, isAuth: true, errors: null, user, isSuccess: false };
        case types.LOGIN_FAIL:
            return { ...state, isLoading: false, isAuth: false, errors: payload.message, user: {}, isSuccess: false };
        case types.CREATE_USER_START:
            return { ...state, isLoading: true, errors: null, isAuth: false, user: action.payload, isSuccess: false };
        case types.CREATE_USER_SUCCESS:
            return { ...state, isLoading: false, errors: null, isAuth: false, user: action.payload, isSuccess: true };
        case types.CREATE_USER_FAIL:
            return { ...state, isLoading: false, errors: payload, isAuth: false, user: action.payload, isSuccess: false };
        case types.LOGOUT_START:
            return { ...state, isLoading: true, errors: null, isSuccess: false };
        case types.LOGOUT_SUCCESS:
            return { ...state, user: {}, isAuth: false, errors: null, isLoading: false, isSuccess: false };
        case types.LOGOUT_FAIL:
            return { ...state, isLoading: false, errors: 'An unknown error has occurred', isSuccess: false };
        case types.WELCOME_BACK:
            const wbUser = payload;
            return { ...state, isLoading: false, errors: null, isAuth: true, user: wbUser, isSuccess: false };
        default:
            return state;
    }
};