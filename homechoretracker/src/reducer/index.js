import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './authReducer';
import choreReducer from './reducer';
import parentReducer from "./parentReducer";
import childrenReducer from "childrenReducer";

export default combineReducers({
    auth,
    chore,
    parent,
    children
});