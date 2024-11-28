import React from 'react'
import NewsletterImg from '../assets/newsletter.png'

const Newsletter = () => {
  return (
   <section>
    <div className="container mx-auto">
    <div className="  ">
           <div className="py-10">
           <img className='' src={NewsletterImg} alt="" />
           </div>
            <div className="relative bottom-40  text-center">
                <h2 className='md:text-2xl text-[12px] md:mt-0 mt-24 font-bold font-josefin text-[#154987] '>Get Leatest Update By Subscribe <br /> 0ur Newslater</h2>
                <button className='text-white md:text-[12px] text-[8px] px-2 md:py-2 md:px-10 bg-primary md:mt-2 md:rounded-lg rounded-sm'>Shop Now</button>
            </div>
      </div>
    </div>
   </section>
  )
}

export default Newsletter
