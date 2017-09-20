import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from "redux-logger";
import thunk from 'redux-thunk'; //for async task

import math from './reducers/mathReducer';
import user from './reducers/userReducer';


export default createStore(combineReducers({
      math,
      user,
    }),
    {},
    applyMiddleware(logger, thunk)
);