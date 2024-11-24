import React from "react";
import Watch from "../assets/Watch.png";
import Box from "../assets/Box.png";
import Chair1 from "../assets/chair1.png";
import Chair2 from "../assets/chair2.png";
import Chair3 from "../assets/chair3.png";

const OfferProduct = () => {
  const offerList = [
    {
      title: "Executive Seat chair",
      price: 32,
      thumbnail: Chair1,
    },
    {
      title: "Executive Seat chair",
      price: 32,
      thumbnail: Chair2,
    },
    {
      title: "Executive Seat chair",
      price: 32,
      thumbnail: Chair3,
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-around py-12">
          <div>
            <h2 className="text-[#181575] font-semibold text xl sm:text-2xl">
              23% off in all products
            </h2>
            <button className="text-primary underline underline-offset-4 font-lato font-bold">
              Shop Now
            </button>
            <img src={Watch} alt="" />
          </div>
          <div>
            <h2 className="text-[#181575] font-semibold text xl sm:text-2xl">
              23% off in all products
            </h2>
            <button className="text-primary underline underline-offset-4 font-lato font-bold">
              View Collection
            </button>
            <img src={Box} alt="" />
          </div>
          <div>
            <div className="space-y-4">
              {offerList.map((item) => (
                <div className="items-center flex gap-4">
                  <img src={item.thumbnail} alt="" />
                  <div>
                    <h5 className="text-[16px] text-[#181575] font-bold">
                      {item.title}
                    </h5>
                    <p className="text-xs font-bold text-[#181575]">${item.price}</p>
                  </div>
                </div>
              ))}

         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferProduct;
