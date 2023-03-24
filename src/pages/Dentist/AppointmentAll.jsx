import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppointmentsAll } from '../../Services/apiCalls';
import { userData } from '../userSlice';


//Conexion a REDUX


import { addChoosen } from '../detailSlice';


export const AppointmentAll = () => {

    const [appointment, setAppointment] = useState([]);


    const ReduxCredentials = useSelector(userData);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        //console.log(users.length)
        if(appointment.length === 0){

          AppointmentsAll(ReduxCredentials.credentials.token)
                .then(
                    result => {
                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setAppointment(result.data.citasActivas)
                        
                    }
                    )
                    .catch(error => console.log(error));
                }

    },[appointment])

   

     return (
         <div className='usersDesign'>

            { appointment.length > 0 ? 
                
                (<div>

                    {
                        appointment.map(
                            tag => {
                                return (
                                    <div key={tag.id}>

                
                                        {tag.date}
                                        

                                    </div>
                                )
                            }
                        )
                    }


                </div>)

                : 

                (<div>ESTAN VINIENDO</div>)

            }

         </div>
     )
}
















