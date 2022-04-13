import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Register = (props) => {
  return (
    <section className="container m-10">
      <h1 className="text-teal-600 font-sans text-4xl font-semibold">
        Register account
      </h1>
      <p className="text-gray-400">
        <FontAwesomeIcon icon={faUser} /> Create your new account bro...
      </p>
      <div className="container mt-4">
        <form className="form-group mt-10">
          <div className="mt-3">
            <p>Name</p>
            <input
              className="border border-teal-400 p-3 mt-3"
              placeholder="Enter your fullname bro..."
              type="text"
              name="name"
            />
          </div>
          <div className="mt-3">
            <p>Email</p>
            <input
              className="border border-teal-400 p-3 mt-3"
              placeholder="Enter valid email"
              type="email"
              name="email"
            />
          </div>
          <div className="mt-3">
            <p>Password</p>
            <input
              className="border border-teal-400 p-3 mt-3"
              placeholder="Minimal 6 character..."
              type="passsword"
              name="password"
            />
          </div>
          <div className="mt-3">
            <p>Re-Type Password</p>
            <input
              className="border border-teal-400 p-3 mt-3"
              placeholder="Re-type your password before..."
              type="passsword"
              name="password2"
            />
          </div>
          <input
            type="submit"
            value="Login"
            className="border mt-5 p-3 w-60 bg-teal-600 text-white"
          />
        </form>
      </div>
    </section>
  );
};

Register.propTypes = {};

export default Register;
