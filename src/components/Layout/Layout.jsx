// import clsx from "clsx";
// import { NavLink } from "react-router-dom";
// import css from "./Layout.module.css";
// import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// import { useSelector } from "react-redux";

// const Layout = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const userData = useSelector(selectUser);
//   const activeLink = ({ isActive }) => {
//     return clsx(css.link, isActive && css.active);
//   };
//   return (
//     <div>
//       <header>
//         <nav>
//           <NavLink to="/" className={activeLink}>
//             Home
//           </NavLink>
//           {isLoggedIn ? (
//             <>
//               <NavLink to="/contacts" className={activeLink}>
//                 Contacts
//               </NavLink>
//               <div>
//                 <span>Welcome, {userData.name}</span>
//                 <button type="button">Logout</button>
//               </div>
//             </>
//           ) : (
//             <>
//               <NavLink to="/register" className={activeLink}>
//                 Register
//               </NavLink>
//               <NavLink to="/login" className={activeLink}>
//                 Login
//               </NavLink>
//             </>
//           )}
//         </nav>
//       </header>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default Layout;
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;
