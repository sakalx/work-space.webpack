import React      from 'react';
import ReactDom   from 'react-dom';
import {Provider} from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import muiTheme             from '../helpers/muiTheme/colors.js';

import store  from './store';
import Layout from './components/Layout.jsx';

injectTapEventPlugin();
ReactDom.render(
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      <Provider store={store}>
        <Layout/>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'));

