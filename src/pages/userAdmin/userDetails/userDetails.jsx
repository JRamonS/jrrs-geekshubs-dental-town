import React, {useEffect} from 'react';

import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
 
export const UserDetails = () => {

    //conexion a RDX en modo lectura
    const detailUser = useSelector(detailData);

    useEffect(()=>{
     
    },[])


     return (
        <>
        <hr />
       
         <div className=''>
         <div className="texto">Name: </div>
        {detailUser.name}
        <div className="texto">Surname: </div>
        {detailUser.surname}
        <div className="texto">Email: </div>
        {detailUser.email}
        <div className="texto">Address: </div>
        {detailUser.address}
        <div className="texto">Phone: </div>
        {detailUser.phone}
         </div>
       
         </>
     )
}