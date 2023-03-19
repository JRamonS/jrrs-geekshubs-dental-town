import React from 'react'
import "./Body.css"
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import { Treatment } from '../Treatment/Treatment'

export const Body = () => {
  return (
    <>

      <Routes>
      <Route path='/home' element={<Home/>} />
        <Route path='/register' element= {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/treatment' element = {<Treatment/>}/>
        <Route path='*' element = {<Home/>}/>
      </Routes>
    
    </>
  )
}

