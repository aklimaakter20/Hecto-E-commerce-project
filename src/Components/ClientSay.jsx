import React from 'react'
import Group from '../assets/group.png'
import Slider from "react-slick";

const ClientSay = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <section>
         <Slider {...settings}>
      <div className="container mx-auto ">
        <h2 className='text-xl text-center font-bold mt-20 mb-5 sm:mb-10 sm:text-2xl lg:text-4xl'>Our Client Say!</h2>
        <div className='mx-auto max-w-[600px]'>
            <img className='mx-auto' src={Group} alt="" />
            <div className='text-center'>
                <h5 className='text-xl mt-5 mb-1'>Selina Gomez</h5>
                <p className='text-[#8A8FB9] text-sm'>Ceo At Webecy Digital</p>
                <p className='text-[#8A8FB9] text-center mx-auto mt-5 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <h2 className='text-xl text-center font-bold mt-20 mb-5 sm:mb-10 sm:text-2xl lg:text-4xl'>Our Client Say!</h2>
        <div className='mx-auto w-[600px]'>
            <img className='mx-auto' src={Group} alt="" />
            <div className='text-center'>
                <h5 className='text-xl mt-5 mb-1'>Selina Gomez</h5>
                <p className='text-[#8A8FB9] text-sm'>Ceo At Webecy Digital</p>
                <p className='text-[#8A8FB9] text-center w-[600px] mt-5  mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
        </div>
      </div>
      <div className="container mx-auto ">
        <h2 className='text-xl text-center font-bold mt-20 mb-5 sm:mb-10 sm:text-2xl lg:text-4xl'>Our Client Say!</h2>
        <div className='mx-auto w-[600px]'>
            <img className='mx-auto' src={Group} alt="" />
            <div className='text-center'>
                <h5 className='text-xl mt-5 mb-1'>Selina Gomez</h5>
                <p className='text-[#8A8FB9] text-sm'>Ceo At Webecy Digital</p>
                <p className='text-[#8A8FB9] text-center w-[600px] mt-5  mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
        </div>
      </div>
      </Slider>
    </section>
  )
}

export default ClientSay
