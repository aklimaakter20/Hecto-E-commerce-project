import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Featured from '../Components/Featured'
import Offer from '../Components/Offer'
// import LatestProduct from '../Components/LatestProduct'
import Unique from '../Components/Unique'
import Trending from '../Components/Trending'
import OfferProduct from '../Components/OfferProduct'
import Discount from '../Components/Discount'
import Category from '../Components/Category'
import Newsletter from '../Components/Newsletter'
import LatestBlog from '../Components/LatestBlog'
const Home = () => {
  return (
    <>
     <Navbar />
     <Hero />
     <Featured />
     {/* <LatestProduct /> */}
    <Offer/>
    <Unique />
    <Trending />
    <OfferProduct />
    <Discount />
    <Category />
    <Newsletter />
    <LatestBlog />
    </>
  )
}

export default Home
