import React from 'react'
import "./App.css"
import { NavBar } from './Components/NavBar/NavBar'
import { Body } from './pages/Body/Body'

export const App = () => {
  return (
    <div className='App'>
      <NavBar/>
      <Body/>
    </div>
  )
}


