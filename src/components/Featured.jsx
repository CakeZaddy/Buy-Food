import Image from 'next/image'
import React from 'react'
import { featuredProducts } from '../data'

const Featured = () => {
  return (
    <section className='w-screen overflow-x-auto scrollbar-none text-red-500 '>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single Item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className='w-screen  h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'
          >
            {/* Image Container */}
            {item.img && (
              <div className='relative flex-1 w-full'>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className='object-contain hover:rotate-[60deg] transition-all duration-500'
                />
              </div>
            )}
            {/* Text Container */}
            <div className='flex-1 justify-center flex flex-col items-center text-center gap-4'>
              <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>
                {item.title}
              </h1>
              <p className='p-4 2xl:p-8'>{item.desc}</p>
              <span className='text-xl font-bold'>{item.price}</span>
              <button className='bg-red-500 text-white p-2 rounded-md'>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured
