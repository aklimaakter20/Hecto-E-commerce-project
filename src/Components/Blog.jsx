import React from 'react'
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Blog = (props) => {
  return (
   <section>
    <div className="container mx-auto">
        <div>
            <img src={props.image} alt="" />
        </div>
        <div className='flex items-center gap-10 mt-2 px-4'>
            <div className='flex items-center gap-3 text-sm'>
                <FaPenNib  className='text-primary'/>
                <p className='text-secondary font-semibold font-lato'>{props.subheading}</p>
            </div>
            <div className='flex items-center gap-3 text-sm'>
                <SlCalender />
                <p className='text-secondary font-semibold font-lato'>{props.time}</p>
            </div>
            
        </div>
        <div>
        <h4 className='font-bold text-[18px] my-4 text-secondary hover:text-primary duration-700 ease-in-out'>{props.heading}</h4>
        <p className='text-[14px] font-lato mb-4 text-[#72718F]'>{props.description}</p>
        <button className='text-secondary underline underline-offset-4 font-semibold hover:text-primary duration-700 mb-10'>Read More</button>
        </div>
       

    </div>
   </section>
  )
}

export default Blog
