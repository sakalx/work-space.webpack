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
import App from './app/App.jsx';


injectTapEventPlugin();
ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <App/>
    </MuiThemeProvider>,
    document.getElementById('root'));