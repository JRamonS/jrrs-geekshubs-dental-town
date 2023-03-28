import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppointmentsAll } from "../../Services/apiCalls";
import { userData } from "../userSlice";
import '../Dentist/AppointmentAll.css'


//Conexion a REDUX

import { addChoosen } from "../detailSlice";
import { Card, Container } from "react-bootstrap";

export const AppointmentAll = () => {
  const [appointment, setAppointment] = useState([]);

  const ReduxCredentials = useSelector(userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //console.log(users.length)
    if (appointment.length === 0) {
      AppointmentsAll(ReduxCredentials.credentials.token)
        .then((result) => {
          //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
          setAppointment(result.data.citasActivas);
        })
        .catch((error) => console.log(error));
    }
  }, [appointment]);

  return (
    <div className="cardsContainer ">
      {appointment.length > 0 ? (
        <div>
          {appointment.map((tag) => {
            return (
              <>
                <Container >
                  <Card className="Center">
                    <Card.Body key={tag.id}>
                      <Card.Title>Date:&nbsp;{tag.date}</Card.Title>
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
