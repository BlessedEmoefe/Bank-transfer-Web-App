import { Switch, Route, Router, BrowserRouter } from "react-router-dom";
import React from "react";
import ViewProfile from "./component/ViewProfile";
import ViewTransfer from "./component/ViewTransfer";
import Transfer from "./component/Transfer";
import Balance from "./component/Balance";
import Signin from "./signInAndRegistrationComponent/Signin";
import Signup from "./signInAndRegistrationComponent/Signup";
import AdminSignup from "./signInAndRegistrationComponent/AdminSignup";

const Routers = () => {
  return (
    <BrowserRouter>
      <Switch style={{ fontFamily: "'Roboto',sans-serif" }}>
        <Route path="/balance" exact component={Balance} />
        <Route path="/transfer" component={Transfer} />
        <Route path="/viewprofile" component={ViewProfile} />
        <Route path="/viewtransfer" component={ViewTransfer} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/admin" component={AdminSignup} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routers;
