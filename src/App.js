import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
// eslint-disablenextline
import M from "materialize-css/dist/js/materialize";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import Logs from "./components/logs/Logs";

const App = () => {
  useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Fragment>
        <AppNavbar />
        <div className="container">
          <Logs />
        </div>
      </Fragment>
    </div>
  );
};

export default App;
