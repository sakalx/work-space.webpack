import React    from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch  } from 'react-router-dom'; //BrowserRouter

import Nav       from './stateLess.components/Nav.jsx';
import Home      from './stateLess.components/Home.jsx';
import About     from './stateLess.components/About.jsx';
import LoginForm from './stateLess.components/LoginForm.jsx';
import NotFound  from './stateLess.components/NotFound.jsx'

class GlobLayout extends React.Component {
  render() {
    return (
          <div>
            <Nav/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/loginform' component={LoginForm}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
    )
  }
}

ReactDOM.render(
    <HashRouter>
      <GlobLayout/>
    </HashRouter>
    , window.document.getElementById('root'));