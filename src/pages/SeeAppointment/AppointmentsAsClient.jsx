// import React, {useEffect, useState} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { bringAppointments } from '../../Services/apiCalls';
// import { userData } from '../userSlice';
// import { addChoosenAppointment } from '../appointmentSlice';
// import { appointmentData } from '../appointmentSlice';

// export const SeeAppointment = () => {

//     const [appointments, setAppointments] = useState([]);

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const credencialsRdx = useSelector(userData);
//     // const credencialsRd = useSelector(addChoosenAppointment)

//     useEffect(() => {

//         if(appointments.length === 0){
//             bringAppointments(credencialsRdx.credentials.token)
//                 .then(
//                     result => {
//                         setAppointments(result.data)
//                     }
//                 )
//                 .catch(error => console.log(error))
//         }
//     },[appointments]);

//     const appointmentRdx = useSelector(appointmentData)
//     const appointmentSelected = (appointment) = {
//         dispatch(addChoosenAppointment({ choosenAppointment: appointment}))
//     }
//   return (
//     <div>
      
//     </div>
//   )
// }
// import React, { useEffect, useState } from 'react'
// import { Spinner } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { bringAppointments } from '../../services/apiCalls';
// import { addChoosenAppointment } from '../appointmentsSlice';
// import { userData } from '../userSlice';
// import './appointmentUser.css'
//   // const appointmentRdx = useSelector(appointmentData)
//   // console.log(appointmentRdx);
//   const appointmentSelected = (appointment) => {

//     dispatch(addChoosenAppointment({ choosenAppointment: appointment}))
//     console.log({ choosenAppointment: appointment})
//     setTimeout(() => {
//       navigate('/modify/appointment');
//     }, 500)
  
//   }

//   return (
//     <div>AppointmentsAsClient

// { appointments.length > 0 ? 
//       (<div className="cardsContainer">
//         {
//           appointments.map(
//             appointment => {
//               return (
//                   <div
//                     onClick = {() => appointmentSelected(appointment)}
//                     className= "userCardDesign"
//                     key={appointment.id}>
//                     {appointment.date}
                    
//                   </div>
//               )
//             }
//           )

//         }  
//         </div>)
        
//         :

//         ( <Spinner animation="border" variant="primary" />)
      
//       }
//     </div>
//   )
// }

import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bringAppointments } from '../../Services/apiCalls';
import { addChoosenAppointment } from '../appointmentSlice';


import { userData } from '../userSlice';
// import './appointmentUser.css'

export const AppointmentsAsClient = () => {

  const [appointments, setAppointments] = useState([]);

  const credentialsRdx = useSelector(userData)
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(appointments.length === 0){
      bringAppointments(credentialsRdx.credentials.token)
        .then(
          result => {
            console.log(result)
            console.log("hola")
  
            setAppointments(result.data)
          }
        )
        .catch(error => console.log(error))
    }

  },[appointments])
  // const appointmentRdx = useSelector(appointmentData)
  // console.log(appointmentRdx);
  const appointmentSelected = (appointment) => {

    dispatch(addChoosenAppointment({ choosenAppointment: appointment}))
    console.log({ choosenAppointment: appointment})
    setTimeout(() => {
      navigate('/modify/appointment');
    }, 500)
  
  }

  return (
    <div>AppointmentsAsClient

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


