import React from 'react';
import PropTypes from 'prop-types';
import 'root/img/awesome_webpac.png'

export const Header = (props) => {
  return (
      <header className="fc_c_cc" id="header">
        <img src="img/awesome_webpac.png" width={250} height={100}/>
        {props.tip}
      </header>
  );
};
//Prop Types
Header.propTypes = {
  children: PropTypes.object,
};