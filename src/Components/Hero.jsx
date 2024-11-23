import React from 'react'
import Light from '../assets/light.png'
import Sofa from '../assets/sofa.png'
import Slider from "react-slick";
import Dining from '../assets/dining.png';
import Bed from '../assets/bed.jpeg';




const Hero = () => {
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
    <div className="container mx-auto py-8 ">
 
    <div className='flex flex-col-reverse md:flex-row gap-4 sm:gap-12 mx-2  items-center justify-around'>
            <div className='flex w-full mx-4 sm:mx-12  '>
                <div className='flex flex-col '>
                    <img className='w-64 ' src={Light} alt="" />
                    <div className='w-3 h-3 bg-primary rounded-full mt-8 '></div>

                </div>
                <div>
                    <h6 className='text-primary font-bold text-sm font-lato'>Best Furniture For Your Castle....</h6>
                    <h1 className='text-2xl sm:3xl md:4xl  font-sans font-bold py-3'>New Furniture Collection <br />
                    Trends in 2020</h1>
                    <p className='text-xs font-lato leading-6 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p>
                    <div className='py-8 flex items-center justify-between'>
                    <button className='bg-primary text-white py-2 px-6 rounded-sm'>Shop Now</button>

                    </div>
                </div>
            </div>
            <div>
                <img className='w-8/12 mx-auto md:w-full ' src={Sofa} alt="" />
            </div>
        </div>
    </div>
    <div className="container mx-auto py-12">
 
 <div className='flex items-center justify-around'>
         <div className='flex w-1/2'>
             <div className='flex flex-col '>
                 <img className='w-56' src={Light} alt="" />
                 <div className='w-3 h-3 bg-primary rounded-full mt-8 '></div>

             </div>
             <div>
                 <h6 className='text-primary font-bold text-sm font-lato'>Best Furniture For Your Castle....</h6>
                 <h1 className='text-3xl font-sans font-bold py-3'>New Furniture Collection <br />
                 Trends in 2020</h1>
                 <p className='text-xs font-lato leading-6 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                 in phasellus non in justo.</p>
                 <div className='py-8 flex items-center justify-between'>
                 <button className='bg-primary text-white py-2 px-6 rounded-sm'>Shop Now</button>

                 </div>
             </div>
         </div>
         <div>
             <img className='w-96' src={Dining} alt="" />
         </div>
     </div>
 </div>
 <div className="container mx-auto py-12">
 
 <div className='flex items-center justify-around'>
         <div className='flex w-1/2'>
             <div className='flex flex-col '>
                 <img className='w-56' src={Light} alt="" />
                 <div className='w-3 h-3 bg-primary rounded-full mt-8 '></div>

             </div>
             <div>
                 <h6 className='text-primary font-bold text-sm font-lato'>Best Furniture For Your Castle....</h6>
                 <h1 className='text-3xl font-sans font-bold py-3'>New Furniture Collection <br />
                 Trends in 2020</h1>
                 <p className='text-xs font-lato leading-6 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                 in phasellus non in justo.</p>
                 <div className='py-8 flex items-center justify-between'>
                 <button className='bg-primary text-white py-2 px-6 rounded-sm'>Shop Now</button>

                 </div>
             </div>
         </div>
         <div>
             <img className='w-96' src={Bed} alt="" />
         </div>
     </div>
 </div>
 <div className="container mx-auto ">
 
 <div className='flex items-center justify-around'>
         <div className='flex w-1/2'>
             <div className='flex flex-col '>
                 <img className='w-56' src={Light} alt="" />
                 <div className='w-3 h-3 bg-primary rounded-full mt-8 '></div>

             </div>
             <div>
                 <h6 className='text-primary font-bold text-sm font-lato'>Best Furniture For Your Castle....</h6>
                 <h1 className='text-3xl font-sans font-bold py-3'>New Furniture Collection <br />
                 Trends in 2020</h1>
                 <p className='text-xs font-lato leading-6 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                 in phasellus non in justo.</p>
                 <div className='py-8 flex items-center justify-between'>
                 <button className='bg-primary text-white py-2 px-6 rounded-sm'>Shop Now</button>

                 </div>
             </div>
         </div>
         <div>
             <img className='w-96' src={Sofa} alt="" />
         </div>
     </div>
 </div>
    </Slider>
   </section>
  )
}

export default Hero
