import React, { Profiler } from 'react'
import "./Body.css"
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import { Treatment } from '../Treatment/Treatment'
import { Profile } from '../Profile/Profile'
import { BookAppointment } from '../BookAppointment/BookAppointment'
import { AppointmentAll } from '../Dentist/AppointmentAll'
import { AllUsers } from '../AllUser/AllUsers'
import { UserDetails } from '../userAdmin/userDetails/userDetails'



export const Body = () => {
  return (
    <>

      <Routes>
      <Route path='/home' element={<Home/>} />
        <Route path='/register' element= {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/treatment' element = {<Treatment/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/bookAppointment' element = {<BookAppointment/>}/>
        <Route path='/appointmentall' element = {<AppointmentAll/>}/>
        <Route path='/allUsers' element = {<AllUsers/>}/>
        <Route path='/user/all/detail' element = {<UserDetails/>}/>
        <Route path='*' element = {<Home/>}/>
      </Routes>
    
    </>
  )
}

