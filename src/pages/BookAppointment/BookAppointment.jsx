import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ButtonAct } from "../../Components/ButtonAct/ButtonAct";
import { InputText } from "../../Components/InputText/InputText";
import { validate } from "../../helpers/useful";

// import {registerUser} from "../../Services/apiCalls"
// import "./Register.css"

export const BookAppointment = () => {
      const [bookAppointment, setBookAppointment] = useState({
        dentist_id: "",
        treatment_id: "",
        hour: "",
        status: "",
        observations: "",
        date: "",
        });



  const [valiCredenciales, setValiCredenciales] = useState({
    dentist_id: false,
    treatment_id: false,
    hour: false,
    status: false,
    observations: false,
    date: false,
    });
  const [credencialesError, setCredencialesError] = useState({
    dentist_idError: "",
    treatment_idError: "",
    hourError: "",
    statusError: "",
    observationsError: "",
    dateError: "",
    });

  const [loginAct, setLoginAct] = useState(false);

  const inputHandler = (e) => {
    setBookAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    for (let error in credencialesError) {
      if (credencialesError[error] !== "") {
        setLoginAct(false);
        return;
      }
    }

    for (let vacio in bookAppointment) {
      if (bookAppointment[vacio] === "") {
        setLoginAct(false);
        return;
      }
    }

    for (let validated in valiCredenciales) {
      if (valiCredenciales[validated] === false) {
        setLoginAct(false);
      }
    }

    setLoginAct(true);
  });

  const checkError = (e) => {
    let error = "";

    let checked = validate(e.target.name, e.target.value, e.target.required);

    error = checked.message;

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  // const sendValue = () => {};

  // const userRegister = () => {
  //   registerUser(credenciales)
  //   }

  return (
    <Container>
      <Row>
        <Col md={12} lg={6}>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>dentist_id</Form.Label>{" "}
                <InputText
                  className={"inputRegister"}
                  type={"number"}
                  name={"dentist_id"}
                  placeholder={"dentist_id"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.dentist_idError}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>treatment_id</Form.Label>
                <InputText
                  className={"inputRegister"}
                  type={"number"}
                  name={"treatment_id"}
                  placeholder={"treatment_id"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.treatment_idError}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>hour</Form.Label>
                  <InputText
                  className={"inputRegister"}
                  type={"number"}
                  name={"hour"}
                  placeholder={"hour"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.hourError}
                </Form.Text>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>status</Form.Label>
                  <InputText
                  className={"inputRegister"}
                  type={"text"}
                  name={"status"}
                  placeholder={"status"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.statusError}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurName">
              <Form.Label>observations</Form.Label>
                <InputText
                className={"inputRegister"}
                type={"text"}
                name={"observations"}
                placeholder={"observations"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
                validateFunction={(e) => inputValidate(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.observationsError}
              </Form.Text>
            </Form.Group>     
          </Form>
        </Col>

        <Col md={12} lg={6}>
          <Form>

          <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>date</Form.Label>
                <InputText
                  className={"inputRegister"}
                  type={"date"}
                  name={"date"}
                  placeholder={"date"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              <Form.Text className="text-danger">
                {credencialesError.dateError}
              </Form.Text>
            </Form.Group>

            <ButtonAct
              className={loginAct ? "loginSendDeac loginSendAct" : "loginSendDeac"}
              buttonName="Register"
              // onClick={loginAct ? sendValue : () => {}}
              onClick={loginAct ? userRegister : () => {}}

            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};








// import React, { useState, useEffect }  from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { InputText } from '../../Components/InputText/InputText';
// import { nuevoAppointment } from '../../Services/apiCalls';

// import './BookAppointment.css';

// export const BookAppointment = () => {
//     const [bookAppointment, setBookAppointment] = useState({
//       "dentist_id": "",
//       "treatment_id": "",
//       "hour": "",
//       "status": "",
//       "observations": "",
//       "date": "",
//       });

//       const inputHandler = (e) => {
//         setBookAppointment((prevState) => ({
//           ...prevState,
//           [e.target.name]: e.target.value,
//         }));
//       };
//     useEffect(()=>{
//         if (bookAppointment.name === ""){
//           nuevoAppointment().then(
//             resultado => {console.log(resultado)}
//           ).catch(error => (console.log(error)))
//         }
//     }, [bookAppointment]);

//     const checkError = (e) => {

//     }


//     return (
//         <>
//         <div>
//         <h4>New Appointment</h4>
//         <Form>
//             <Form.Group>
//                 <Form.Label>Treatment Id:</Form.Label>
//                 <InputText className={"treatment_id"}
//                                 type={"number"} name={"treatment_id"} placeholder={"treatment_id"} required={true}
//                                 changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//             </Form.Group>

//             <Form.Group>
//                 <Form.Label>doctor_id:</Form.Label>
//                 <InputText className={"inputProfile"}
//                                 type={"number"} name={"doctor_id"} placeholder={"doctor_id"} required={true}
//                                 changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//             </Form.Group>

//             <Form.Group>
//                 <Form.Label>Hour:</Form.Label>
//                 <InputText className={"hour"}
//                                 type={"time"} name={"hour"} placeholder={"hour"} required={true}
//                                 changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//             </Form.Group>

//             <Form.Group>
//                 <Form.Label>status:</Form.Label>
//                 <InputText className={"status"}
//                                 type={"text"} name={"status"} placeholder={"status"} required={true}
//                                 changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//             </Form.Group>

//             <Form.Group>
//                 <Form.Label>observations:</Form.Label>
//                 <InputText className={"observations"}
//                                 type={"text"} name={"observations"} placeholder={"observations"} required={true}
//                                 changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//             </Form.Group>

//             <Form.Group>
//                 <Form.Label>date:</Form.Label>
//                 <InputText className={"date"}
//                                 type={"date"} name={"date"} placeholder={"date"} required={true}
//                                 changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//             </Form.Group>

//             <br />
//             <div className='botonModificar'>
//                 <Button variant="primary" type="submit">
//                     New Appointment
//                 </Button>
//             </div>
//         </Form>
//         </div>
//         </>
//     );
// }





// import React from 'react'
// import "./BookAppointment.css"

// export const BookAppointment = () => {
//   return (
//     <div>
    
//     </div>
//   )
// }