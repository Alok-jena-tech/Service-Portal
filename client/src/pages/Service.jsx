import React from "react";
import style from "./service.module.css";
import { useContext } from "react";
import { AuthoContext } from "../stores/auth";
const Service = () => {
  const { services } = useContext(AuthoContext);
  const {isLoggedIn}=useContext(AuthoContext);
      if (!isLoggedIn) return <h3>You are not loggedin,go for login</h3>;
  return (
    <>
      <div className={style.container}>
        <h1>Services</h1>
        <div className={style.cardContain}>
        {services? services.map((ele, index) => {
            const { service, description, price, provider } = ele;

          return (
            <div className={style.card} key={index}>
              <div><img src="image/servisec.webp" alt="service img" width="50px" /></div>
              <div className={style.price}>
                <p className={style.pr}>{price}</p>
                <p>{provider}</p>
              </div>
              <h3>{service}</h3>
              <div className={style.desc}>
                <p>{description}</p>
              </div>
            </div>
          );
        }):null
        }
        </div>
      </div>
    </>
  );
};

export default Service;
