import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './stateLess.components/Header.jsx'
import {Users}  from './state.components/Users.jsx'
import {Clock}  from './state.components/Clock.jsx'

  class IndexLayout extends React.Component {
  render() {
    const tip   = <span className="mainColor t_larg">(component from direct: index.page / client / state.components)</span>;
    const tip2 = <span className="mainColor t_larg">(component from direct: index.page / client / stateLess.components</span>;

    const data = [
      {name: 'Anna', likes: 0,},
      {name: 'Lida', likes: 0,},
      {name: 'Diana', likes: 0,},
    ];

    return (
        <div>
          <Header tip={tip2}/>
          <hr/>

          <Users initData={data}>
            {tip}
          </Users>
          <hr/>

          <Clock>
            {tip}
          </Clock>
          <hr/>

        </div>
    );
  }
}


ReactDOM.render(<IndexLayout/>, window.document.getElementById('root'));