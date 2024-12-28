import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { apiData } from "./ContextApi";

const Navbar = () => {
 
  let data = useContext(apiData)

  // for responsive
  
 let [menuShow, setMenuShow] = useState(false) 

  const handleMenu = () => {
    setMenuShow(!menuShow)
    
  }
console.log(menuShow);

  let [input, setInput] = useState("")
  let [searchFilteredProducts, setSearchFilteredProducts] = useState([])


  const handleInput = (e) => {
    if(e.target.value !== ""){

      let searchProducts = data.filter((item)=> item.title.toLowerCase().startsWith((e.target.value).toLowerCase()))
      setSearchFilteredProducts(searchProducts);

    } else{
    setSearchFilteredProducts([])
  }
    
  }

  return (
    <nav className="py-4 bg-green-300 z-9">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center ">
          <div>
            <img className="" src={Logo} alt="" />
          </div>
          <div className="">
            <ul className={`lg:flex lg:gap-10 lg:items-center lg:static  ${menuShow == true ?  'absolute top-16 left-0 duration-1000 ease-in-out w-full h-[300px] bg-primary text-center text-white z-20 p-6 ' : 'absolute top-16 -left-80 w-full '}`}>
              <li className="pb-2 hover:font-semibold lg:hover:text-primary hover:text-[18px] duration-700"><Link to = '/'>Home</Link></li>
              <li className="pb-2 hover:font-semibold lg:hover:text-primary hover:text-[18px] duration-700">Pages</li>
              <li className="pb-2 hover:font-semibold lg:hover:text-primary hover:text-[18px] duration-700">Products</li>
              <li className="pb-2 hover:font-semibold lg:hover:text-primary hover:text-[18px] duration-700">Blog</li>
              <li className="pb-2 hover:font-semibold lg:hover:text-primary hover:text-[18px] duration-700"><Link to = '/shop'>Shop</Link></li>
              {/* <li className="hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700"><Link to = '/shopList'>SList</Link></li> */}
              {/* <li className="hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700"><Link to = '/shopSideBar'>Sidebar</Link></li> */}
              {/* <li className="hover:font-semibold hover:text-primary hover:text-[18px] bg-white duration-700"><Link to = '/shoppingCart'>ShoppingCart</Link></li> */}

              <li className="pb-2 hover:font-semibold lg:hover:text-primary hover:text-[18px] duration-700">Contact</li>
              <li>      
                <div className="flex items-center justify-center  ">
                  <input onChange={handleInput} type="search" className="bg-transparent rounded-lg lg:w-56 w-36 h-10 border-2 outline-none pl-4"/>
                  
                  {searchFilteredProducts.length > 0 && 
                  
                  <div className="absolute top-12 z-30 left-0 ">
                    {searchFilteredProducts.map((item)=>(
                        <div className="flex flex-col gap-3 bg-white px-3 py-2 cursor-pointer hover:bg-[#FB2E86] hover:text-white duration-700 ease-in-out">
                          <h4 className="py-1">{item.title}</h4>
                          <img className="w-1/3 h-1/3 mx-auto" src={item.thumbnail} alt="" />
                          <h6 className="font-sans text-[14px]">
                      ${item.price}
                    </h6>
                        </div> 
                    ))}
                  </div>}

                  <div className=" bg-primary h-10 px-4 py-4 flex items-center justify-center">
                    <CiSearch className="text-white text-xl cursor-pointer" />
                  </div>
                </div>
                </li>
              </ul>
              </div>
        
                <div onClick={handleMenu} className="lg:hidden" >
                  {menuShow === true ? <RxCross2 /> : <FaBars/>}
                </div>
                      

        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
