import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



import { detailData } from '../detailSlice';
import { getUserData } from '../../Services/apiCalls';


import './Profile.css'
import { userData } from '../userSlice';


 
export const Profile = () => {

    const ReduxCredentials = useSelector(userData);
   

    const dispatch = useDispatch();
    const navigate = useNavigate();
    




    const [users, setUsers] = useState({
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
    }
        
    );



    useEffect(() => {
        if (users.name === "") {
            getUserData(ReduxCredentials.credentials.token)
          
            .then((result) => {

                console.log(ReduxCredentials.credentials.token)
                

            console.log(result.data)
            setUsers({
                username: result.data.username,
                password: result.data.password,
                email: result.data.email,
                name: result.data.name,
                surname: result.data.surname,
                address: result.data.address,
                phone: result.data.phone,
                date_of_birth: result.data.date_of_birth,
                gender: result.data.gender,
                postcode: result.data.postcode
            });
            })
            .catch((error) => console.log(error));
        }
    }, [users]);

    console.log(ReduxCredentials?.choosenObject?.username);
     return (
        <>
        <hr />
         <div className=''>
            <div className='texto'>Username: </div>
            {ReduxCredentials?.choosenObject?.username}
            <div className='texto'>Email: </div>
            {ReduxCredentials?.choosenObject?.email}
            <div className='texto'>Name: </div>
            {ReduxCredentials?.choosenObject?.name}
            <div className='texto'>Surname: </div>
            {ReduxCredentials?.choosenObject?.surname}
            <div className='texto'>Address: </div>
            {ReduxCredentials?.choosenObject?.address}
            <div className='texto'>Phone: </div>
            {ReduxCredentials?.choosenObject?.phone}
            <div className='texto'>Birth: </div>
            {ReduxCredentials?.choosenObject?.date_of_birth}
            <div className='texto'>Gender: </div>
            {ReduxCredentials?.choosenObject?.gender}
            <div className='texto'>Postcode: </div>
            {ReduxCredentials?.choosenObject?.postcode}
         </div>
         </>
     )
}



















// import React, {useState, useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { bringUsers } from '../../Services/apiCalls';


// //Conexion a REDUX


// import { userData } from "../userSlice";

// export const Profile = () => {

//     const [users, setUsers] = useState([]);

//     const ReduxCredentials = useSelector(userData);

//     const dispatch = useDispatch()
 


//     const navigate = useNavigate();

//     useEffect(()=>{

//         if(users.length === 0){

//             bringUsers(ReduxCredentials.credentials.token)
//                 .then(
//                     result => {

//                       console.log(result)

                     

//                         //Efectivamente, despues de traer los usuarios de la base de datos, los guardamos en el hook
//                         setUsers(result.data)
//                     }
//                 )
//                 .catch(error => console.log(error));
//         }

//     },[users])

//     const selected = (persona) => {
      
//       dispatch(addChoosen({ choosenObject: persona }))
//       setTimeout(()=>{
//           navigate("/detail");
//           console.log(dispatch)
//       },500)
//     }

    

//      return (
//          <div className='usersDesign'>

//             {  users.length > 0 ? 

//                 (<div>

//                     {
//                         users.map(
//                             persona => {
//                                 return (
//                                     <div className='profileDesign' 
//                                         onClick={()=>selected(persona)} 
//                                         key={persona.id}>

//                                         {persona.name}

//                                     </div>
//                                 )
//                             }
//                         )
//                     }


//                 </div>)

//                 : 

//                 (<div>ESTAN VINIENDO</div>)

//             }

//          </div>
//      )
// }


