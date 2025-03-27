import React from 'react'
import { Link } from "react-router-dom";
import PageHeading from "../Components/PageHeading";
import AboutImg from '../assets/About.png'
import Offer from '../Components/Offer';
import ClientSay from '../Components/ClientSay';

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto">
      <div>
            <PageHeading heading="About Us" pageName="About Us" />
          </div>
          <div className='sm:flex sm:flex-row mx-10 sm:mb-10 items-center gap-10 mt-10 sm:mt-20'>
            <div className='w-full sm:w-1/2 mb-5 sm:mb-10'>
                <img src={AboutImg} alt="" />
            </div>
            <div className='w-full sm:w-1/2'>
                <h2 className='text-xl font-bold mb-3 sm:mb-7 sm:text-2xl lg:text-3xl text-[#151875]'>Know About Our Ecomerce Business, History</h2>
                <p className='text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <button className='bg-primary text-white py-2 px-6 mt-5 rounded-sm cursor-pointer'>
                    <Link to = '/contact'>Contact us </Link ></button>

            </div>
          </div>
          <ClientSay/>
          <Offer />
      </div>
    </section>
  )
}

export default AboutUs
