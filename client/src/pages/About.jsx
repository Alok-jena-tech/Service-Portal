import React from "react";
import style from "./about.module.css";
import { useContext } from "react";
import { AuthoContext } from "../stores/auth";
const About = () => {
  const {user,isLoggedIn}=useContext(AuthoContext);
  if (!isLoggedIn) return <h3>You are not loggedin,go for login</h3>;
  return (
    <>
      <div className={style.box}>
        <div className={style.container}>
          <div className={style.lhs}>
            <h3 style={{color:'white'}}>Welcome here <span style={{color:"red"}}> {user? <b>{user.username}</b>:<p>loading...</p>}</span></h3>
            <h1>Why Choose Us?</h1>
            <p>We Are the Best Students in the World! </p>
            <p>
              As students, we are the architects of the future, driven by
              curiosity, dedication, and a passion for learning. We embrace
              every challenge as an opportunity to grow, pushing our limits to
              achieve greatness.
            </p>
            <p>
              Our hard work, perseverance, and thirst for knowledge make us
              stand out. We are not just learners; we are problem-solvers,
              innovators, and leaders in the making. Whether in academics,
              technology, or creativity, we strive to be the best, always
              improving and never giving up.
            </p>
            <p>
              With discipline and determination, we set an example for the
              world. Our dreams are big, and our actions are powerful. Together,
              we inspire and uplift one another, proving that with the right
              mindset, anything is possible.
            </p>
            <p>
              ✨ We are the best students in the world because we never stop
              learning, growing, and believing in ourselves! 🚀📚
            </p>
            {/* <div className={style.btnn}>
              <button>Connect Now</button>
              <button>Learn More</button>
            </div> */}
          </div>
          <div className={style.rhs}>
            <div>
              <img src="image/students.webp" alt="" width="80%" />
            </div>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default About;
