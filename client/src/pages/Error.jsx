import React from "react";
import style from "./error.module.css";
// import style from "./home.module.css";

import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>404</h1>
        <h3>Sorry! Page not found</h3>
        <p>
          Oops! It seems like the page you are trying to access doesnot exist.If
          yu believe there's an issue, feel free to report it and we'll look
          into it.
        </p>
        <div className={style.btnn}>
          <NavLink to="/">
            <button>return home</button>
          </NavLink>
          <NavLink to="/contact">
            <button>report problem</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
