
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from '../Signin/Signin'
import Home from '../Home/Home'
import Login from '../Login/Login'

const Navigator = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}>
            </Route>
            <Route path="/Signin" element={<Signin/>}>
            </Route>
            <Route path="/Home" element={<Home/>}>
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navigator