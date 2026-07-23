import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Franchise from './Franchise'
import About from './About'
import Menu from './Menu'
import Footer from './Footer'

const KnightBite = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Menu/>} path='/menu'/>
        <Route element={<Franchise/>} path='/franchise'/>

      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default KnightBite
