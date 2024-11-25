import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const RootLayout = () => {
  return (
    <>
      <Header/>
      <Navbar />
      <Outlet/>
     <Footer/>
    </>
  )
}

export default RootLayout
