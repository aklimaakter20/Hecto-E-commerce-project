import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { RiListView } from "react-icons/ri";

const EcommerceItems= () => {
  return (
    <section>
      <div className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#181575]">Ecommerce Acceories & Fashion item </h2>
            <p className="text-[#8A8FB9] text-xs">About 9,620 results (0.62 seconds)</p>
          </div>
          <div className="flex items-center gap-10 text-[#3F509E] cursor-pointer">
            <p className="text-[12] md:text-lg">Per Page: <input className="border-2 outline-none w-[100px] pl-2" type="text" /></p>
            <div className="flex gap-1">
            <p className="text-[12] md:text-lg">Sort By:  </p>
            <input className="border-2 outline-none pl-2 w-[100px]" type="text" placeholder="Best Match " /> 
            
            </div>
            <div className="flex items-center gap-2">
            {/* <span className="text-xs">
              Best Match 
            </span> */}
            <FaAngleDown />
            </div>
         
            <div className="flex items-center gap-2">
              <span className="text-[12] md:text-lg">View:</span>
              <HiViewGrid />
              <RiListView />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceItems;
