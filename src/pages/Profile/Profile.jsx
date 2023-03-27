import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../Services/apiCalls";
import "./Profile.css";
import { userData } from "../userSlice";
import { Card, Container } from "react-bootstrap";

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

<Container className='Center' >
      <Card> 
        <Card.Body>
          <Card.Title>Name:&nbsp; {user.name} </Card.Title>
          <Card.Title>Surname:&nbsp; {user.surname} </Card.Title>
          <Card.Title>Email:&nbsp; {user.email} </Card.Title>
          <Card.Title>Address:&nbsp; {user.address} </Card.Title>
          <Card.Title>Phone:&nbsp; {user.phone} </Card.Title> 
        </Card.Body>
    </Card>
  </Container>
    </>
  );
};





