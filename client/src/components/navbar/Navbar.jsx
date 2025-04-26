import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import { AuthoContext } from "../../stores/auth";
import { useContext } from "react";
const Navbar = () => {
  const { isLoggedIn } = useContext(AuthoContext);
  // console.log("isloggedin data in navbar",isLoggedIn);

  return (
    <>
      <div className={style.container}>
        <div className="logo-brand">
          <NavLink className={style.service}>Service Portal</NavLink>
        </div>
        <div className={style.navSide}>
          <li>
            <NavLink to="/" className={style.link}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={style.link}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={style.link}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/service" className={style.link}>Service</NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink to="/logout" className={style.link}>Logout</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/login" className={style.link}>Login</NavLink>
              </li>
              <li>
                <NavLink to="/resister" className={style.link}>Register</NavLink>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
