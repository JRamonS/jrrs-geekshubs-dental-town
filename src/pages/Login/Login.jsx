import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { decodeToken } from "react-jwt";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonAct } from "../../Components/ButtonAct/ButtonAct";
import { InputText } from "../../Components/InputText/InputText";
import { validate } from "../../helpers/useful";
import { logMe } from "../../Services/apiCalls";
import { login } from "../userSlice";
import './Login.css' 


export const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false,
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [loginAct, setLoginAct] = useState(false);



  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  

  const logeame = () => {

    logMe(credenciales)
        .then(
            respuesta => {

              
                let decodificado= decodeToken(respuesta.data.token)
                // console.log("decoded",decodificado)
                let datosBackend = {
                    token: respuesta.data.token,
                    usuario: "decoded", decodificado
                }


                // console.log(datosBackend);
                //Este es el momento en el que guardo en REDUX
                dispatch(login({credentials: datosBackend}));
                setTimeout(() => {
                  navigate ('/profile')
                }, 500);
            }
        )
        .catch(error => console.log(error))

  }

  const inputValidate = (e) => {
    switch(e.target.name){
      case "email":
        break;

        case "password":

          if (credenciales.password.length < 8){
            setCredencialesError((prevState) => ({
              ...prevState,
              passwordError: "Debes escribir como minimo 8 caracteres",
            }));
          }else {
            setCredencialesError((prevState) =>({
              ...prevState,
              passwordError : "",
            }));
          }

          break;

          default:
            console.log("uff....")
    }
  };

  useEffect(() => {
    for (let error in credencialesError) {
      if (credencialesError[error] !== "") {
        setLoginAct(false);
        return;
        
      }
    }

    for (let vacio in credenciales) {
      if (credenciales[vacio] === "") {
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

  const sendValue = () => {};

  return (
    <div className="main2">
    <Container className="main main-size">
      <Row className="LoginRow">
        <Col lg={12}>
          <Form>
            <Form.Group className="mb-3 text-center" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <InputText
                className={
                  credencialesError.emailError === ""
                    ? "inputBasicDesign"
                    : "inputBasicDesign inputErrorDesign"
                }
                type={"email"}
                name={"email"}
                placeholder={"email..."}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
                validateFunction={(e) => inputValidate(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.emailError}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 text-center" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputText
                className={
                  credencialesError.passwordError === ""
                    ? "inputBasicDesign"
                    : "inputBasicDesign inputErrorDesign"
                }
                type={"password"}
                name={"password"}
                placeholder={"password..."}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
                validateFunction={(e) => inputValidate(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.passwordError}
              </Form.Text>
            </Form.Group>
            <div className="act">    
            <ButtonAct 
              className={loginAct ? "loginSendDeac loginSendAct" : "loginSendDeac"}
              buttonName="Login"
              // onClick={loginAct ? sendValue : () => {}}
              onClick={loginAct ? logeame : () => {}}
              
            />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

