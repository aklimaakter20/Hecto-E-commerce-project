import React from 'react'
import PageHeading from '../Components/PageHeading'
import Ellipse41 from '../assets/Ellipse 41.png'
import Ellipse42 from '../assets/Ellipse 42.png'
import Ellipse43 from '../assets/Ellipse 43.png'

import Ellipse44 from '../assets/Ellipse 44.png'
import Ellipse45 from '../assets/Ellipse 45.png'
import Ellipse46 from '../assets/Ellipse 46.png'
import GroupImg from '../assets/GroupImg.png'

const Contact = () => {
  return (
    <section>
        <div>
            <PageHeading heading="Contact Us" pageName="Contact Us" />
          </div>
        <div className="container mx-auto">
          <div className='flex items-center gap-20 mt-20'>
            <div className='w-1/2'>
                <h2 className='text-[#151875] text-xl sm:text-2xl lg:text-3xl font-bold mb-8'>Information About us</h2>
                <p className='text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <div className='flex gap-5 mt-10'>
                    <img src={Ellipse41} alt="" />
                    <img src={Ellipse42} alt="" />
                     <img src={Ellipse43} alt="" />
                </div>
            </div>
            <div className='w-1/2'>
                <h2 className='text-[#151875] text-xl sm:text-2xl lg:text-3xl font-bold mb-8'>Contact Way</h2>
               <div className="flex flex-col space-y-5">
               <div className="flex gap-10">
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10' src={Ellipse43} alt="" />
                    <div>
                        <p className='text-[#8A8FB9]'>Tel: 877-67-88-99</p>
                        <p className='text-[#8A8FB9]'>E-Mail: shop@store.com</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10' src={Ellipse44} alt="" />
                    <div>
                        <p className='text-[#8A8FB9]'>Support Forum</p>
                        <p className='text-[#8A8FB9]'>For over 24hr</p>
                    </div>
                </div>
                </div>
                <div className="flex gap-10">
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10' src={Ellipse45} alt="" />
                    <div>
                        <p className='text-[#8A8FB9]'>20 Margaret st, London</p>
                        <p className='text-[#8A8FB9]'>Great britain, 3NM98-LK</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-10 h-10' src={Ellipse46} alt="" />
                    <div>
                        <p className='text-[#8A8FB9]'>Free standard shipping</p>
                        <p className='text-[#8A8FB9]'>on all orders.</p>
                    </div>
                </div>
                </div>
               </div>
             
            </div>
          </div>
          <div className='flex items-center gap-20 mt-20'>
            <div className='w-1/2'>
                <h2 className='text-[#151875] text-xl sm:text-2xl lg:text-3xl font-bold mb-7 '>Get In Touch</h2>
                <p className='text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                <div className='mt-10'>
                    <div>
                    <input className='border-2 border-[#A4B6C8] outline-none p-2 w-full  ' type="text" placeholder='Your Name' /> 
                    </div><br />
                    <div>
                    <input className='border-2 border-[#A4B6C8] outline-none p-2  w-full ' type="email" placeholder='Your Email' /><br /><br />
                    </div>
                    <div>
                    <input className='border-2 border-[#A4B6C8] outline-none p-2 w-full' type="text" placeholder='Subject' /> <br /><br />
                    </div>
                    <div>
                    <textarea className='border-2 border-[#A4B6C8]  p-2 outline-none w-full' cols={50} rows={6} placeholder='Type Your Message'></textarea>

                    </div>
                    <button className='bg-primary text-white px-8 py-2 mt-4 rounded-lg'>Send Mail</button>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={GroupImg} alt="" />
            </div>
          </div>
        </div>
      
    </section>
  )
}

export default Contact
