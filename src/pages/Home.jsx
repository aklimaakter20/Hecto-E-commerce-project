import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Offer from '../Components/Offer'
// import LatestProduct from '../Components/LatestProduct'
import UniqueFeatures from '../Components/UniqueFeatures'

const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <Featured />
     {/* <LatestProduct /> */}
    <Offer/>
    <UniqueFeatures />
    </>
  )
}

export default Home
