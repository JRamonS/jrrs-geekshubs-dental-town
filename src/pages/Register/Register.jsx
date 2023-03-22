import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ButtonAct } from "../../Components/ButtonAct/ButtonAct";
import { InputText } from "../../Components/InputText/InputText";
import { validate } from "../../helpers/useful";
import {registerUser} from "../../Services/apiCalls"
import "./Register.css"

export const Register = () => {
  const [credenciales, setCredenciales] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    surname: "",
    address: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    postcode: "",
  });

  console.log(credenciales)

  const [valiCredenciales, setValiCredenciales] = useState({
    username: false,
    password: false,
    email: false,
    name: false,
    surname: false,
    address: false,
    phone: false,
    date_of_birth: false,
    gender: false,
    postcode: false,
  });

  const [credencialesError, setCredencialesError] = useState({
    usernameError: "",
    passwordError: "",
    emailError: "",
    nameError: "",
    surnameError: "",
    addressError: "",
    phoneError: "",
    date_of_birthError: "",
    genderError: "",
    postcodeError: "",
  });

  const [loginAct, setLoginAct] = useState(false);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [welcome, setWelcome] = useState("");

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

  const userRegister = () => {
    registerUser(credenciales)

  setWelcome(`Hi. Thank you for trusting in us!`);
  setTimeout(() => {
    navigate("/login");
  }, 3000);
    }

  return (
    <Container>
      <Row>
        <Col md={12} lg={6}>
          <Form>

            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>{" "}
                <InputText
                  className={"inputRegister"}
                  type={"text"}
                  name={"username"}
                  placeholder={"Username"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.usernameError}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
                <InputText
                  className={"inputRegister"}
                  type={"email"}
                  name={"email"}
                  placeholder={"Email"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.emailError}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                  <InputText
                  className={"inputRegister"}
                  type={"password"}
                  name={"password"}
                  placeholder={"Password"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.passwordError}
                </Form.Text>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                  <InputText
                  className={"inputRegister"}
                  type={"text"}
                  name={"name"}
                  placeholder={"Name"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
                <Form.Text className="text-danger">
                  {credencialesError.nameError}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSurName">
              <Form.Label>Surname</Form.Label>
                <InputText
                className={"inputRegister"}
                type={"text"}
                name={"surname"}
                placeholder={"Surname"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
                validateFunction={(e) => inputValidate(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.surnameError}
              </Form.Text>
            </Form.Group>     
          </Form>
        </Col>

        <Col md={12} lg={6}>
          <Form>

          <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Address</Form.Label>
                <InputText
                  className={"inputRegister"}
                  type={"text"}
                  name={"address"}
                  placeholder={"Address"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              <Form.Text className="text-danger">
                {credencialesError.addressError}
              </Form.Text>
            </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
                <InputText
                  className={"inputRegister"}
                  type={"number"} name={"phone"} placeholder={"phone"} required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              <Form.Text className="text-danger">
                {credencialesError.phoneError}
              </Form.Text>
            </Form.Group>      

            <Form.Group className="mb-3" controlId="formBasicDate_of_birth">
              <Form.Label>Birth</Form.Label>
                <InputText
                  className={"inputRegister"}
                  type={"date"}
                  name={"date_of_birth"}
                  placeholder={"Birth"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              <Form.Text className="text-danger">
                {credencialesError.date_of_birthError}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicgender">
              <Form.Label>Gender</Form.Label>
                <InputText
                 className={"inputRegister"}
                  type={"text"}
                  name={"gender"}
                  placeholder={"Gender"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              <Form.Text className="text-danger">
                {credencialesError.genderError}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPostcode">
              <Form.Label>Postcode</Form.Label>
                <InputText
                 className={"inputRegister"}
                  type={"number"}
                  name={"postcode"}
                  placeholder={"Postcode"}
                  required={true}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                  validateFunction={(e) => inputValidate(e)}
                />
              <Form.Text className="text-danger">
                {credencialesError.postcodeError}
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

// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { Form } from "react-router-dom";
// import { ButtonAct } from "../../Components/ButtonAct/ButtonAct";
// import { InputText } from "../../Components/InputText/InputText";
// import { validate } from "../../helpers/useful";
// import "./Register.css"

//   return (
//   

//          

//         

//            

//             <Form.Group className="mb-3" controlId="formBasicPostcode">
//               <Form.Label>Postcode</Form.Label>
//               <InputText
//                 className={
//                   credencialesError.postcodeError === ""
//                     ? "inputBasicDesign"
//                     : "inputBasicDesign inputErrorDesign"
//                 }
//                 type={"number"}
//                 name={"zip"}
//                 placeholder={"Postcode"}
//                 required={true}
//                 changeFunction={(e) => inputHandler(e)}
//                 blurFunction={(e) => checkError(e)}
//                 validateFunction={(e) => inputValidate(e)}
//               />
//               <Form.Text className="text-danger">
//                 {credencialesError.postcodeError}
//               </Form.Text>

//               <ButtonAct
//               className={loginAct ? "loginSendDeac loginSendAct" : "loginSendDeac"}
//               buttonName="Register"
//               // onClick={loginAct ? sendValue : () => {}}
//               onClick={loginAct ? logeame : () => {}}

//             />
//             </Form.Group>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
