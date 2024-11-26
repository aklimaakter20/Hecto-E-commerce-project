import React, { useContext, useEffect, useState } from 'react'
import PageHeading from '../Components/PageHeading'
import EcommerceItem from '../Components/EcommerceItem'
import { apiData } from '../Components/ContextApi'
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineZoomIn } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";


const Shop = () => {

  let data = useContext(apiData)

  let [category, setCategory] = useState([])
  let [brand, setBrand ] = useState([])
  
  useEffect(()=>{
    setCategory([...new Set(data.map((item)=>item.category))])
    setBrand([...new Set(data.map((item)=> item.brand))])
  }, [data])
  
  let [categoryShow, setCategoryShow ] = useState(false)
  let [brandShow, setBrandShow ] = useState(false)
  
  let [cat, setCat ] = useState([])

  const handleCategory = (c) => {
    let filteredProducts = data.filter((item)=> item.category == c)
    setCat(filteredProducts)

  }
  
  
  
  return (
    <div className='container mx-auto'>
      
      <PageHeading heading= 'Shop Grid Default' pageName = 'Shop Grid Default'/>
      <EcommerceItem />

      <div className='flex justify-around'>
      <div className='w-[20%]'>
        <div className='flex items-center gap-1'>

        <h2 onClick={()=>setCategoryShow(!categoryShow)} className='text-xl font-bold mb-4 text-[#181575] cursor-pointer'>Shop By Category </h2>
        
        <MdOutlineArrowDropDown className='text-[20px] text-[#181575]'  />
        </div>
        <div className='flex items-center gap-1'>

        <h2 onClick={()=>setBrandShow(!brandShow)} className='text-xl font-bold mb-4 text-[#181575] cursor-pointer'>Shop By Brand </h2>
        
        <MdOutlineArrowDropDown className='text-[20px] text-[#181575]'  />
        </div>


        {categoryShow && 
    <ul className='space-y-2 h-48 overflow-y-scroll'>
      {category.map((item) =>(
        <li onClick={()=>handleCategory(item)} className='px-5 py-2 text-[#181575] cursor-pointer capitalize hover:bg-primary duration-700 ease-in-out hover:text-white '>{item}</li>
      ))}
    </ul>
      }
           {brandShow && 
    <ul className='space-y-2 h-48 overflow-y-scroll'>
      {brand.map((item) =>(
        <li className='px-5 py-2 text-[#181575] cursor-pointer  capitalize hover:bg-primary duration-700 ease-in-out hover:text-white '>{item}</li>
      ))}
    </ul>
      }




      </div>
      <div className="w-[75%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {cat.length == 0 ?


        data.map((item)=>(
            <div className='  shadow-2xl group m-6'>
            <div className='relative bg-[#F6F7FB] flex flex-col sm:flex-row gap-3 items-center justify-center py-12 overflow-hidden'>
               
                <img className='w-48'  src={item.thumbnail} alt="" />
                <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                </div>
                <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
            </div>
            <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>{item.title}</h3>
                <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'></h4>
                <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>${item.price}</h6>
            </div>
        </div>
        
                                )) 
                    :   
                    
                    cat.map((item)=>(
                      <div className='  shadow-2xl group m-6'>
                      <div className='relative bg-[#F6F7FB] flex flex-col sm:flex-row gap-3 items-center justify-center py-12 overflow-hidden'>
                         
                          <img className='w-48'  src={item.thumbnail} alt="" />
                          <div className='flex gap-2 absolute -left-20 top-0 duration-1000 ease-in-out group-hover:left-10 '>
                          <FaRegHeart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                          <LuShoppingCart className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                          <MdOutlineZoomIn className='text-[#05E6B7] hover:text-[#2F1AC4]' />
                          </div>
                          <button className='absolute -bottom-16 group-hover:bottom-4 duration-1000 bg-[#08D15F] px-4 py-2 rounded-sm text-xs text-white'>View Details</button>
                      </div>
                      <div className='text-center py-5 group-hover:bg-[#151875] duration-700 ease-in-out group-hover:shadow-2xl'>
                          <h3 className='text-primary font-bold text-[18px] font-lato pb-2 group-hover:text-white'>{item.title}</h3>
                          <h4 className='font-sans text-[14px] pb-1 text-[#151875] group-hover:text-white'></h4>
                          <h6 className='font-sans text-[14px] text-[#151875] group-hover:text-white'>${item.price}</h6>
                      </div>
                  </div>
                  
                              ))}
         
                            
     </div>
      </div>
   
 
    </div>
  )
}

export default Shop
