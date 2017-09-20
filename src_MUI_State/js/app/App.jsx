import React from 'react';

import Header from './Layouts/Header.jsx'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome',
    }
  }

  changeTitle(title) {
    this.setState({title})
  }

  render() {
    return (
        <div>
        <Header title={this.state.title} changeTitle={(title) => this.changeTitle(title)}/>
        </div>
    )
  }
}

export default App;