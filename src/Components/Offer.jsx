import React from "react";
import Car from "../assets/Car.png";
import Doller from "../assets/Doller.png";
import Quality from "../assets/Quality.png";
import Time from "../assets/time.png";

const Offer = () => {
  const offerList = [
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: Car,
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: Doller,
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: Quality,
    },
    {
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
      icon: Time,
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#151875] py-20">
            What Shopex Offer!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerList.map((item, i) => (
              <div key={i}>
                <div className="flex flex-col text-center items-center justify-center">
                  <img className="pb-2" src={item.icon} alt="" />
                  <h3 className="text-xl text-[#151875] font-bold pb-2">{item.title}</h3>
                  <p className="text-xs text-[#928ab5] font-lato w-40 leading-5">{item.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
