import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import style from "./adminLayout.module.css";
import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { useContext } from "react";
import { AuthoContext } from "../../stores/auth";
const AdminLayout = () => {
  const { user, userLoading } = useContext(AuthoContext);

  const Admin = user;
  // console.log("this is user  data  in admin:", Admin);
  // console.log("this is user userloading:", userLoading);
  if (userLoading) return <h3>Loading...</h3>;
  if (!user.isAdmin) return <h3>Your are not an Admin</h3>;

  return (
    <>
      <header className={style.body}>
        <div className="container">
          <nav>
            <ul>
              <NavLink to="/admin/users" className={style.nav}>
                <li
                  style={{
                    display: "flex",
                    gap: "2px",
                    justifyContent: "center",
                  }}
                >
                  <FaUser className={style.icon} />
                  users
                </li>
              </NavLink>

              <NavLink to="/admin/contact" className={style.nav}>
                <li
                  style={{
                    display: "flex",
                    gap: "2px",
                    justifyContent: "center",
                  }}
                >
                  <MdContacts className={style.icon} />
                  contacts
                </li>
              </NavLink>

              <NavLink to="/service" className={style.nav}>
                <li
                  style={{
                    display: "flex",
                    gap: "2px",
                    justifyContent: "center",
                  }}
                >
                  <MdHomeRepairService className={style.icon} />
                  service
                </li>
              </NavLink>

              <NavLink to="/" className={style.nav}>
                <li
                  style={{
                    display: "flex",
                    gap: "2px",
                    justifyContent: "center",
                  }}
                >
                  <IoMdHome className={style.icon} />
                  home
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
        <div className={style.nest}>
          <Outlet />
        </div>
      </header>
    </>
  );
};

export default AdminLayout;
