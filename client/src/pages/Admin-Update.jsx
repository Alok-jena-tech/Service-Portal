import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthoContext } from "../stores/auth";
import { toast } from "react-toastify";
import style from "./admin-update.module.css";
const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const param = useParams();
  const { authorizationToken } = useContext(AuthoContext);
  const getSingleUserData = async () => {
    const response = await fetch(
      `http://localhost:5000/api/admin/users/${param.id}`,
      {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );
    const data = await response.json();
    setData(data);
    // console.log("single user resprrrr", data);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("this is updated data",data)
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${param.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: authorizationToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      //   console.log("this is submit data", response);
      if (response.ok) {
        toast.success("updated successfully", {
          position: "top-right",
          autoClose: 3000, // Disappears after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        setData({
          username: "",
          email: "",
          phone: "",
        })
      } else {
        toast.error("update rejected", {
          position: "top-right",
          autoClose: 3000, // Disappears after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);
  return (
    <div className={style.body}>
      <div className={style.container}>
        <h1>Update User Data</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.sec}>
            <label htmlFor="username" className={style.label}>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={data.username}
              autoComplete="off"
              required
              onChange={handleInput}
              className={style.in}
            />
          </div>
          <div className={style.sec}>
            <label htmlFor="email" className={style.label}>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={data.email}
              autoComplete="off"
              required
              onChange={handleInput}
              className={style.in2}

            />
          </div>
          <div className={style.sec}>
            <label htmlFor="phone" className={style.label}>Phone Number</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              value={data.phone}
              autoComplete="off"
              required
              onChange={handleInput}
              className={style.in3}

            />
          </div>
          <div className={style.btn}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminUpdate;
