import React, { useContext } from 'react'
import PageHeading from "../Components/PageHeading";
import BagSmall from "../assets/BagSmall.png"
import BagSmall2 from "../assets/BagSmall2.png"
import BagSmall3 from "../assets/BagSmall3.png"
import BagFullImg from "../assets/BagFullImg.png"
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { useParams } from 'react-router-dom';
import { apiData } from '../Components/ContextApi';



const ProductDetails = () => {
  const product = useParams();
  const data = useContext(apiData);
  const singleProduct = data.filter((item)=> item.id == product.id)
  

  return (
    <section>
      <div className="container mx-auto">
        <div className="py-20">
          <PageHeading heading="Product Details" pageName="Product Details" />
        </div>
      {singleProduct.map((item)=>(
          <div className="flex items-center gap-10">
          <div className="flex gap-5 ">
            <div className="flex flex-col gap-5">
              <img src={BagSmall} alt="" />
              <img src={BagSmall2} alt="" />
              <img src={BagSmall3} alt="" />
            </div>
            <div>
              <img src={item.thumbnail} alt="" />
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl">
              {item.title}
            </h2>
            <div className="flex gap-2 text-[#FFC416]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p>({item.reviews.length})</p>
            </div>
            <div>
              <h6>
                ${item.price} <span className="text-primary line-through">${item.discountPercentage}</span>
              </h6>
              <h6>Color{item.color}</h6>
              <p>
                {item.description}
              </p>
            </div>
            <div className="flex gap-4">
              <p>Add to Cart</p>
              <FaHeart />
            </div>
            <div>
              <h6>Categories : {item.category} </h6>
              <h6>{item.tags}</h6>
              <div className="flex gap-3 items-center">
                <h6>Share</h6>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default ProductDetails
