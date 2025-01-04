import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  let cartItemsNumber = useSelector((state)=>state.cartItemSlice.cartItems)
  
  return (
    <header className="bg-[#7E33E0]  ">
      <div className="container mx-auto">
        <div className="hidden md:flex items-center justify-between py-3 md:mr-6">
          <div className="flex items-center justify-between gap-4 text-white">
            <div className="flex items-center justify-between gap-4">
              <FaRegEnvelope />
              <p>aklimaakter20@gmail.com</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <FaPhoneVolume />
              <p>(67733)85498</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 text-white">
            <div>
              <select className="bg-transparent ">
                <option className="text-[#7e33e0]" value="">English</option>
                <option className="text-[#7e33e0]" value="">Bangla</option>
              </select>
            </div>

            <div>
              <select className="bg-transparent ">
                <option className="text-[#7e33e0]" value="">USD</option>
                <option className="text-[#7e33e0]" value="">TAKA</option>
              </select>
            </div>

            <div className="flex items-center gap-1">
              <p>Login</p>
              <CiUser />
            </div>
            <div className="flex items-center gap-1 ">
              <p>Wishlist</p>
              <FaRegHeart />
              <h6>5</h6>
            </div>
            <div className="relative ">
          <Link to = '/shoppingCart'><FiShoppingCart className=""/></Link>
          <h6 className="absolute -top-4 -right-3 bg-red-500 w-5 h-5 flex items-center justify-center text-[12px] rounded-full">{cartItemsNumber.length}</h6>
      
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
