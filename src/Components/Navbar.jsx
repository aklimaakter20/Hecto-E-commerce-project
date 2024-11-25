import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [menuShow, setMenuShow] = useState(false);
  const handleMenu = () => {
    setMenuShow(!menuShow);
  };
  

  return (
    <nav className="py-4 hover:">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-3">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div className="bg-slate-900 sm:bg-white">
            <ul className={` lg:flex lg:gap-12 items-center lg:static ${menuShow ? "absolute top-20 duration-1000 left-[20%] text-center z-10 space-y-2 sm:invisible" : "absolute top-20 -left-80 "}`}>
              <li className="hover:text-primary duration-700 "><Link to = '/'>Home</Link></li>
              <li className="hover:text-primary duration-700">Pages</li>
              <li className="hover:text-primary duration-700">Products</li>
              <li className="hover:text-primary duration-700">Blog</li>
              <li className="hover:text-primary duration-700"><Link to = '/shop'>Shop</Link></li>
              <li className="hover:text-primary duration-700">Contact</li>
              <li>
                <div className="flex items-center">
                  <input type="search" className="lg:w-64 w-36  h-10 border-2 outline-none"/>
                  <div className=" bg-primary h-10 px-4 py-4 flex items-center">
                    <CiSearch className="text-white text-xl" />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div onClick={handleMenu} className="lg:hidden">
            {menuShow === true ? <RxCross2 /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
