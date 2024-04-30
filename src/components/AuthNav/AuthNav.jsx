import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export const AuthNav = () => {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.auth}>
      <NavLink to="/register" className={activeLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={activeLink}>
        Log In
      </NavLink>
    </div>
  );
};
