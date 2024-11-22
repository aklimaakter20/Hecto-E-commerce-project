import React from 'react'
import Fimg1 from '../assets/FImg1.png'
import Fimg2 from '../assets/FImg2.png'
import Fimg3 from '../assets/FImg3.png'

import Fimg4 from '../assets/FImg4.png'

import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import Slider from 'react-slick';
import './Featured.css'

const Featured = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,

        };
      
  return (
    <section className='py-32'>
        <div className="container mx-auto">
            <div className='text-center text-3xl text-[#1A0B5B] font-bold pb-6'>
                <h2>Featured Products</h2>
            </div>
            <Slider {...settings}>
            
                <div className='!w-[90%] h-[200px] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img  src={Fimg1} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
                <div className='!w-[90%] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img src={Fimg2} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
                <div className='!w-[90%] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img src={Fimg3} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
                <div className='!w-[90%] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img src={Fimg4} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
                <div className='!w-[90%] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img src={Fimg1} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
                <div className='!w-[90%] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img src={Fimg2} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
                <div className='!w-[90%] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img src={Fimg3} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
                <div className='!w-[90%] shadow-2xl group '>
                    <div className='relative bg-[#F6F7FB] flex flex-col gap-3 items-center justify-center py-12 overflow-hidden'>
                       
                        <img src={Fimg4} alt="" />
                        <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                        <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                        </div>
                        <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                    </div>
                    <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                        <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>Cantilever chair</h3>
                        <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'>Code - Y523201</h4>
                        <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>$42.00</h6>
                    </div>
                </div>
          
            </Slider>
        </div>
    </section>

  )
}

export default Featured
