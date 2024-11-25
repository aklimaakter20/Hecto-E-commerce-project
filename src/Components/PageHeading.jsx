import React from 'react'

const PageHeading = (props) => {
  return (
   <section className='bg-[#ebeaee] w-full py-20'>
    <div className="container mx-auto">
        <h2 className='text-2xl sm:text-3xl font-bold font-sans text-[#101750]'>{props.heading}</h2>
        <h4 className='text-[16px]'>Home. Pages. <span className='text-primary'>{props.pageName}</span> </h4>
    </div>
   </section>
  )
}

export default PageHeading
