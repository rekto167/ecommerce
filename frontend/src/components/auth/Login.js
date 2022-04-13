import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <section className="container">
      <h1>Sign In</h1>
      <p>
        <i className="fas fa-user"></i>Sign into your account
      </p>
      <form className="form">
        <div className="form-group">
          <p>Email</p>
          <input
            className="border-2 border-lime-300"
            type="email"
            name="email"
            placeholer="Masukkan email yg valid"
          />
        </div>
        <div className="form-group">
          <p>Password</p>
          <input
            className="border-2 border-lime-300"
            type="password"
            name="password"
            placeholer="Masukkan password anda"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </section>
  );
};

Login.propTypes = {};

export default Login;
