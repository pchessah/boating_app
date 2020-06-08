import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import { RiShipLine } from "react-icons/ri";

const Navigation = () => (
  <div >
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <ul  class="navbar navbar-dark bg-dark">
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.LANDING}><RiShipLine class="navbar-brand"/></Link>
    </li>
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.HOME}>Home</Link>
    </li>
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li class="nav-item active">
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul class="navbar navbar-dark bg-dark">
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
      <Link class="nav-link" to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
export default Navigation;
