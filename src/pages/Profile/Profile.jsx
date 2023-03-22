import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../Components/NavBar/NavBar';


import { detailSlice } from '../detailSlice';
import { getUserData } from '../../Services/apiCalls';


import './Profile.css'
import { userData } from '../userSlice';


 
export const Profile = () => {
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
    // const detailRedux = useSelector(detailData);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (users.name === "") {
        getUserProfile(ReduxCredentials.credentials.token)
            .then((result) => {
            
            setUsers({
                username: result.data.user.username,
                password: result.data.user.password,
                email: result.data.user.email,
                name: result.data.user.name,
                surname: result.data.user.surname,
                address: result.data.user.address,
                phone: result.data.user.phone,
                date_of_birth: result.data.user.date_of_birth,
                gender: result.data.user.gender,
                postcode: result.data.user.postcode
            });
            console.log(getUserProfile);
            })
            .catch((error) => console.log(error));
        }
    }, [users]);

     return (
        <>
        <NavBar />
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


