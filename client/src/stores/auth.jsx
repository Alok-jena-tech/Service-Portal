import { createContext, useEffect, useState } from "react";
export const AuthoContext = createContext();
export const AuthoProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  console.log("user data",user)
  const [services,setServices]=useState();
  const [userLoading,setUserLoading]=useState(true);
  // let okk=!! user;
  let isLoggedIn = !!token;
  const authorizationToken= `Bearer ${token}` 
  // console.log("isloggedin", isLoggedIn);
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken)
    localStorage.setItem("token", serverToken);
  };
  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // JWT AUTHENTICATION TO GET THE CURRENTLY LOGGEDIN USER DATA
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/autho/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
              // console.log("user data in store aft login", data);

        setUser(data);
        setUserLoading(false)
      }
    } catch (eror) {
      console.error("error fetching user data for authontication",eror);
    }
  };

  // to fetch the service data from the database

  const getService = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/service/", {
        method: "GET",
      });
      // console.log("data from services",data)
      if(response.ok){
        const data=await response.json();
        // console.log("thisis sercice data",data);
        setServices(data)
      }
    } catch (eror) {
      console.log("this is eror in auth store of get services",eror)
    }
  };
  useEffect(() => {
    userAuthentication();
    getService()
  }, []);
  return (
    <AuthoContext.Provider
      value={{ storeTokenInLS, LogoutUser, isLoggedIn, user,services,authorizationToken,userLoading}}
    >
      {children}
    </AuthoContext.Provider>
  );
};
