import React from "react";
import { useState } from "react";
import style from "./contact.module.css";
import { useContext } from "react";
import { AuthoContext } from "../stores/auth";

const Contact = () => {
   const {isLoggedIn}=useContext(AuthoContext);
    if (!isLoggedIn) return <h3>You are not loggedin,go for login</h3>;
  const contactData={
    username: "",
    email: "",
    message: "",
  }
  const [contact, setContact] = useState(contactData);
  const { user } = useContext(AuthoContext);
  const [userData, setUserData] = useState(true);
  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }
  const handleInput = (e) => {
    // e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    setContact({ ...contact, [name]: value });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      console.log("after contact post",data);
      if(data.ok){
        setContact(contactData);
      }
      // console.log
    } catch (eror) {
      console.log(`this is contact post eror:${eror}`);
    }
  };
  return (
    <>
      <div className={style.contact}>
        <div className={style.container}>
          <div className={style.lhs}>
            <h2>Contact Us</h2>
            <img
              src="image/contact.webp"
              alt="contact image"
              width="50%"
              height="50%"
            />
          </div>
          <div className={style.rhs}>
            <form action="" onSubmit={handleForm}>
              <div className={style.name}>
                <label htmlFor="username" className={style.lab}>
                  username
                </label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  required
                  autoComplete="off"
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handleInput}
                />
              </div>
              <div className={style.message}>
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  placeholder="enter your thoughts"
                  required
                  autoComplete="false"
                  onChange={handleInput}
                  value={contact.message}
                  rows="10"
                  className={style.msg}
                ></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className={style.map}>
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239487.04595925912!2d85.82045315!3d20.300884149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2z4Kqt4KuB4Kqs4Kqo4KuH4Kq44KuN4Kq14Kq-4KqwLCDgqpPgqqHgqr_gqrbgqr4!5e0!3m2!1sgu!2sin!4v1741250557718!5m2!1sgu!2sin"
            width="600"
            height="450"
            // style={{border:0}}
            // allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={style.mp}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
