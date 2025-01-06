import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../Components/PageHeading";
import EcommerceItems from "../Components/EcommerceItems";
import { apiData } from "../Components/ContextApi";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import AllLogo from "../Components/AllLogo";
import { useDispatch } from "react-redux";
import { addToCart } from "../Components/slice/cartSlice";
import { ToastContainer, toast } from 'react-toastify';

const Shop = () => {
  let data = useContext(apiData);

  let [category, setCategory] = useState([]);
  let [brand, setBrand] = useState([]);
  let [price, setPrice] = useState([]);

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
    setBrand([...new Set(data.map((item) => item.brand))]);
    setPrice([...new Set(data.map((item) => item.price))]);
  }, [data]);

  let [categoryShow, setCategoryShow] = useState(false);
  let [brandShow, setBrandShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);

  let [cat, setCat] = useState([]);
  const handleCategory = (c) => {
    let filteredProducts = data.filter((item) => item.category == c);
    setCat(filteredProducts);
    setPriceItems([]);
  };

  let [priceItems, setPriceItems] = useState([]);
  const handlePricing = (value) => {
    let priceFilter = data.filter(
      (item) => item.price > value.low && item.price <= value.high
    );
    setPriceItems(priceFilter);
    setCat([]);
  };

  let [brandItem, setBrandItem] = useState([]);
  const handleBrand = (quality) => {
    let filterBrand = data.filter((item) => item.brand == quality);
    setBrandItem(filterBrand);
    setCat([]);
  };

  let [currentPage, setCurrentPage] = useState(1);
  let [perPage, setPerPage] = useState(25);

  let lastItemIndex = currentPage * perPage;
  let firstItemIndex = lastItemIndex - perPage;

  let perPageProduct = data.slice(firstItemIndex, lastItemIndex);
  // console.log(perPageProduct);

  let pageNumbers = Math.ceil(data.length / perPage);
  
  let numbers = [];
  for (let i = 1; i <= pageNumbers; i++) {
    numbers.push(i);
  }
  // console.log(numbers);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage !== pageNumbers) {
      setCurrentPage(currentPage + 1);
    }
  };

  // user er kache data pathate useDispatch use hoy
  let dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }));
    toast.success("added to Cart")
  };

  return (
    <div className="container mx-auto">
      <PageHeading heading="Shop Grid Default" pageName="Shop Grid Default" />
      <EcommerceItems />

      <div className="flex justify-around">
        <div className="w-[20%]">
          <div>
            <div className="flex items-center gap-1">
              <h5
                onClick={() => setCategoryShow(!categoryShow)}
                className="flex items-center gap-5 text-xl font-bold mb-4 text-[#181575] cursor-pointer"
              >
                Shop By Category <MdOutlineArrowDropDown />{" "}
              </h5>
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
              <h5
                onClick={() => setPriceShow(!priceShow)}
                className="flex items-center gap-5 text-xl font-bold mb-4 text-[#181575] cursor-pointer"
              >
                Shop by Price <MdOutlineArrowDropDown />{" "}
              </h5>
            </div>

            {priceShow && (
              <ul className="flex flex-col gap-6 mb-5">
                <li
                  className="px-5 py-2 text-[#181575] cursor-pointer capitalize hover:bg-primary duration-700 ease-in-out hover:text-white "
                  onClick={() => handlePricing({ low: 0.0, high: 10.0 })}
                >
                  $0.00 - $10.00
                </li>
                <li
                  className="px-5 py-2 text-[#181575] cursor-pointer capitalize hover:bg-primary duration-700 ease-in-out hover:text-white "
                  onClick={() => handlePricing({ low: 10.0, high: 20.0 })}
                >
                  $10.00 - $20.00
                </li>
                <li
                  className="px-5 py-2 text-[#181575] cursor-pointer capitalize hover:bg-primary duration-700 ease-in-out hover:text-white "
                  onClick={() => handlePricing({ low: 20.0, high: 100.0 })}
                >
                  $20.00 - $100.00
                </li>
                <li
                  className="px-5 py-2 text-[#181575] cursor-pointer capitalize hover:bg-primary duration-700 ease-in-out hover:text-white "
                  onClick={() => handlePricing({ low: 100.0, high: 1000.0 })}
                >
                  $100.00 - $1000.00
                </li>
              </ul>
            )}
          </div>
          <div className="flex items-center gap-1">
            <h5
              onClick={() => setBrandShow(!brandShow)}
              className="flex items-center gap-5 text-xl font-bold mb-4 text-[#181575] cursor-pointer"
            >
              Shop By Brand <MdOutlineArrowDropDown />{" "}
            </h5>
          </div>

          {brandShow && (
            <ul className="space-y-2 h-48 overflow-y-scroll">
              {brand.map((item) => (
                <li
                  className="px-5 py-2 text-[#181575] cursor-pointer  capitalize hover:bg-primary duration-700 ease-in-out hover:text-white"
                  onClick={() => handleBrand(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {cat.length > 0
            ? cat.map((item) => (
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
            : priceItems.length > 0
            ? priceItems.map((item) => (
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
              : brandItem.length > 0
              ? brandItem.map((item) => (
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
              
            : perPageProduct.map((item) => (
                <div className="  shadow-2xl group m-6">
                  <div className="relative bg-[#EBEAEE] flex flex-col sm:flex-row gap-3 items-center justify-center py-12 overflow-hidden">
                    <img className="w-48" src={item.thumbnail} alt="" />
                    <div className="flex py-4 gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 ">
                      <FaRegHeart className="text-primary hover:text-[#08D15F]" />
                      <LuShoppingCart className="text-primary hover:text-[#08D15F]" />
                      <MdOutlineZoomIn className="text-primary hover:text-[#08D15F]" />
                    </div>
                    <button className="absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] hover:bg-primary px-4 py-2 rounded-sm text-xs text-white">
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
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary text-white w-full py-1 hover:bg-[#08D15F] duration-700 ease-in-out"
                    >
                      Add to Cart
                    </button>
                    <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    
                     />

                  </div>
                </div>
              ))}
        </div>
      </div>
      <div>
        <ul className="flex items-center justify-center gap-5 cursor-pointer">
          <li onClick={handlePrevPage}>Prev</li>
          {numbers.map((item) => (
            <li
              className={`border-2 px-5 py-2 ${
                currentPage === item ? "bg-[#FB2E86] text-white " : ""
              }`}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </li>
          ))}
          <li onClick={handleNextPage}>Next</li>
        </ul>
      </div>
      <AllLogo />
    </div>
  );
};

export default Shop;
