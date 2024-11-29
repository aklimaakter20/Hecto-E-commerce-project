import React from "react";
import PageHeading from "../Components/PageHeading";
import EcommerceItems from "../Components/EcommerceItems";
import { FaCheck } from "react-icons/fa";
import ShopListReuse from "../Components/ShopListReuse";
import WatchImg from '../assets/WatchImg.png'
import Curology from '../assets/Curology.png'
import Showes from '../assets/Showes.png'
import { FaStar } from "react-icons/fa6";
import AllLogo from "../Components/AllLogo";
import Categroies from '../assets/Categroies.png'

const ShopSideBar = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div>
        <PageHeading heading="Shop Left Sidebar" pageName="Shop Left Sidebar" />
        <EcommerceItems/>

        </div>
        <div>
            {/* Product Brand */}

            <div>
                <h4 className="text-secondary text-center md:text-start mb-5 text-xl font-bold underline underline-offset-2">Product Brand</h4>
                <div className="flex flex-col md:flex-row items-center ">
                <div className="lg:w-[20%] flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#603EFF] bg-[#E5E0FC] text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Coaster Furniture</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#603EFF] bg-[#E5E0FC] text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Fusion Dot High Fashion</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#603EFF] bg-[#E5E0FC] text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Unique Furnitture Restor</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#603EFF] bg-[#E5E0FC] text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Dream Furnitture Flipping</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#603EFF] bg-[#E5E0FC] text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Young Repurposed</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#603EFF] bg-[#E5E0FC] text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Green DIY furniture</p>
                    </div>
                </div>
                <ShopListReuse image = {WatchImg} heading = 'Dictum morbi'/>
                </div>
               

            </div>
            {/* Discount Offer */}

            <div>
                <h4 className="text-secondary text-center md:text-start mb-5  text-xl font-bold underline underline-offset-2">Discount Offer </h4>
                <div className="flex  flex-col md:flex-row  items-center ">
                <div className=" lg:w-[20%] flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">20% Cashback</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">5% Cashback Offer</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">25% Discount Offer</p>
                    </div>
                 
                </div>
                <ShopListReuse className= 'w-[100%]' image = {Curology} heading = 'Sodales sit'/>
                </div>
               

            </div>
            {/* Rating item */}
            
            <div>
                <h4 className="text-secondary text-center md:text-start mb-5 text-xl font-bold underline underline-offset-2">Rating Item </h4>
                <div className="flex  flex-col md:flex-row  items-center ">
                <div className="lg:w-[20%] flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FFC107] bg-[#FFF6DA] hover:bg-[#FFCC2E] hover:text-white duration-700 ease-linear text-[12px] w-4 h-4 p-1" />
                        <div className="flex text-[#FFCC2E] gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className="text-[#B2B2B2]" />
                            <p className="text-black">(654)</p>
                        </div>
                        </div>
                        <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FFC107] bg-[#FFF6DA] hover:bg-[#FFCC2E] hover:text-white duration-700 ease-linear text-[12px] w-4 h-4 p-1" />
                        <div className="flex text-[#FFCC2E] gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar className="text-[#B2B2B2]"/>
                            <FaStar className="text-[#B2B2B2]" />
                            <p className="text-black">(2341)</p>
                        </div>
                        </div> <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FFC107] bg-[#FFF6DA] hover:bg-[#FFCC2E] hover:text-white duration-700 ease-linear text-[12px] w-4 h-4 p-1" />
                        <div className="flex text-[#FFCC2E] gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar className="text-[#B2B2B2]"/>
                            <FaStar className="text-[#B2B2B2]"/>
                            <FaStar className="text-[#B2B2B2]" />
                            <p className="text-black">(1244)</p>
                        </div>
                        </div> <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FFC107] bg-[#FFF6DA] hover:bg-[#FFCC2E] hover:text-white duration-700 ease-linear text-[12px] w-4 h-4 p-1" />
                        <div className="flex text-[#FFCC2E] gap-1">
                            <FaStar />
                            <FaStar />
                            <FaStar className="text-[#B2B2B2]"/>
                            <FaStar className="text-[#B2B2B2]"/>
                            <FaStar className="text-[#B2B2B2]" />
                            <p className="text-black">(4244)</p>
                        </div>
                        </div>
                 
                 
                </div>
                <ShopListReuse className= 'w-[100%]' image = {Showes} heading = 'Nibh varius'/>
                </div>
               

            </div>
            {/* Category item */}
            <div>
                <h4 className="text-secondary text-center md:text-start mb-5 text-xl font-bold underline underline-offset-2 pb-8">Categories</h4>
                <div className="flex flex-col md:flex-row items-center ">
                <div className=" lg:w-[20%] flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Prestashop</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Magento</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Bigcommerce Restor</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">osCommerce</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">3dcart</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Bags</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Accessories</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Jewellery</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaCheck className="text-[#FF3EB2] bg-[#FFDBF1] hover:bg-[#FF3EB2] hover:text-white duration-700 ease-in-out text-[12px] w-4 h-4 p-1" />
                        <p className="text-[#7E81A2] text-[14px]">Watches</p>
                    </div>
                </div>
                <ShopListReuse className= 'w-[100%]' image = {Categroies} heading = 'Mauris quis'/>
                </div>
               

            </div>
        </div>
        <AllLogo/>
      </div>
    </section>
  );
};

export default ShopSideBar;
