import React, { useState } from 'react'

const AddToCart = () => {

  // State to mange item quantity
  const [quantity, setQuantity] = useState(1)

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  // Function to decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1)
    }
  }
  return (
    <div className='d-flex flex-row align-items-start justify-content-center gap-3 w-100'>
      {/* Quantity Control Buttons */}
      <div className='d-flex flex-row align-items-center justify-content-center'>
        <button className='px-3 py-1 btn border rounded-1 fs-5' onClick={decreaseQuantity}>-</button>
        <button className='px-3 py-1 btn border rounded-1 fs-5'>{quantity}</button>
        <button className='px-3 py-1 btn border rounded-1 fs-5' onClick={increaseQuantity}>+</button>
      </div>
      {/* Add To Cart Button */}
      <button className='py-1 btn rounded-1 bg-primary text-white w-100 fs-5'>Add To Cart</button>
    </div>
  )
}

export default AddToCart
