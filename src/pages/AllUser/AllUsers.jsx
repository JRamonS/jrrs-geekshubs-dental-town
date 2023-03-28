import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bringUsers } from "../../Services/apiCalls";
import { addChoosen } from "../detailSlice";
import "./AllUser.css"

//Conexion a REDUX

import { userData } from "../userSlice";

export const AllUsers = () => {
  const [users, setUsers] = useState([]);

  const ReduxCredentials = useSelector(userData);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (users.length === 0) {
      bringUsers(ReduxCredentials.credentials.token)
        .then((result) => {
          //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
          setUsers(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }));
    setTimeout(() => {
      navigate("/user/all/detail");
    }, 500);
  };

  return (
    <div className="usersDesign">
      {users.length > 0 ? (
        <div>
          {users.map((persona) => {
            return (
              <>
                <Container className="Center">
                  <Card className="m">
                    <Card.Body
                      onClick={() => selected(persona)}
                      key={persona.id}
                    >
                      <Card.Title>Name: &nbsp; {persona.name} </Card.Title>
                      <Card.Title>Surname:&nbsp; {persona.surname} </Card.Title>
                      <Card.Title>Email:&nbsp; {persona.email} </Card.Title>
                      <Card.Title>Phone:&nbsp; {persona.phone} </Card.Title>
                    </Card.Body>
                  </Card>
                </Container>  
              </>
            );
          })}
        </div>
      ) : (
        <div>ESTAN VINIENDO</div>
      )}
    </div>
  );
};
