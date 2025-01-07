import React from 'react'
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";



const BlogCompo = (props) => {

  return (
    <section>
        <div className="container mx-auto">
            <div className='mt-20'>
            <div>
                <img src={props.image} alt="" />
              <div className='flex items-center gap-20'>
              <div className='flex gap-10 items-center mt-4'>
                    <FaPenNib className='text-primary'/>
                    <p className='bg-[#FFE7F9] px-8 py-1 text-xs text-[#151875]'>Surf Auxion</p>
                </div>
                <div className='flex gap-10 items-center mt-4'>
                    <SlCalender className='text-[#FFA454]'/>
                    <p className='bg-[#FFE7F9] px-8 py-1 text-xs text-[#151875]'>Aug 09 2020</p>
                </div>
              </div>
              <h2 className='text-xl sm:text-2xl text-[#151875] mt-5 mb-8 font-bold '>{props.heading}</h2>
              <p className='text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.</p>
              <button className='text-[#151875] font-bold mt-6'>Read More</button>
            </div>
            </div>
          
        </div>
      
    </section>
  )
}

export default BlogCompo
