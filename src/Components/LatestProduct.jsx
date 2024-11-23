import React from "react";
import LP1 from "../assets/latestP1.png";
import LP2 from "../assets/latestP2.png";
import LP3 from "../assets/latestP3.png";
import LP4 from "../assets/latestP4.png";
import LP5 from "../assets/latestP5.png";
import LP6 from "../assets/latestP6.png";
import Sale from "../assets/Sale.png";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import { apiData } from "./ContextApi";




const LatestProduct = () => {

    let info = useContext(apiData)

  return (
    <section>
      <div className="container mx-auto">
        <div className="py-20">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-[#151875] font-bold py-6 ">
            Leatest Products
          </h2>
          <div className="flex justify-center pb-32">
            <ul className="flex  gap-8">
              <li className="font-lato font-semibold text-primary underline duration-700 ease-in-out">
                New Arrival
              </li>
              <li className="text-[#151875] font-semibold font-lato hover:text-primary hover:underline duration-700 ease-in-out">
                Best Seller
              </li>
              <li className="text-[#151875] font-semibold font-lato hover:text-primary hover:underline duration-700 ease-in-out">
                Featured
              </li>
              <li className="text-[#151875] font-semibold font-lato hover:text-primary hover:underline duration-700 ease-in-out">
                Special Offer
              </li>
            </ul>
          </div>
          {/* Latest product images */}

          <div className="sm:flex flex-col sm:flex-row items-center justify-between">
            {info.map((item) => (
              <div className="relative group  ">
                <div>
                  <img
                    className="absolute invisible group-hover:visible -left-40 -top-8 group-hover:-left-2 group-hover:-top-8 duration-1000 ease-in "
                    src={Sale}
                    alt=""
                  />
                  <div>
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className="flex gap-12 font-lato mt-5">
                    <h6 className="text-[#151875]">{item.title}</h6>
                    <p className="text-[#151875] font-bold ">
                      ${item.price}
                      <span className="text-primary font-bold text-xs">
                        ${item.price}
                      </span>
                    </p>
                  </div>
                  <div className="absolute invisible group-hover:visible -left-20 group-hover:left-0 duration-1000 ease-in-out bottom-20  space-y-3 flex flex-col  ">
                    <FaRegHeart className="text-[#3F509E] " />
                    <LuShoppingCart className="text-[#3F509E]" />
                    <MdOutlineZoomIn className="text-[#3F509E]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestProduct;


