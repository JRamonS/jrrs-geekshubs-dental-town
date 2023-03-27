import React, {useEffect} from 'react';
import { Card, Container } from 'react-bootstrap';

import { useSelector } from 'react-redux';
import { detailData } from '../../detailSlice';
import './UserDetails.css'
 
export const UserDetails = () => {

    //conexion a RDX en modo lectura
    const detailUser = useSelector(detailData);

    useEffect(()=>{
     
    },[])


     return (
        <>

<Container className='Center' >
      <Card> 
        <Card.Body>
          <Card.Title>Name:&nbsp; {detailUser?.choosenObject?.name} </Card.Title>
          <Card.Title>Surname:&nbsp; {detailUser?.choosenObject?.surname} </Card.Title>
          <Card.Title>Email:&nbsp; {detailUser?.choosenObject?.email} </Card.Title>
          <Card.Title>Address:&nbsp; {detailUser?.choosenObject?.address} </Card.Title>
          <Card.Title>Phone:&nbsp; {detailUser?.choosenObject?.phone} </Card.Title> 
        </Card.Body>
    </Card>
  </Container>
       
         </>
     )
}