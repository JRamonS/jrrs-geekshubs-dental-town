import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppointmentsAll  } from '../../services/apiCalls';
import { userData } from '../userSlice';
import './AppointmentAll.css'

export const AppointmentAll = () => {

  const [appointment, setAppointment] = useState([]);

  const ReduxCredentials = useSelector(userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {

    if(appointment.length === 0){
        AppointmentsAll(ReduxCredentials.credentials.token)
        .then(
          result => {
            console.log(result)
  
            setAppointment(result.data.citasActivas)
          }
        )
        .catch(error => console.log(error))
    }

  },[appointment])




  return (
    <div>AppointmentsAsClient


{ appointment.length > 0 ? 
      (<div className="cardsContainer">
        {
          appointment.map(
            tag => {
                    return (
                        <div
                            onClick={()=>selected(tag)}
                            key={tag.id}>
                            {tag.status}
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









