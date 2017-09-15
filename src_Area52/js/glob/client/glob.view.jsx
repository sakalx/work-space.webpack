import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


//import {BrowserRouter, Route} from 'react-router-dom'


import {Menu} from './state.components/Menu.jsx'



ReactDOM.render(
    <BrowserRouter>
     <Switch>
       <Route exact  path='/' component={Menu} />
       <Route exact path='/menu' component={Menu} />
       <Route exact path='/home' render={() => <h1>Hello</h1>} />
     </Switch>
    </BrowserRouter>,
    document.getElementById('menu')
  );


