import React, { useEffect } from "react";
import { useState } from "react";
import { AuthoContext } from "../stores/auth";
import { useContext } from "react";
import style from "./admin-users.module.css";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useContext(AuthoContext);
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users/", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
      // console.log("data is", data);
    } catch (eror) {
      console.log(eror);
    }
  };

  const deletUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data=await response.json()

      if(response.ok){
        toast.success(data.message,{
                  position: "top-right",
                  autoClose: 3000, // Disappears after 3 seconds
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "colored"
              })
              getAllUsersData();

      }
      else{
        toast.error(data.message,{
          position: "top-right",
          autoClose: 3000, // Disappears after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
      })
      }
      
    } catch (eror) {
      console.log(eror);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);
  return (
    <>
      <div className={style.container}>
        <h1> Admin Users Data</h1>
        <div className={style.tbox}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {users.map((curUser, index) => (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>
                    <Link className={style.btnEdit} to={`/admin/users/${curUser._id}/edit`}>  Edit </Link>
                    </td>
                    <td>
                      <button
                        className={style.btnDelet}
                        onClick={() => deletUser(curUser._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminUsers;
