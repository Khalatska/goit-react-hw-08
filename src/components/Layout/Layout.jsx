import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className={activeLink}>
            Home
          </NavLink>
          <NavLink to="/register" className={activeLink}>
            Register
          </NavLink>
          <NavLink to="/login" className={activeLink}>
            Login
          </NavLink>
          <NavLink to="/contacts" className={activeLink}>
            Contacts
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
