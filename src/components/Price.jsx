'use client'

import React, { useEffect, useState } from 'react'

const Price = ({ price, id, options }) => {
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price])

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
      {/* Options Container */}
      <div className='flex gap-4'>
        {options?.map((option, index) => (
          <button
            className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md'
            key={option.title}
            style={{
              background: selected === index ? 'rgb(248 113 113)' : 'white',
              color: selected === index ? 'white' : 'red',
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity & Cart Container */}
      <div className='flex justify-between items-center '>
        {/* Quantity */}
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
          <span>Quantity</span>
          <div className='flex gap-4 items-center'>
            <button
              className=''
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              className=''
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* Cart Button */}
        <button className='uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500'>
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Price
