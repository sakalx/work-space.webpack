import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Components/Header(StateEvent)/Title.jsx';

class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title)
  }
  render() {
    console.log(this.props);
    return (
        <div>
          <Title title={this.props.title}/>
          <input value={this.props.title} onChange={this.handleChange.bind(this)}/>
        </div>
    );
  }
}
//Prop Types
Header.propTypes = {
  title: PropTypes.string,
  changeTitle: PropTypes.func,
  //children: PropTypes.object,
};

export default Header;
