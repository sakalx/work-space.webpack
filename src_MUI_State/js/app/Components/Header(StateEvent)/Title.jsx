import React from 'react';
import PropTypes from 'prop-types'

class Title extends React.Component {
  render() {
    console.log(this.props);
    return (
        <h1>{this.props.title}</h1>
    )
  }
}

Title.propTypes ={
  title: PropTypes.string
};

export default Title;