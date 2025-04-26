import React from "react";
import style from "./login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthoContext } from "../stores/auth";
import { useContext } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const URL="http://localhost:5000/api/autho/login"
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {storeTokenInLS}=useContext(AuthoContext);
  const navigate = useNavigate();
  // console.log(user);
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login data response",response)
      const resp_data=await  response.json();
        console.log("login resp",resp_data);
      if (response.ok) {
        

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
      })
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      }
      else{
        alert(resp_data.message)
      }
    } catch (eror) {
      console.log("login data couldnot save", eror);
    }

    // console.log("user", user);
  };
  return (
    <div className={style.container}>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.title}>
          <h1>Login Form</h1>
          <p>Fill out the form carefully for login</p>
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
            Login now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
