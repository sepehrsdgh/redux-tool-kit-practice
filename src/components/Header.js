import classes from "./Header.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
const Header = () => {
  const isAuthenciated = useSelector((state) => state.auth.isAuthenciated);
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(authActions.logOut());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthenciated && (
            <li>
              <a href="/">My Products</a>
            </li>
          )}
          {isAuthenciated && (
            <li>
              <a href="/">My Sales</a>
            </li>
          )}
          <li>
            <button onClick={clickHandler}>
              {isAuthenciated ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
