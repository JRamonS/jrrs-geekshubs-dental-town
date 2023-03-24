import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../Services/apiCalls";
import "./Profile.css";
import { userData } from "../userSlice";

export const Profile = () => {
  const ReduxCredentials = useSelector(userData);
  const navigate = useNavigate();



  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    address: "",
    phone: "",
  });

  
  useEffect(() => {
    //Este useEffect se va a ejecutar SIEMPRE que hayan cambios en el hook credenciales
    if (user.name === "") {
      getUserData(ReduxCredentials.credentials.token)
        .then((resultado) => {
          setUser({
            name: resultado?.data?.name,
            surname: resultado?.data?.surname,
            email: resultado?.data?.email,
            address: resultado?.data?.address,
            phone: resultado?.data?.phone,
          });
        })
        .catch((error) => console.log(error));
    }
    
  }, []);

  return (
    <>
      <hr />
      <div className="">
        <div className="texto">Name: </div>
        {user.name}
        <div className="texto">Surname: </div>
        {user.surname}
        <div className="texto">Email: </div>
        {user.email}
        <div className="texto">Address: </div>
        {user.address}
        <div className="texto">Phone: </div>
        {user.phone}
      </div>
    </>
  );
};

