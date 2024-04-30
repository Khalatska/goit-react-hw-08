import { NavLink, Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import css from "./HomePage.module.css";
import clsx from "clsx";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div className={css.text}>
      <h1>Welcome to your PhoneBook app 👋 </h1>
      {isLoggedIn && <p>Nice to see you! 😍</p>}
      {!isLoggedIn && (
        <div>
          <p>
            Register to be able to use all the advantages of the application!{" "}
            <NavLink to="/register" className={activeLink}>
              Register
            </NavLink>
          </p>
          <p>
            Already registered?{" "}
            <NavLink to="/login" className={activeLink}>
              Log in
            </NavLink>
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
