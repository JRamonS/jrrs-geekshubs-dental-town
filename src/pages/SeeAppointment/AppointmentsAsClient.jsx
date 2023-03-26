import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments } from '../../Services/apiCalls';
import { addChoosenAppointment } from '../appointmentSlice';


import { userData } from '../userSlice';


export const AppointmentsAsClient = () => {

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const credentialsRdx = useSelector(userData)
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (appointments.length === 0) {
      setTimeout(() => {
        bringAppointments(credentialsRdx.credentials.token)
          .then((result) => {

            setLoading(false);

            if (result.data.length === 0) {
              return;
            }
            setAppointments(result.data);
          })
          .catch((error) => console.log(error));
      }, 1000);
    }
  }, [appointments]);


  const appointmentSelected = (appointment) => {

    dispatch(addChoosenAppointment({ choosenAppointment: appointment}))
    console.log({ choosenAppointment: appointment})
    setTimeout(() => {
      navigate('/modify/appointment');
    }, 500)

    if (loading){
      return (
        <div className='spinnerDesign d-flex justify-content-center align-items-center flex-column'>
          <div><Spinner animation="border" variant="primary"/></div>
          <div>   <h4>Loading...</h4></div>
        </div>
      );
    }
  
  }

  return (
    <div> <h2>Your appointments:</h2>

{ appointments.length > 0 ? 
      (<div className="cardsContainer">
        {
          appointments.map(
            appointment => {
              return (
                  <div
                    onClick = {() => appointmentSelected(appointment)}
                    className= "userCardDesign"
                    key={appointment.id}>
                    {appointment.date}
                    <div className="d-flex">
                    <p className="pe-4 nameFieldDesign">Treatment:</p>
                    <p>{appointment.Treatment.name}</p>
                  </div>
                    
                  </div>
              )
            }
          )

        }  
        </div>)
        
        :

        ( <Spinner animation="border" variant="primary" />)
      
      }
    </div>
  )
}


