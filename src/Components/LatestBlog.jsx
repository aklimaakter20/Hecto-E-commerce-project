import React from "react";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import { FaPenNib } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const LatestBlog = () => {
  return (
    <section>
      <div className="container mx-auto py-12">
        <h2 className="text-center font-bold font-lato text-xl md:text-3xl text-secondary pb-20">
          Leatest Blog
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* <Blog
          image={Frame1}
          subheading="SaberAli"
          time="21 August,2020"
          heading="Top esssential Trends in 2021"
          description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
        /> */}
           {/* <Blog
          image={Frame2}
          subheading="SaberAli"
          time="21 August,2020"
          heading="Top esssential Trends in 2021"
          description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
        /> */}
           {/* <Blog
          image={Frame3}
          subheading="SaberAli"
          time="21 August,2020"
          heading="Top esssential Trends in 2021"
          description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
        /> */}
        </div>
       
      </div>        
    </section>
  );
};

export default LatestBlog;
