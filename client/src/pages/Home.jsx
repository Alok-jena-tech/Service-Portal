import React from "react";
import style from "./home.module.css";
import { useContext } from "react";
import { AuthoContext } from "../stores/auth";
const Home = () => {
    const {user}=useContext(AuthoContext);
  
  return (
    <>
      <div className={style.container}>
        <div className={style.lhs}>
          <h4>we are the world best students</h4>
          <h1>welcome to technical world <span style={{color:"yellow"}}> {user? <b>{user.username}</b>:<p>loading...</p>}</span></h1>
          <p>
            We are not just students; we are learners, dreamers, and achievers.
            Every challenge we face is an opportunity to grow, every failure is
            a lesson, and every success is a milestone.
          </p>
          <p>
            💡📚 We are the best students in the world because we never stop
            learning, improving, and believing in ourselves! 🚀🔥{" "}
          </p>
          <div className={style.btns}>
          </div>
        </div>
        <div className={style.rhs}>
          <div>
            <img src="image/girl.png.webp" alt="" width="90%" height="90%" />
          </div>
        </div>
      </div>
      <div className={style.secc2}>
        <div className={style.sec2}>
          <div className={style.dv}>
            <h1>50+</h1>
            <p>Registered Companies</p>
          </div>
          <div className={style.dv}>
            <h1>100,00+</h1>
            <p>Happy Clients</p>
          </div>
          <div className={style.dv}>
            <h1>500+</h1>
            <p>Well known Developers</p>
          </div>
          <div className={style.dv3}>
            <h1>24/7</h1>
            <p>Service</p>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.rhsImg}>
          <div>
            <img src="image/girl.png.webp" alt="" width="60%" height="60%" />
          </div>
        </div>
        <div className={style.lhs}>
          <h4>we are the world best students</h4>
          <h1>welcome to technical world</h1>
          <p>
            We are not just students; we are learners, dreamers, and achievers.
            Every challenge we face is an opportunity to grow, every failure is
            a lesson, and every success is a milestone.
          </p>
          <p>
            💡📚 We are the best students in the world because we never stop
            learning, improving, and believing in ourselves! 🚀🔥{" "}
          </p>
          <div className={style.btns}>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
