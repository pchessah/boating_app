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
  <ul class="navbar navbar-dark bg-dark">
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
      <li class="nav-item active">
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    )}

    <li class="nav-item active">
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul class="navbar navbar-dark bg-dark">
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
