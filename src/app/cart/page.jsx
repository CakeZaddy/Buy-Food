import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <section className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* Product Container */}
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:p-20 xl:p-40 '>
        {/* Single Item (First item has pt) */}
        <div className='flex items-center justify-between mb-4 pt-10  '>
          <Image src='/temporary/p1.png' alt='piz' height={100} width={100} />
          <div className=''>
            <h1 className='uppercase font-bold text-xl'>Sicilian</h1>
            <span className=''>Large</span>
          </div>
          <div className=''>
            <h2 className='font-bold'>79.90</h2>
            <span className='cursor-pointer'>X</span>
          </div>
        </div>
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='piz' height={100} width={100} />
          <div className=''>
            <h1 className='uppercase font-bold text-xl'>Sicilian</h1>
            <span className=''>Large</span>
          </div>
          <div className=''>
            <h2 className='font-bold'>79.90</h2>
            <span className='cursor-pointer'>X</span>
          </div>
        </div>
        <div className='flex items-center justify-between mb-4 '>
          <Image src='/temporary/p1.png' alt='piz' height={100} width={100} />
          <div className=''>
            <h1 className='uppercase font-bold text-xl'>Sicilian</h1>
            <span className=''>Large</span>
          </div>
          <div className=''>
            <h2 className='font-bold'>79.90</h2>
            <span className='cursor-pointer'>X</span>
          </div>
        </div>
      </div>
      {/* Payment Container */}
      <div className='h-1/2 p-4 bg-fuchsia-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:p-20 xl:p-40 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$81.70</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Service Charge</span>
          <span className=''>0.00</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery</span>
          <span className='text-green-700'>Free</span>
        </div>
        <hr className='my-2 ' />
        <div className='flex justify-between'>
          <span className=''>Total(+ VAT)</span>
          <span className='font-bold'>81.70</span>
        </div>
        <button className='bg-red-500 text-white p-3 text-center rounded w-1/2 self-end'>
          CHECKOUT
        </button>
      </div>
    </section>
  )
}

export default CartPage
