import React from 'react';
import PropTypes from 'prop-types';

export  class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: 'Current Date',
      className: 'attentionColor'
    };
  }

  onGetDate() {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      timezone: 'UTC',
    };
    this.setState({
      date: new Date().toLocaleString('ru',options),
      className: 'bodyColor'
    })
  }

  render() {
    return (
        <section>
          <header className="fr_c_cc">
            <h3 className={this.state.className}>{this.state.date}</h3>
            <svg  width="35" height="35">
              <use href="#svg_ready"/>
            </svg>
          </header>
          {this.props.children}
          <p className="fr_c_cc">
            <button onClick={() => this.onGetDate()} className="a_pointer">Date</button>
          </p>
        </section>
    );
  }
}
//Prop Types
Clock.propTypes = {
  children: PropTypes.object,
};
