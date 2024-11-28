import React from "react";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import EllipseBlue from '../assets/EllipseBlue.png'
import EllipseGreen from '../assets/EllipseGreen.png'
import EllipseRed from '../assets/EllipseRed.png'

// import { FaRegStarHalfStroke } from "react-icons/fa6";


const ShopListReuse = (props) => {
  return (
    <>
      <section>
        <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row gap-6 items-center py-6 mx-auto">
          <div>
            <img className="w-64 lg:80" src={props.image} alt="" />
          </div>
      
            <div>
                <div className="flex items-center gap-10 mx-auto">
                <div>
                <h4 className="text-secondary text-xl font-bold mb-2">{props.heading}</h4>
                </div>
                <div>
                    <div className="flex gap-2">
                    <img src={EllipseBlue} alt="" />
                    <img src={EllipseGreen} alt="" />
                    <img src={EllipseRed} alt="" />
                    </div>
                </div>
                </div>
             
              <div className="flex gap-6">
                <div className="flex gap-2">
                <p className="text-secondary mr-4">$26.00 </p>
                <p className="text-primary line-through">$52.00</p>
                </div>
              <div className="flex gap-1 text-[#FFC416]">
                < FaStar />
                < FaStar />
                < FaStar />
                < FaStar />
                <FaStar className="text-[#B2B2B2]" />
              </div>
              </div>
           
              <p className="w-[70%] mt-2 text-xs text-[#9295AA]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-6 text-secondary mt-3">
                <LuShoppingCart />
                <FaRegHeart />
                <MdOutlineZoomIn />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopListReuse;
