import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { bringUsers } from '../../Services/apiCalls';
import { addChoosen } from '../detailSlice';


//Conexion a REDUX


import { userData } from "../userSlice";

export const AllUsers = () => {

    const [users, setUsers] = useState([]);

    const ReduxCredentials = useSelector(userData);

    const dispatch = useDispatch()
 


    const navigate = useNavigate();

    useEffect(()=>{

        if(users.length === 0){

            bringUsers(ReduxCredentials.credentials.token)
                .then(
                    result => {


                     

                        //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
                        setUsers(result.data)
                    }
                )
                .catch(error => console.log(error));
        }

    },[users])

    const selected = (persona) => {
      
      dispatch(addChoosen({ choosenObject: persona }))
      setTimeout(()=>{
          navigate("/user/all/detail");
        console.log(persona);
      },500)
    }

    

     return (
         <div className='usersDesign'>

            {  users.length > 0 ? 

                (<div>

                    {
                        users.map(
                            persona => {
                                return (
                                    <div className='profileDesign' 
                                        onClick={()=>selected(persona)} 
                                        key={persona.id}>

                                        {persona.name}

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
