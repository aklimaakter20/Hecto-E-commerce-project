import React from 'react'
import Sofa from '../assets/Unique sofa.png'
import EllipseRed from '../assets/EllipseRed.png'
import EllipseBlue from '../assets/EllipseBlue.png'
import EllipseGreen from '../assets/EllipseGreen.png'


const UniqueFeatures = () => {
  return (
   <section>
    <div className="container mx-auto">
        <div className='flex flex-col-reverse md:flex-row items-center justify-around py-20 sm:mx-6 lg:mx-12'>
            <div>
                <img src={Sofa} alt="" />
            </div>
            <div>
                <h2 className='text-[#151875] font-semibold text-2xl sm:text-3xl lg:text-4xl pb-5 '>Unique Features Of leatest & <br />Trending Poducts</h2>
            <div className='flex flex-col gap-4 font-lato py-8'>
                <div className='flex items-center gap-4'>
                    <img src={EllipseRed} alt="" />
                    <p className='text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</p>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={EllipseBlue} alt="" />
                    <p className='text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner 
                    blocks and machine nails</p>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={EllipseGreen} alt="" />
                    <p className='text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</p>
                </div>
                
            </div>
            <div className='flex items-center gap-6'>
                <button className='bg-primary px-6 py-2 text-white rounded-sm'>Add to Cart</button>
                
                <div>
                <p className='text-[#151875] text-xs font-bold'>B&B Italian Sofa </p>
                <p className='text-[#151875] text-xs'>$32.00</p>
                </div>
            </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default UniqueFeatures
