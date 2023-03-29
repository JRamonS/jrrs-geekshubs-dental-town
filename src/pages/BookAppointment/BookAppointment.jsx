import React, {useState, useEffect} from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../Components/InputText/InputText';
import { nuevoAppointment } from '../../Services/apiCalls';
import { userData } from '../userSlice';
import './BookAppointment.css'





export const BookAppointment = () => {

  const navigate = useNavigate();

    const credentialsRdx = useSelector(userData);

  const [infoAppointment, setInfoAppointment] = useState({
    date: "",
    treatment_id: "",
    hour: "",

  });


  const [treatment, setTreatment] = useState([
    {
      id: 1,
      name: "Scale and polish",
    },
    {
      id: 2,
      name: "White fillings",
    },
    {
      id: 3,
      name: "Root canal treatment (endodontics)",
    },
  ]);



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
        
       <div className='h'>

<Container className="mt-5 mb-5">
      <Row className="mb-3 rowDesign">
        <Col id="formGridDate">
          <div className="d-flex flex-column">
            <p className="pe-4 nameFieldDesign text-center">Date:</p>
            <InputText
              className="dateInputDesign"
              type={"date"}
              name={"date"}
              required={true}
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
            />
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col id="formGridDate">
          <Form>
            <Form.Group className="mb-3">
              <p className="pe-4 nameFieldDesign text-center">Treatment:</p>
              <Form.Select
                name={"treatment_id"}
                onChange={(e) => inputHandler(e)}
                aria-label="Default select example"
              >
                <option>Choose your treatment:</option>

                {treatment.map((treatment) => {
                  return (
                    <option key={treatment.id} value={treatment.id}>
                      {treatment.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="mb-3  d-flex justify-content-center">
        <div className='j'>
        <div
          type="submit"
          className={
            BookAppointmentAct
              ? "registerSendDeac buttonDesign text-center"
              : "registerSendDeac buttonDesign text-center"
          }
          onClick={
            BookAppointmentAct
              ? () => {
                  bookApp();
                }
              : () => {}
          }
        >
          Submit
        </div>
        </div>
        
      </Row>
    </Container>
    </div>
        
            );              

}
