import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#d9dbf8] ">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-start  justify-around font-lato">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl sm:text-2xl md:text-3xl font-sans mb-6">
              Hekto
            </h2>
            <div className="mb-6">
              <input
                type="email"
                className="outline-none border-2 h-10 w-56 sm:w-36 "
              />
              <button className="bg-primary px-6 py-2 rounded-sm text-white h-10">
                Sign Up
              </button>
            </div>

            <div>
              <span className="text-[#8A8FB9]">Contact Info</span>
              <p className="text-[#8A8FB9]">
                17 Princess Road, London,<br /> Greater London NW1 8JR, UK
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl mb-6 font-semibold">
              Catagories
            </h2>
            <ul className="text-[#8A8FB9] flex flex-col gap-2 ">
              <li>Laptop & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl mb-6 font-semibold">
              Customer Care
            </h2>
            <ul className="text-[#8A8FB9] flex flex-col gap-2 ">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl mb-6 font-semibold">Pages</h2>
            <ul className="text-[#8A8FB9] flex flex-col gap-2 ">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-[#E7E4F8] mt-20 py-2">
        <div className=" flex flex-col sm:flex-row gap-4  justify-between items-center mx-20">
        <p className="text-[#8A8FB9] text-center sm:text-start font-lato">©Webecy - All Rights Reserved</p>
        <div className="flex items-center gap-3">
          <FaFacebookF className="bg-[#151875] text-white w-[20px] h-[20px] text-[12px] rounded-full"/>
          <FaTwitter className="bg-[#151875] text-white w-[20px] h-[20px] text-[12px] rounded-full"/>
          <FaInstagramSquare className="bg-[#151875] text-white w-[20px] h-[20px] text-[12px] rounded-full"/>
        </div>
        </div>
      
      </div>
    </footer>
  );
};

export default Footer;
