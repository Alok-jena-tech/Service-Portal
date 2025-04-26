import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthoContext } from "../stores/auth";
import style from "./admin-contact.module.css";
import { toast } from "react-toastify";
const AdminContacts = () => {
  const [contactData, setContactData] = useState();
  const { authorizationToken } = useContext(AuthoContext);
  
  const getContactData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/contacts/",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      // console.log("this is response",data)
      setContactData(data);
    } catch (eror) {
      console.log(eror);
    }
  };

  const deleteContact = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${e}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",

            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();

      if(response.ok){
        getContactData();
        toast.success(data.message,{
                  position: "top-right",
                  autoClose: 3000, // Disappears after 3 seconds
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "colored"
              })
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
      // console.log("data of delete", data);

      // console.log("this is response of dlete", response);
    } catch (error) {
      console.log(error,"eeeeeeeeeee");
    }
  };
  useEffect(() => {
    getContactData();
  }, []);
  return (
    <>
      <div className={style.container}>
        <h1>this is admin contacts</h1>
        <div className={style.box}>
          {contactData ? (
            contactData.map((curEle, index) => {
              return (
                <div key={index} className={style.card}>
                  <p>
                    <b>Username: </b>
                    {curEle.username}
                  </p>
                  <p>
                    <b>Email: </b>
                    {curEle.email}
                  </p>

                  <p>
                    <b>Message:</b> {curEle.message}
                  </p>
                  <div className={style.btn}>
                    <button onClick={() => deleteContact(curEle._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <h3>loading...</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminContacts;
