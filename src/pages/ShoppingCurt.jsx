import React from "react";
import PageHeading from "../Components/PageHeading";
import HandBag1 from "../assets/handbag1.png";
import HandBag2 from "../assets/handbag2.png";
import HandBag3 from "../assets/handbag3.png";
import HandBag4 from "../assets/handbag4.png";
import HandBag5 from "../assets/handbag5.png";
import Check from "../assets/check.png";

import SCurtReuse from "../Components/SCurtReuse";
import { useSelector } from "react-redux";

const ShoppingCurt = () => {
  let CartData = useSelector((state)=>state.cartItemSlice.cartItem)
  
  return (
    <>
      <section>
        <div className="container mx-auto">
          <div>
            <PageHeading heading="Shopping Curt" pageName="shopping curt" />
          </div>

<div className="flex">
<div>
            <div className=" w-[75%] flex flex-col sm:flex-row items-center gap-32 py-10 lg:mx-20">
              <h4 className="font-bold text-secondary text-xl">Product</h4>
              <h4 className="font-bold text-secondary text-xl">Price</h4>
              <h4 className="font-bold text-secondary text-xl">Quantity</h4>
              <h4 className="font-bold text-secondary text-xl">Total</h4>
            </div>
            {
              CartData.map((item)=>(
                <div className="flex flex-col gap-6">
                <SCurtReuse image={HandBag1} heading={item.title} />
                <SCurtReuse image={HandBag2} heading="Ut diam consequat" />
                <SCurtReuse image={HandBag3} heading="Ut diam consequat" />
                <SCurtReuse image={HandBag4} heading="Ut diam consequat" />
                <SCurtReuse image={HandBag5} heading="Ut diam consequat" />
                <div>
                  <div className="flex justify-around">
                    <button className="bg-primary text-white px-6 py-2 rounded-sm">
                      Update Curt
                    </button>
                    <button className="bg-primary text-white px-6 py-2 rounded-sm">
                      Clear Curt
                    </button>
                  </div>
                </div>
              </div>
              ))
            }
     
          </div>
          <div>
            <div className="">
              <h4 className="font-bold text-secondary text-xl py-10 text-center">Cart Totals</h4>
              <div className=" bg-[#F4F4FC] px-8 py-4 rounded-sm mt-5 shadow-lg space-y-5">
                <div className="border-b-2 flex gap-20 border-[#E8E6F1]">
                  <p className="text-secondary font-semibold text-lg">Subtotals:</p>
                  <span className="text-secondary font-semibold text-lg">£219.00</span>
                </div>
                <div className="border-b-2 flex gap-20 border-[#E8E6F1]">
                  <p className="text-secondary font-semibold text-lg">Totals:</p>
                  <span className="text-secondary font-semibold text-lg">£325.00</span>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={Check} alt="" />
                <p className="text-xs text-[#8A91AB]">Shipping & taxes calculated at checkout</p>

                </div>
                <button className="bg-[#19D16F] px-6 py-2 rounded-sm text-white">Proceed To Checkout</button>
              </div>
            </div>

            <div className="bg-[#F4F4FC] px-8 py-4 rounded-sm mt-5 shadow-lg space-y-8"> 
              <h4 className="font-bold text-secondary text-xl py-10 text-center">Calculate Shopping</h4>
                <input className="border-b-2 outline-none " type="text" placeholder="Bangladesh" />
                <input className="border-b-2 outline-none " type="text" placeholder="Mirpur Dhaka - 1200" />
                <input className="border-b-2 outline-none " type="text" placeholder="Postal Code" />
                <button className="bg-[#FB2E86] px-6 py-2 rounded-sm text-white">Calculate Shiping</button>

            </div>
          </div>
</div>
        
        </div>
      </section>
    </>
  );
};

export default ShoppingCurt;
