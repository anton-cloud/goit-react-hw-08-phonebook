import routes from "../routes";

import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import s from "./ExtraMenu.module.css";

const ExtraMenu = () => (
  <Toolbar className={s.menu}>
    <NavLink
      exact
      to={routes.home}
      className="linkExtra"
      activeClassName="active-linkExtra"
    >
      Home
    </NavLink>
    <NavLink
      to={routes.contacts}
      className="linkExtra"
      activeClassName="active-linkExtra"
    >
      Contacts
    </NavLink>
  </Toolbar>
);

export default ExtraMenu;
