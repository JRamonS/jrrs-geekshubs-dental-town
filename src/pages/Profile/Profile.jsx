import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../Services/apiCalls";
import "./Profile.css";
import { userData } from "../userSlice";
import { Col, Row } from "react-bootstrap";

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

    <div className='profileDesign'>
      <div className='infoProfile'>
        <Row>
          <Col className='colDesign'>
            <div className='infoProfile2'>
              <Row>
                <Col>
                  <p className='txtDesign text-center'>Name</p>
                  <div className='cuadroTxtDesign'>
                    {user.name}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='txtDesign text-center'>Surname</p>
                  <div className='cuadroTxtDesign'>
                    {user.surname}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='txtDesign text-center'>Phone</p>
                  <div className='cuadroTxtDesign'>
                    {user.phone}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className='txtDesign text-center'>Email</p>
                  <div className='cuadroTxtDesign'>
                    {user.email}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
    





