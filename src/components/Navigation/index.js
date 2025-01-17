import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import { AuthUserContext } from "../Session";
import { RiShipLine } from "react-icons/ri";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ authUser }) => (
  <ul class="navigationBar navbar-nav navbar navbar-expand-lg navbar-light bg-light">
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.LANDING}>
        <RiShipLine class="navbar-brand" />
      </Link>
    </li>
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.HOME}>
        Home
      </Link>
    </li>
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.ACCOUNT}>
        Account
      </Link>
    </li>

    {!!authUser.roles[ROLES.ADMIN] && (
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}
    
    {!!authUser.roles[ROLES.BOATOWNER] && (
      <li>
        <Link to={ROUTES.BOATOWNER}>Boat Owner</Link>
      </li>
    )}

    <li class="nav-item active">
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul class="navigationBar navbar-nav navbar navbar-expand-lg navbar-light bg-light">
    <li class="nav-item active">
      <Link class="nav-link" to={ROUTES.LANDING}>
        Home
      </Link>
    </li>
    <li>
      <Link class="nav-link" to={ROUTES.SIGN_IN}>
        Sign In
      </Link>
    </li>
  </ul>
);
export default Navigation;
