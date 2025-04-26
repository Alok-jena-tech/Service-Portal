import React from "react";
import style from "./resister.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthoContext } from "../stores/auth";
import { useContext } from "react";
import { toast } from 'react-toastify';

const Resister = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storeTokenInLS } = useContext(AuthoContext);
  // console.log(user);
  const handleInput = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dtata = await fetch(`http://localhost:5000/api/autho/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("user ented data for register", user);
      // console.log("upload data", dtata);

      const resp_data = await dtata.json();

      if (dtata.ok) {
        // localStorage.setItem("token",resp_data.token)
        storeTokenInLS(resp_data.token);
        toast.success(resp_data.message,{
          position: "top-right",
          autoClose: 3000, // Disappears after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
      });

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      } else {
        console.log(resp_data);
        toast.error(resp_data.message,{
          position: "top-right",
          autoClose: 3000, // Disappears after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored"
      });
      }
    } catch (eror) {
      console.log("data register eror", eror);
    }
  };
  return (
    <div className={style.container}>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.title}>
          <h1>Registration Form</h1>
          <p>Fill out the form carefully for registration</p>
        </div>
        <div className={style.name}>
          <label htmlFor="username">username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            required
            autoComplete="off"
            value={user.username}
            onChange={handleInput}
          />
        </div>
        <div className={style.email}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            autoComplete="off"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div className={style.phone}>
          <label htmlFor="phone">phone number</label>
          <br />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="enter phon number"
            required
            autoComplete="off"
            value={user.phone}
            onChange={handleInput}
          />
        </div>
        <div className={style.passw}>
          <label htmlFor="password">password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <br />
        <div className={style.btnn}>
          <button type="submit" className={style.btn}>
            register now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Resister;
