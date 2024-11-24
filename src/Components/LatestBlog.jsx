import React from 'react'
import Frame1 from '../assets/Frame1.png';
import Frame2 from '../assets/Frame2.png';
import Frame3 from '../assets/Frame3.png';
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const LatestBlog = () => {
    // const blogList = [
    //     {
    //       title: "24/7 Support",
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    //         thumbnail: Frame1,
    //     },
    //     {
    //       title: "24/7 Support",
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    //         thumbnail: Frame2,
    //     },
    //     {
    //       title: "24/7 Support",
    //       description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    //         thumbnail: Frame2,
    //     },
    // ];
  return (
   <section>
    <div className="container mx-auto">
        <div className='py-12'>
        <h2 className='text-2xl sm:text-3xl font-bold text-[#181575] text-center'>Leatest Blog</h2>
        <div className='mt-12 flex flex-col sm:flex-row items-center justify-between'>

        {/* {blogList.map((item, i) => (
              <div key={i}> */}
            <div>
                <img src={Frame1} alt="" />
                <div className='flex items-center gap-16 p-2'>
                <div className='flex items-center gap-3'>
                    <FaPenNib className='text-primary' />
                    <span>SaberAli</span>
                </div>
                <div className='flex items-center gap-3'>
                    <SlCalender className='text-yellow-500' />
                    <span>SaberAli</span>
                </div>
                </div>
                <h3 className='text-[#181575] font-bold text-xl hover:text-primary duration-700 ease-in-out py-2'>Top esssential Trends in 2021</h3>
                <p className='text-[#72718F] pb-3'>More off this less hello samlande lied much <br />
                over tightly circa horse taped mightly</p>
                <button className='text-[#181575] underline hover:text-primary duration-700 ease-in-out font-lato'>Read More</button>
            </div>
            <div>
                <img src={Frame2} alt="" />
                <div className='flex items-center gap-16 p-2'>
                <div className='flex items-center gap-3'>
                    <FaPenNib className='text-primary' />
                    <span>SaberAli</span>
                </div>
                <div className='flex items-center gap-3'>
                    <SlCalender className='text-yellow-500' />
                    <span>SaberAli</span>
                </div>
                </div>
                <h3 className='text-[#181575] font-bold text-xl hover:text-primary duration-700 ease-in-out py-2'>Top esssential Trends in 2021</h3>
                <p className='text-[#72718F] pb-3'>More off this less hello samlande lied much <br />
                over tightly circa horse taped mightly</p>
                <button className='text-[#181575] underline hover:text-primary duration-700 ease-in-out font-lato'>Read More</button>
            </div>
            <div>
                <img src={Frame3} alt="" />
                <div className='flex items-center gap-16 p-2'>
                <div className='flex items-center gap-3'>
                    <FaPenNib className='text-primary' />
                    <span>SaberAli</span>
                </div>
                <div className='flex items-center gap-3'>
                    <SlCalender className='text-yellow-500' />
                    <span>SaberAli</span>
                </div>
                </div>
                <h3 className='text-[#181575] font-bold text-xl hover:text-primary duration-700 ease-in-out py-2'>Top esssential Trends in 2021</h3>
                <p className='text-[#72718F] pb-3'>More off this less hello samlande lied much <br />
                over tightly circa horse taped mightly</p>
                <button className='text-[#181575] underline hover:text-primary duration-700 ease-in-out font-lato'>Read More</button>
            </div>
        {/* ))} */}
        </div>
        </div>
      
   
    </div>
   </section>
  )
}

export default LatestBlog
