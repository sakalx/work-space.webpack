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
import {addNumber, substractNumber} from './app/actions/mathActions';
import {setName, setAge}from './app/actions/userActions';
import store from './app/store';

store.dispatch(addNumber(10));
store.dispatch(addNumber(100));
store.dispatch(substractNumber(50));

store.dispatch(setName('Felix'));
store.dispatch(setAge(18));

