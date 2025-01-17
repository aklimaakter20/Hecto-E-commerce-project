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
    <div className="container mx-auto">
    <Slider {...settings}>
    <div className="container mx-auto py-8 ">
 
    <div className='flex flex-col-reverse md:flex-row  gap-12 sm:gap-12 mx-2  items-center justify-between'>
            <div className='flex w-full mx-4 sm:mx-12  '>
               
                <div>
                    <h6 className='text-center sm:text-start text-primary font-bold text-sm font-lato'>Best Furniture For Your Castle....</h6>
                    <h1 className='text-center sm:text-start text-2xl sm:text-3xl md:text-4xl  font-sans font-bold py-3'>New Furniture Collection <br />
                    Trends in 2020</h1>
                    <p className='text-center sm:text-start text-xs font-lato leading-6 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                    in phasellus non in justo.</p>
                    <div className='py-8 flex items-center justify-between'>
                    <button className='bg-primary text-white py-2 px-6 rounded-sm mx-auto sm:mx-3'>Shop Now</button>

                    </div>
                </div>
            </div>
            <div>
                <img className='w-8/12 mx-auto md:w-full ' src={Sofa} alt="" />
            </div>
        </div>
    </div>
    <div className="container mx-auto py-8 ">
 
 <div className='flex flex-col-reverse md:flex-row  gap-12 sm:gap-12 mx-2  items-center justify-between'>
         <div className='flex w-full mx-4 sm:mx-12  '>
            
             <div>
                 <h6 className='text-center sm:text-start text-primary font-bold text-sm font-lato'>Best Furniture For Your Castle....</h6>
                 <h1 className='text-center sm:text-start text-2xl sm:text-3xl md:text-4xl  font-sans font-bold py-3'>New Furniture Collection <br />
                 Trends in 2020</h1>
                 <p className='text-center sm:text-start text-xs font-lato leading-6 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                 in phasellus non in justo.</p>
                 <div className='py-8 flex items-center justify-between'>
                 <button className='bg-primary text-white py-2 px-6 rounded-sm mx-auto sm:mx-3'>Shop Now</button>

                 </div>
             </div>
         </div>
         <div>
             <img className='w-8/12 mx-auto md:w-full ' src={Dining} alt="" />
         </div>
     </div>
 </div> 
 <div className="container mx-auto py-8 ">
 
 <div className='flex flex-col-reverse md:flex-row  gap-12 sm:gap-12 mx-2  items-center justify-between'>
         <div className='flex w-full mx-4 sm:mx-12  '>
            
             <div>
                 <h6 className='text-center sm:text-start text-primary font-bold text-sm font-lato'>Best Furniture For Your Castle....</h6>
                 <h1 className='text-center sm:text-start text-2xl sm:text-3xl md:text-4xl  font-sans font-bold py-3'>New Furniture Collection <br />
                 Trends in 2020</h1>
                 <p className='text-center sm:text-start text-xs font-lato leading-6 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                 in phasellus non in justo.</p>
                 <div className='py-8 flex items-center justify-between'>
                 <button className='bg-primary text-white py-2 px-6 rounded-sm mx-auto sm:mx-3'>Shop Now</button>

                 </div>
             </div>
         </div>
         <div>
             <img className='w-8/12 mx-auto md:w-full ' src={Bed} alt="" />
         </div>
     </div>
 </div>
 
 
 
    </Slider>
    </div>
  
   </section>
  )
}

export default Hero
