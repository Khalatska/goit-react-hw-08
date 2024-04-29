import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink to="/" className={activeLink}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={activeLink}>
            Tasks
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
