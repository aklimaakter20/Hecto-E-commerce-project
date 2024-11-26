import React, { useContext } from "react";

// import LP1 from "../assets/latestP1.png";
// import LP2 from "../assets/latestP2.png";
// import LP3 from "../assets/latestP3.png";
// import LP4 from "../assets/latestP4.png";
// import LP5 from "../assets/latestP5.png";
// import LP6 from "../assets/latestP6.png";
import Sale from "../assets/Sale.png";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineZoomIn } from "react-icons/md";
import { apiData } from "../Components/ContextApi";

const LatestProduct = () => {
  let data = useContext(apiData);
  let filter = data.filter((item) => item.id >= 30 && item.id <= 42);

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

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filter.map((item) => (
              <div className="  shadow-2xl group m-6">
                <div className="relative bg-[#F6F7FB] flex flex-col sm:flex-row gap-3 items-center justify-center py-12  overflow-hidden">
                  <img className="w-48" src={item.thumbnail} alt="" />
                  <div className="flex flex-col gap-2 absolute -left-10 bottom-10 duration-1000 ease-in-out group-hover:left-10 ">
                    <FaRegHeart className="text-[#181675]  hover:text-[#2F1AC4]" />
                    <LuShoppingCart className="text-[#181675]  hover:text-[#2F1AC4]" />
                    <MdOutlineZoomIn className="text-[#181675]  hover:text-[#2F1AC4]" />
                  </div>
                  <img className="absolute -left-32 group-hover:left-2 group-hover:top-3 duration-700 ease-in-out" src={Sale} alt="" />
                </div>
                <div className="flex items-center  justify-between text-center py-5 duration-700 ease-in-out group-hover:shadow-2xl px-6 ">
                  <h3 className="text-primary font-bold text-[16px] font-lato pb-2">
                    {item.title}
                  </h3>
                  
                  <h6 className="font-sans text-[14px] text-[#151875]">
                    ${item.price}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
