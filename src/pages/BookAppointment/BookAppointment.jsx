import React, {useState, useEffect} from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../Components/InputText/InputText';
import { nuevoAppointment } from '../../Services/apiCalls';
import { userData } from '../userSlice';


export const BookAppointment = () => {

  const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);
console.log(credentialsRdx)
  const [infoAppointment, setInfoAppointment] = useState({
    date: "",
    // user_id: credentialsRdx.credentials.user.userId
    dentist_id: "",
    treatment_id: "",

  });

  const inputHandler = (e) => {
    setInfoAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [valiInfoAppointment, setValiInfoAppointment] = useState({
    dateVali: false,
  });

  const [BookAppointmentAct, setBookAppointmentAct] = useState(false);

  useEffect(() => {
    for (let empty in infoAppointment) {
      if (infoAppointment[empty] === "") {
        setBookAppointmentAct(false);
        return;
      }
    }

    for (let validated in valiInfoAppointment) {
      if (valiInfoAppointment[validated] === false) {
        setValiInfoAppointment(false);
        return;
      }
    }
    setBookAppointmentAct(true);
  });
  const checkError = (e) => {};



    // if (credentialsRdx.credentials.token) {


  const bookApp = () => {
    
    nuevoAppointment(infoAppointment, credentialsRdx.credentials.token);
    console.log(infoAppointment);
    setTimeout(() => {
      navigate ('/bookAppointment')
    }, 500);
  };


      /////////////////////////////////////////////////////
      return (
        <>
          <div className='container-icon'>
            <i className="bi bi-person-workspace icon-login"></i>
          </div>
          <Container className="container-register">
            <Row className="row-input">
              <Col md={12} lg={6} className="container-inputs">
                <Form>
                  <InputText className={ "inputBasicDesign"}
                        type={"datetime-local"}
                        name={"date"}
                        required={true}
                        changeFunction={(e) => inputHandler(e)}
                        blurFunction={(e) => checkError(e)} 
                      />
                      <Form.Group>
                 <Form.Label>Treatment Id:</Form.Label>
                 <InputText className={"treatment_id"}
                                type={"number"} name={"treatment_id"} placeholder={"treatment_id"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>

            <Form.Group>
                 <Form.Label>Dentist_id:</Form.Label>
                 <InputText className={"dentist_id"}
                                type={"number"} name={"dentist_id"} placeholder={"dentist_id"} required={true}
                                changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
            </Form.Group>
                </Form>      
                </Col>   
              <div
          type="submit"
            className={
              BookAppointmentAct ? "registerSendDeac registerSendAct" : "registerSendDeac"
            }
            onClick={
              //Si el hook registerAct es true, el onclick nos permitirá ejecutar la función que haría el registro....
              BookAppointmentAct
                ? () => {
                    bookApp();
                  }
                : () => {}
            }
          >
            Register me!
          </div>
            </Row>
          </Container>
        </>
            );              

}
