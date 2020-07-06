import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import "../../App.css";
import Vessels from "../Pages/Vessels";
import Error from "../Error";
import SingleVessel from "../SingleVessel/SingleVessel";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />

      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          exact
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route exact path={ROUTES.BOATOWNER} component={AdminPage} />
        <Route exact path={ROUTES.VESSELS} component={Vessels} />
        <Route exact path={ROUTES.SINGLEVESSEL} component={SingleVessel}/>
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default withAuthentication(App);
