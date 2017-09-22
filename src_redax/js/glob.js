//Glob Style
import 'root/style/main.scss';

//Inline SVG + cache local storage
//import './helpers/svg.cache/cacheSVG.js';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from './helpers/muiTheme/colors.js';

//Glob App
//import App from './app/App.jsx';

/* injectTapEventPlugin();
 ReactDOM.render(
 <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
 <App/>
 </MuiThemeProvider>,
 document.getElementById('root'));*/


//Redux
// import {addNumber, substractNumber} from './app/actions/mathActions';
// import {setName, setAge}from './app/actions/userActions';
// import store from './app/store';
//
// store.dispatch(addNumber(10));
// store.dispatch(addNumber(100));
// store.dispatch(substractNumber(50));
//
// store.dispatch(setName('Felix'));
// store.dispatch(setAge(18));

import thunk from 'redux-thunk'; //for async task
import axios from 'axios';       //for ajax reg
// combined with redux-thunk to chain async actions
import promise from 'redux-promise-middleware'
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': {
      state = {
        ...state,
        name: action.payload,
      };
      break;
    }
    case 'CHANGE_AGE': {
      state = {
        ...state,
        age: action.payload,
      };
      break;
    }
  }
  return state;
};

//default state for reduserFetch
const initialState ={
  fetching: false,
  fetched: false,
  users: [],
  error: null,
};
const reduserFetch = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PENDING': {
      return {
          ...state,
        fetching: true
      };
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching:false,
        fetched: true,
        users: action.payload,
      };
    }
    case 'FETCH_USER_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
  }
  return state;
};


// В кучку all Reducers
const reducers = combineReducers({
  userReducer,
  reduserFetch,
});

//Промежуточное сосотояние
//используем пакет redux-logger для консоля
//thunk - для асинхроной загрузки
const middleware = applyMiddleware(promise(), thunk, logger);

//Создаем Хранилище
const store = createStore(
    reducers,
    middleware,
);

//Отправка события в Хранилище
store.dispatch({
  type: 'CHANGE_NAME',
  payload: 'Felix',
});

store.dispatch({
  type: 'CHANGE_AGE',
  payload: 17,
});

//AJAX with axios and redux-promise-middleware
store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get('https://jsonplaceholder.typicode.com/users/')
});


