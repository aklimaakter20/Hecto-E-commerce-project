import React, { useContext } from 'react'
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import Slider from 'react-slick';
import './Featured.css'
import { apiData } from './ContextApi'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import { addWishList } from "../Components/slice/wishSlice";
import { addToCart } from "../Components/slice/cartSlice";



const Featured = () => {

    const settings = {
      
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
   let info = useContext(apiData)
  let filterProduct = info.filter((item) => item.id >= 20 && item.id <= 25)


   let dispatch= useDispatch()

 
  const handelWishCard = (item) => {
    dispatch(addWishList(item))
    toast.success("added to wish")
    console.log(item);
   
  };
   const handleAddToCart = (product) => {
     dispatch(addToCart({ ...product, qty: 1 }));
     toast.success("added to Cart")
   };
   
    return (
      <>
      <div className="container mx-auto mt-10 ">
        <h1 className='text-center text-xl md:text-2xl lg:text-3xl font-bold font-josefin mt-20 pb-10 text-[#151875]'>Featured Products</h1>
  
  
        <div className="py-14   ">
         <Slider {...settings} >{
          filterProduct.map((item) => (
            <div className='h-[200px] shadow-2xl group py-20'>
            <div className='relative  bg-[#F6F7FB] flex flex-col sm:flex-row gap-3 items-center justify-center py-12 overflow-hidden'>
               
                <img  src={item.thumbnail} alt="" />
                <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                <FaRegHeart onClick={()=>{handelWishCard(item)}} className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    
                     />
                <LuShoppingCart onClick={() => handleAddToCart(item)} className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    
                     />
                <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                </div>
                <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'><Link to = {`/shop/${item.id}`}>View Details</Link></button>
            </div>
            <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                <h3 className='text-primary font-bold text-sm font-lato pb-2 group-hover:text-white'>{item.title}</h3>
                <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'></h4>
                <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>${item.price}</h6>
            </div>
        </div>
  
          ))
  
          }
  
         </Slider>
        </div>
           
  
    </div>
  
         
        
      </>
    )
  }
  
  export default Featured