import React from 'react'
import EllipseRed from '../assets/EllipseRed.png'
import { FaAngleDown } from "react-icons/fa6";
import BrownSofa from '../assets/brownSofa.png'

const Discount = () => {
  return (
   <section>
    <div className="container mx-auto">
        <div className='py-12'>
            <h2 className='text-center text-2xl sm:text-3xl font-bold text-[#151875] pb-8'>Discount Item</h2>
            <ul className='flex items-center justify-center gap-6 text-[#151875]'>
                
                <li className='hover:text-primary duration-700 ease-in-out hover:underline underline-offset-4'>Wood Chair</li>
                <img src={EllipseRed} alt="" />
                <li className='hover:text-primary duration-700 ease-in-out hover:underline underline-offset-4'>Plastic Chair</li>
                <li className='hover:text-primary duration-700 ease-in-out hover:underline underline-offset-4'>Sofa Collection</li>
            </ul>
            <div className='flex flex-col-reverse md:flex-row items-center justify-center  md:justify-around sm:mx-6 lg:mx-12'>
                <div className='py-20 '>
                    <h2 className='text-xl md:text-3xl  text-[#151875] font-bold pb-6'>20% Discount Of All Products</h2>
                    <h6 className='text-primary text-xl font-semibold pb-4 font-lato '>Eams Sofa Compact</h6>
                    <p className='w-[80%] text-[#B7BACB] pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>

                   <div className='flex items-center gap-8'>
                   <div>
                    <div className='flex items-center gap-2'>
                        <FaAngleDown className='text-[#B7BACB]'/> 
                        <p className='text-[#B7BACB]'>Material expose like metals</p> 
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaAngleDown className='text-[#B7BACB]'/> 
                        <p className='text-[#B7BACB]'>Material expose like metals</p> 
                    </div>
                    </div>
                    <div>
                    <div className='flex items-center gap-2'>
                        <FaAngleDown className='text-[#B7BACB]'/> 
                        <p className='text-[#B7BACB]'>Material expose like metals</p> 
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaAngleDown className='text-[#B7BACB]'/> 
                        <p className='text-[#B7BACB]'>Material expose like metals</p> 
                    </div>
                    </div>
                   </div>
                
                    <button className='bg-primary px-6 py-2 text-white rounded-sm mt-6'>Shop Now</button>

                
                </div>
              
                <div>
                    <img src={BrownSofa} alt="" />
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Discount
