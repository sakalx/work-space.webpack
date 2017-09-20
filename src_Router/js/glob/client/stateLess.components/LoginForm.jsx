import React from 'react';



const LoginForm = () => {
  return (
      <form>
        <div className="group">
          <input type="text"/>
          <span className="highlight"/>
          <span className="bar"/>
          <label>Name</label>
        </div>
        <div className="group">
          <input type="email"/>
          <span className="highlight"/>
          <span className="bar"/>
          <label>Email</label>
        </div>
        <button type="button" className="button buttonBlue">
          Login
          <span className="ripples buttonRipples">
            <span className="ripplesCircle"/>
          </span>
        </button>
      </form>
  );
};

export default LoginForm;