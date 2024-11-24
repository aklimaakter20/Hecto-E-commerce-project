import React from 'react'
import NewsletterImg from '../assets/newsletter.png'

const Newsletter = () => {
  return (
   <section>
    <div className="container mx-auto">
        <div className='relative py-12 text-center'>
            <img className='h-[250px] w-full' src={NewsletterImg} alt="" />
            <div className='absolute top-[40%] left-[16%] sm:left-[26%] lg:left-[36%] items-center text-center '>
                <h2 className='text-xl sm:text-2xl text-[#181575] font-bold text-center '>Get Leatest Update By Subscribe <br /> 0ur Newslater</h2>
                <button className='bg-primary px-6 py-2 text-white rounded-sm mt-6'>Shop Now</button>

            </div>
        </div>
    </div>
   </section>
  )
}

export default Newsletter
