import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../Components/PageHeading";
import EcommerceItems from "../Components/EcommerceItems";
import { apiData } from "../Components/ContextApi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import AllLogo from "../Components/AllLogo";

const Shop = () => {
  let data = useContext(apiData);

  let [category, setCategory] = useState([]);
  let [brand, setBrand] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
    setBrand([...new Set(data.map((item) => item.brand))]);
  }, [data]);

  let [categoryShow, setCategoryShow] = useState(false);
  let [brandShow, setBrandShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false)

  let [cat, setCat] = useState([]);

  

  let [priceItems, setPriceItems] = useState([])
  const handlePricing = (value) => {
    let priceFilter =  data.filter((item)=> item.price > value.low && item.price <= value.high)
    priceItems(priceFilter)
    setCat([])
    
  }

  const handleCategory = (c) => {
    let filteredProducts = data.filter((item) => item.category == c);
    setCat(filteredProducts);
    setPriceItems([])
  };

  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(15)

  let lastItemIndex = currentPage * perPage;
  let firstItemIndex = lastItemIndex - perPage;

  let perPageProduct = data.slice(firstItemIndex, lastItemIndex)
  // console.log(perPageProduct);
  



  let pageNumbers = Math.ceil(data.length / perPage);
  // console.log(pageNumbers);
  

  let numbers = useState([])
  for(let i = 1 ; i <= pageNumbers; i++){
  numbers.push(i)   
    
  }
  // console.log(numbers);
  const handlePrevPage = ()=>{
    if(currentPage > 1 ){
      setCurrentPage(currentPage - 1)

    }
  }
  const handleNextPage =()=> {
      if(currentPage !== pageNumbers){
        setCurrentPage(currentPage + 1)

      }

  }


  return (
    <div className="container mx-auto">
      <PageHeading heading="Shop Grid Default" pageName="Shop Grid Default" />
      <EcommerceItems />

      <div className="flex justify-around">
        <div className="w-[20%]">
          <div>
            <div className="flex items-center gap-1">
              <h2
                onClick={() => setCategoryShow(!categoryShow)}
                className="text-xl font-bold mb-4 text-[#181575] cursor-pointer"
              >
                Shop By Category{" "}
              </h2>
            </div>

            {categoryShow && (
              <ul className="space-y-2 h-48 overflow-y-scroll">
                {category.map((item) => (
                  <li
                    onClick={() => handleCategory(item)}
                    className="px-5 py-2 text-[#181575] cursor-pointer capitalize hover:bg-primary duration-700 ease-in-out hover:text-white "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
          <div className="flex items-center gap-1">
              <h2
                onClick={() => setPriceShow(!priceShow)}
                className="text-xl font-bold mb-4 text-[#181575] cursor-pointer"
              >
                Shop by Price{" "}
              </h2>
            </div>

            {priceShow && (
              <ul className="flex flex-col gap-6 mb-5">
                <li onClick={() => handlePricing({low:0.00, high: 10.00})}>$0.00 - $10.00</li>
                <li onClick={() => handlePricing({low:10.00, high: 20.00})}>$10.00 - $20.00</li>
                <li onClick={() => handlePricing({low:20.00, high: 100.00})}>$20.00 - $100.00</li>
                <li onClick={() => handlePricing({low:100.00, high: 1000.00})}>$100.00 - $1000.00</li>
               

              </ul>
            )}
          </div>
          <div className="flex items-center gap-1">
            <h2
              onClick={() => setBrandShow(!brandShow)}
              className="text-xl font-bold mb-4 text-[#181575] cursor-pointer"
            >
              Shop By Brand{" "}
            </h2>

            <MdOutlineArrowDropDown className="text-[20px] text-[#181575]" />
          </div>

          {brandShow && (
            <ul className="space-y-2 h-48 overflow-y-scroll">
              {brand.map((item) => (
                <li className="px-5 py-2 text-[#181575] cursor-pointer  capitalize hover:bg-primary duration-700 ease-in-out hover:text-white ">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">

          {cat.length > 0 ? 
             cat.map((item) => (
                <div className="  shadow-2xl group m-6">
                  <div className="relative bg-[#F6F7FB] flex flex-col sm:flex-row gap-3 items-center justify-center py-12 overflow-hidden">
                    <img className="w-48" src={item.thumbnail} alt="" />
                    <div className="flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 ">
                      <FaRegHeart className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                      <LuShoppingCart className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                      <MdOutlineZoomIn className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                    </div>
                    <button className="absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white">
                      View Details
                    </button>
                  </div>
                  <div className="text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl">
                    <h3 className="text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white">
                      {item.title}
                    </h3>
                    <h4 className="font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white"></h4>
                    <h6 className="font-sans text-[14px] text-[#151875] group-hover:text-white">
                      ${item.price}
                    </h6>
                  </div>
                </div>
              ))

              :
              priceItems.length > 0 ?
              priceItems.map((item)=>(
                <div className="  shadow-2xl group m-6">
                  <div className="relative bg-[#F6F7FB] flex flex-col sm:flex-row gap-3 items-center justify-center py-12 overflow-hidden">
                    <img className="w-48" src={item.thumbnail} alt="" />
                    <div className="flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 ">
                      <FaRegHeart className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                      <LuShoppingCart className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                      <MdOutlineZoomIn className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                    </div>
                    <button className="absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white">
                      View Details
                    </button>
                  </div>
                  <div className="text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl">
                    <h3 className="text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white">
                      {item.title}
                    </h3>
                    <h4 className="font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white"></h4>
                    <h6 className="font-sans text-[14px] text-[#151875] group-hover:text-white">
                      ${item.price}
                    </h6>
                  </div>
                </div>
              ))
              :
              perPageProduct.map((item) => (
                <div className="  shadow-2xl group m-6">
                  <div className="relative bg-[#F6F7FB] flex flex-col sm:flex-row gap-3 items-center justify-center py-12 overflow-hidden">
                    <img className="w-48" src={item.thumbnail} alt="" />
                    <div className="flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 ">
                      <FaRegHeart className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                      <LuShoppingCart className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                      <MdOutlineZoomIn className="text-[#05E6B7] hover:text-[#2F1AC4]" />
                    </div>
                    <button className="absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white">
                      View Details
                    </button>
                  </div>
                  <div className="text-center py-5  duration-700 ease-in-out group-hover:shadow-2xl">
                    <h3 className="text-primary font-bold text-[18px] font-lato pb-2 ">
                      {item.title}
                    </h3>
                    <h4 className="font-sans text-[14px] pb-1 text-[#151875] "></h4>
                    <h6 className="font-sans text-[14px] text-[#151875] ">
                      ${item.price}
                    </h6>
                    <button className="bg-primary text-white w-full py-2">Add to Cart</button>

                  </div>
                </div>
              ))}
              
        </div>
     
      </div>
      <div>
        <ul className="flex items-center justify-center gap-5">
          <li onClick={handlePrevPage}>Prev</li>
        {numbers.map((item)=>(
           <li className={`border-2 px-5 py-2 ${currentPage === item ? "bg-[#FB2E86] text-white" : ""}`} onClick={()=>setCurrentPage(item)}>{item}</li>
          ))}
          <li onClick={handleNextPage}>Next</li>
        </ul>
         
        </div>
      <AllLogo />
    </div>
  );
};

export default Shop;
