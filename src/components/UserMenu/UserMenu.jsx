import { useSelector, useDispatch } from "react-redux";
import { authLogOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(authLogOut())}>
        Logout
      </button>
    </div>
  );
};
