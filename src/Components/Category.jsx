import React from 'react'
import AshSofa from '../assets/ashSofa.png'
import AshpinkSofa from '../assets/ashpinkSofa.png'
import WhiteSofa from '../assets/whiteSofa.png'

const Category = () => {

    
        const categoryList = [
          {
            title: "Mini LCW Chair",
            price:56,
            thumbnail: AshSofa
          },
          {
            title: "Mini LCW Chair",
            price:56,
            thumbnail: AshpinkSofa
          },
          {
            title: "Mini LCW Chair",
            price:56,
            thumbnail: WhiteSofa
          },
        
        ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="py-12">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#151875] py-12">
          Top Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryList.map((item, i) => (
              <div key={i}>
                <div className="flex flex-col text-center items-center justify-center">
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

export default Category
