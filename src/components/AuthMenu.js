import routes from "../routes";
import { NavLink } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import s from "./AuthMenu.module.css";

const AuthMenu = ({ userMail, onLogout }) => (
  <Toolbar className={s.menu}>
    <NavLink
      to={routes.register}
      className="linkHome"
      activeClassName="active-linkHome"
    >
      Register
    </NavLink>
    <NavLink
      to={routes.login}
      className="linkHome"
      activeClassName="active-linkHome"
    >
      Login
    </NavLink>
  </Toolbar>
);
export default AuthMenu;
