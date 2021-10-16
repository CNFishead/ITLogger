import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
// eslint-disablenextline
import M from "materialize-css/dist/js/materialize";
import "./App.css";

const App = () => {
  useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });
  return <div className="App"></div>;
};

export default App;
