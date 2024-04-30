import { useSelector, useDispatch } from "react-redux";
import { authLogOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.user}>
      <p>Welcome, {user.name} 👋</p>
      <button
        type="button"
        onClick={() => dispatch(authLogOut())}
        className={css.btn}
      >
        Log out
      </button>
    </div>
  );
};
