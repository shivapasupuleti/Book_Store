import React from 'react'
import Home from './Home/Home'
import { Routes, Route } from "react-router-dom"
import Course from './Course/Course'
import Signup from './components/Signup'
import Login  from './components/Login'

function App() {
  return (
   <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path = "/" element={<Home/>}/>
    <Route path = "/course" element={<Course/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path = "/signup" element={<Signup/>}/>


   </Routes>
  
    </div> </>
  )
}

export default App
