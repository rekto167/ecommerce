import React, { Fragment } from "react";
import "./App.css";
import Register from "../src/components/auth/Register";
import Navbar from "./components/layouts/Navbar";
// import Login from "../src/components/auth/Login";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Register />
    </Fragment>
  );
}

export default App;
