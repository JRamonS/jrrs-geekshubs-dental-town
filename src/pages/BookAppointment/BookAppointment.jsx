import React, {useState, useEffect} from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { InputText } from '../../Components/InputText/InputText';
import { nuevoAppointment } from '../../Services/apiCalls';
import { userData } from '../userSlice';


export const Book = () => {

  const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

  const [infoAppointment, setInfoAppointment] = useState({
    date: "",
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



  const bookApp = () => {
    
    nuevoAppointment(infoAppointment, credentialsRdx.credentials.token);
    setTimeout(() => {
      navigate ('/AppointmentsAsClient')
    }, 500);
  };

      return (
        <>
          <div className='container mt-3'>
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
           <h3 className='NavDesign'>Register me!</h3>
          </div>
            </Row>
          </Container>
        </>
            );              

}
