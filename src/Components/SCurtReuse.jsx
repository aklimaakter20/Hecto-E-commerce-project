import React from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
const SCurtReuse = (props) => {

  
  return (
    <>
      <section>
        <div className="container mx-auto lg:ml-2">
        <div className='flex flex-col sm:flex-row items-center gap-20'>
                <div className='flex items-center w-20%]'>
                  <div className='relative mx-10'>
                  <img className='' src={props.image} alt="" />
                    {/* <div>
                    <img className='absolute -top-1 left-40 md:left-32 lg:left-32' src={Cross} alt="" />

                    </div> */}
                  </div>
                  <div>
                    <h5 className='text-sm font-bold'>{props.heading}</h5>
                    <p className='text-xs text-[#A1A8C1]'>Color:Brown</p>
                    <span className='text-xs text-[#A1A8C1]'>Size:XL</span>
                  </div>
                </div>
                <div>
                  <h4 className='text-secondary'>$32.00</h4>
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                      <FaMinus  className='bg-[#E7E7EF] w-2'/>
                      <span className='bg-[#E7E7EF] w-2'>1</span>
                      <FaPlus className='bg-[#E7E7EF] w-2' />
                  </div>
                </div>
                <div className='flex items-center'>
                <FaEuroSign  className='text-secondary'/>
                  <h4 className='text-secondary'>219.00</h4>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default SCurtReuse

