import React from 'react'
import AshpinkSofa from '../assets/ashpinkSofa.png'

import Redwhitesofa from '../assets/redwhitesofa.png'
import Redsofa from '../assets/redsofa.png'
import Blackredsofa from '../assets/blackredsofa.png'


const Trending = () => {

    
        const categoryList = [
          {
            title: "Cantilever chair",
            price:26.00 ,
            thumbnail: AshpinkSofa
          },
          {
            title: "Mini LCW Chair",
            price:56,
            thumbnail: Redwhitesofa
          },
          {
            title: "Cantilever chair",
            price:26.00 ,
            thumbnail: Redsofa
          },
          {
            title: "Mini LCW Chair",
            price:56,
            thumbnail: Blackredsofa
          },
        
        ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12 font-lato">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#151875] py-12">
          Trending Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4                                items-center justify-between">
            {categoryList.map((item, i) => (
              <div key={i}>
                <div className="flex flex-col text-center items-center justify-around">
                  <img className="pb-2" src={item.thumbnail} alt="" />
                  <h3 className="text-xl text-[#151875] font-bold pb-2">{item.title}</h3>
                  <p className="text-xs text-[#928ab5] font-lato w-40 leading-5">$ {item.price} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </section>
  )
}

export default Trending
