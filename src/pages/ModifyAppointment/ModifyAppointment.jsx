import React from 'react'

export const ModifyAppointment = () => {
  return (
    <div>
      
    </div>
  )
}







// import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux';
// import { InputText } from '../../Components/InputText/InputText';
// import { updateAppointment } from '../../Services/apiCalls';
// import { appointmentData } from '../appointmentSlice';
// import { userData } from '../userSlice';

// export const ModifyAppointment = () => {

//     const [dataAppointment, setDataAppointment] = useState({
//         date: "", 
//     });

//     const inputHandler = (e) => {
//         setDataAppointment((prevState) => ({
//           ...prevState,
//           [e.target.name]: e.target.value,
//         }));
//       };

//       const credentialsRd = useSelector(userData);

//       const appointmentRd = useSelector (appointmentData);

//     let appointmentId = appointmentRd.choosenAppointment.id;
   
//     const checkError = (e) => {};

//     const updateApp = () => {
//         console.log("entro en submit");  
//         updateAppointment( appointmentId, dataAppointment, credentialsRd.credentials.token);
//     };


//   return (
//     <>
//     <div>
//       <InputText
//       type={"datetime-local"}
//       name={"date"}
//       required={true}
//       changeFunction={(e) => inputHandler(e)}
//       blurFunction={(e) => checkError(e)}
//       />
//     </div>
//     <div 
//     onClick={() =>{
//         updateApp();
//     }}
//     >
//          Submit
//     </div>
//     </>
//   )
// }


// import React, { useState, useEffect }  from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { InputText } from '../../Components/InputText/InputText';
// import { updateAppointment } from '../../Services/apiCalls';
// import { appointmentData } from '../appointmentSlice';
// import { userData } from '../userSlice';
// // import { Form } from 'react-bootstrap';
// // import Button from 'react-bootstrap/Button';
// // import { useSelector } from 'react-redux';
// // import { InputText } from '../../../components/InputText/InputText';
// // import NavBar from '../../../components/NavBar';
// // import { appointmentData } from '../../appointmentSlice';
// // import { updateAppointment } from '../../services/apiCalls';
// // import { userData } from '../../userSlice';


// export const ModifyAppointment = () => {

//     const ReduxCredentials = useSelector(userData);
//     const ReduxAppointment = useSelector(appointmentData)

//     // let params = ReduxAppointment.choosenAppointment.id 

//     const [appointments, setAppointments] = useState({
//         date: new Date(),
//       });
    

//       const inputHandler = (e) => {
//         setAppointments((prevState) => ({
//           ...prevState,
//           [e.target.name]: e.target.value,
//         }));
//       };

//     //   console.log(appointments, "esto es appointment")
//       console.log(ReduxAppointment, "esto es reduxappointment")

//     const checkError = (e) => {

//     }

//     const updateAppoinment = () => {
//         updateAppointment( appointments, ReduxCredentials.credentials.token)
//             .then(resultado => {
//                 setAppointments(resultado.data)
//                 setWelcome(`Cita modificada correctamente para el día: ${appointments.date}`);
//                 // console.log(resultado)
//                 // setTimeout(()=>{
//                 //     navigate('/');
//                 // },3500);
//             })
//             .catch(error => {
//                 setAppointments(error.message);
//             });
//     }

 
//     return (
//         <>
//         <hr />
//         <div style={{ display: 'block', 
//                     width: 700, 
//                     padding: 30 }}>
//         <h4>Modificar Appointment</h4>
//         <Form>
//           <Form.Group>
//               <Form.Label>date:</Form.Label>
//               <InputText className={"date"}
//               type={"datetime-local"} name={"date"} placeholder={"date..."} required={true}
//               changeFunction={(e) => inputHandler(e)} blurFunction={(e) => checkError(e)} />
//               </Form.Group>
//               <br />
//               <div className='botonModificar'>
//                   <Button variant="primary" onClick={updateAppoinment}>
//                       Modificar Cita
//                   </Button>
//               </div>
//           </Form>
//         </div>
//         </>
//     );
// }























// import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
// import { updateAppointment } from '../../Services/apiCalls';
// import { appointmentData } from '../appointmentSlice';
// import { userData } from '../userSlice';
// // import { useSelector } from 'react-redux';
// // import { InputText } from '../../components/InputText/InputText';
// // import { updateAppointment } from '../../services/apiCalls';
// // import { appointmentData } from '../appointmentsSlice';
// // import { userData } from '../userSlice';



// export const ModifyAppointment = () => {

//   const [dataAppointment, setDataAppointment] = useState({
//     date: "",

//   })

  

//   const inputHandler = (e) => {
//     setDataAppointment((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   //console.log(appointmentData)
//   const credentialsRdx = useSelector(userData);
//   //console.log(credentialsRdx)
//   const appointmentRdx = useSelector(appointmentData)
//   //console.log(appointmentRdx)
//   //console.log(choosenAppointment)

//   let appointmentId = appointmentRdx.choosenAppointment.id; 
//   console.log(appointmentId)
//   const checkError = (e) => {};

//   const updateApp = () => {
//     console.log("entro en submit");  
//     updateAppointment( appointmentId, dataAppointment, credentialsRdx.credentials.token);
//     console.log(updateAppointment)
    
 
//   };

//   return (
//     <>
//     <div>

   
//     {/* {appoimentSelectedRdx.choosenAppointment.id }
//     <InputText
//                   // className={
//                   //   credentialsError.nameError === ""
//                   //     ? "inputBasicDesign"
                      
//                   //     : "inputBasicDesign inputErrorDesign"
//                   // }
//                   type={"text"}
//                   name={"name"}
//                   placeholder="Name"
//                   required={true}
//                   changeFunction={(e) => inputHandler(e)}
//                   blurFunction={(e) => checkError(e)}
//                 /> */}
//     <br />
    
//     <InputText
//                   // className={
//                   //   credentialsError.nameError === ""
//                   //     ? "inputBasicDesign"
                      
//                   //     : "inputBasicDesign inputErrorDesign"
//                   // }
//                   type={"datetime-local"}
//                   name={"date"}
                  
//                   required={true}
//                   changeFunction={(e) => inputHandler(e)}
//                   blurFunction={(e) => checkError(e)}
//                 />
//   </div>
//     <div
//     // type="submit"
//     // className={
//     //   updateAppointmentAct
//     //     ? "registerSendDeac registerSendAct text-center"
//     //     : "registerSendDeac text-center"
//     // }
//     onClick={
//       // updateAppointmentAct
//         () => { 
//           updateApp();
          
//         //   }
//         // : () => {}
//     }}
//   >
//     Submit
//   </div>
// </>
//   )
// }




