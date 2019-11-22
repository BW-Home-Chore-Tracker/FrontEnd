import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import combineReducer from "../src/reducer/index";
import logger from 'redux-logger';
const store = createStore(combineReducer, (applyMiddleware(thunk, logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


