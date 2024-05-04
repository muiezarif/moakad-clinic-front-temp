import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import Login from "components/login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer
        position="bottom-left"
        theme="dark"
        style={{ fontSize: 20 }}
      />
        <Switch>
          <Route path="/cliniclogin" render={(props) => <Login {...props} />} />
          <Route path="/clinic" render={(props) => <AdminLayout {...props} />} />
          <Redirect to="/cliniclogin" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
