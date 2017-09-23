import React from 'react';
import PropTypes from 'prop-types';

export class Users extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props.initData,
    };
  }

  onLikeAdd(i) {
    const addLike = {
      likes: this.state.data[i].likes + 1,
    };
    this.setState({
      data: this.state.data.map(e => (this.state.data[i].name === e.name)
          ? Object.assign(e, addLike)
          : e),
    });
  }

  render() {
    return (
        <header>
          <h2 className="attentionColor fr_c_cc">Users:</h2>
          {this.props.children}
          <h4>Select Users</h4>
          <nav>
            {<ol>
              {this.state.data.map((data, index) =>
                  <li key={index}
                      onClick={() => this.onLikeAdd(index)}
                      className="a_pointer">
                    <p>{data.name}<br/>
                      Likes:{data.likes}
                      <svg width="25" height="25">
                        <use href="#svg_love"/>
                      </svg>
                    </p>
                  </li>,
              )}
            </ol>}
          </nav>
        </header>
    );
  }
}
//Prop Types
Users.propTypes = {
  initData: PropTypes.array,
  children: PropTypes.object,
};