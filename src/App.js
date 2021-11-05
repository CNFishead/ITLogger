import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
// eslint-disablenextline
import M from "materialize-css/dist/js/materialize";
import "./App.css";
import AppNavbar from "./components/layouts/AppNavbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layouts/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
// import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    // init materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div className="App">
        <Fragment>
          <AppNavbar />
          <div className="container">
            <TechListModal />
            <AddTechModal />
            {/* <EditLogModal /> */}
            <AddBtn />
            <AddLogModal />
            <Logs />
          </div>
        </Fragment>
      </div>
    </Provider>
  );
};

export default App;
