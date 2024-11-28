import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
 
  

  return (
    <nav className="py-4 overflow-x-hidden">
      <div className="container mx-auto ">
        <div className="md:flex flex-col md:flex-row text-center items-center justify-between">
          <div>
            <img className="mx-auto pb-4 mt-8 md:mt-0 md:pb-0" src={Logo} alt="" />
          </div>
          <div className="bg-white">
            <ul className="md:flex items-center ml-8 ">
              <li className="mr-3 hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700"><Link to = '/'>Home</Link></li>
              <li className="mr-3 hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700">Pages</li>
              <li className="mr-3 hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700">Products</li>
              <li className="mr-3 hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700">Blog</li>
              <li className="mr-3 hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700"><Link to = '/shop'>Shop</Link></li>
              <li className="mr-3 hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700"><Link to = '/shopList'>SList</Link></li>
              <li className="mr-3 hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700"><Link to = '/shopSideBar'>Sidebar</Link></li>

              <li className="px-2 py-1  hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700">Contact</li>
              </ul>
              </div>
              <div className="flex items-center mt-6 ml-[32%] ">
                  <input type="search" className="lg:w-56 w-36 h-10 border-2 outline-none"/>
                  <div className=" bg-primary h-10 px-4 py-4 flex items-center">
                    <CiSearch className="text-white text-xl" />
                  </div>
                </div>
        

        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
