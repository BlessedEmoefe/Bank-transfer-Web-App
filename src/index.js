import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Header from "./component/Header";
import "./fontawesome-free-5.10.0-web/css/all.css";
import Body from "./component/Body";
import FullPage from "./pages/FullPage";
import Signin from "./signInAndRegistrationComponent/Signin";
import Routers from "./Routes";

ReactDOM.render(<Routers />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
