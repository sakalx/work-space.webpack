import React    from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import Nav       from './stateLess.components/Nav.jsx';
import Home      from './stateLess.components/Home.jsx';
import About     from './stateLess.components/About.jsx';
import LoginForm from './stateLess.components/LoginForm.jsx';
import NotFound  from './stateLess.components/NotFound.jsx'


class GlobLayout extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <Nav/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/loginform' component={LoginForm}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    )
  }
}

ReactDOM.render(<GlobLayout/>, window.document.getElementById('root'));