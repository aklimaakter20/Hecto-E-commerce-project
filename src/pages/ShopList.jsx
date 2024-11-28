import React from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import PageHeading from '../Components/PageHeading'
import Footer from '../Components/Footer'
import AllLogo from '../Components/AllLogo'
import EcommerceItems from '../Components/EcommerceItems'
import ShopListReuse from '../Components/ShopListReuse'
import ShotImg1 from "../assets/ShotlistImg1.png";
import ShotImg2 from "../assets/ShotlistImg2.png";
import ShotImg3 from "../assets/ShotlistImg3.png";
import ShotImg4 from "../assets/ShotlistImg4.png";
import ShotImg5 from "../assets/ShotlistImg5.png";
import ShotImg6 from "../assets/ShotlistImg6.png";
import ShotImg7 from "../assets/ShotlistImg6.png";



const ShopList = () => {
  return (
    <>
    <div className="container mx-auto lg:mx-40">
      <PageHeading heading= "Shop List" pageName = "Shop List" />
      <EcommerceItems />

      <ShopListReuse image= {ShotImg1} heading = 'Accumsan tincidunt'/>
      <ShopListReuse image= {ShotImg2} heading = 'In nulla'/>
      <ShopListReuse image = {ShotImg3} heading = 'Vel sem'/>
      <ShopListReuse image = {ShotImg4} heading = 'Porttitor cum'/>
      <ShopListReuse image = {ShotImg5} heading = 'Nunc in'/>
      <ShopListReuse image = {ShotImg6} heading = 'Vitae facilisis'/>
      <ShopListReuse image = {ShotImg7} heading = 'Curabitur lectus'/>
      <AllLogo />
      </div>
    </>
  )
}

export default ShopList
