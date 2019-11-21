import { combineReducers } from 'redux';

import authReducer from './authReducer';
import choreReducer from './reducer';
import childrenReducer from "./childrenReducer";

export default combineReducers({

    choreReducer,
    childrenReducer,
    authReducer,
});