import React from 'react';
import { CgClose } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../Redux/CartSlice'


const CartComp = ({ isOpen, onClose }) => {
  const { cart } = useSelector(store => store.cart);
  const dispatch = useDispatch()
  const updateQuantity = (cart, productId, action)=> {
    dispatch(setCart(   cart.map(item=> {
      if(item.id === productId){
        let newUnit = item.unit;
        if(action === "increase"){
          newUnit += 1;
        } else if (action === "decrease"){
           newUnit -= 1;
        }
        return newUnit > 0 ? {...item, unit: newUnit} : null;
      }
      return item;
    }).filter(item => item != null)
  ))
 
  }
  const totalPrice = cart.reduce((total, item) => total + item.price * item.unit, 0);

  return (
    <div
      className={`fixed overflow-y-scroll top-0 right-0 h-full w-[400px] bg-gray-100
        shadow-lg p-4 transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        transition-transform duration-300`}
    >
      <h2 className='text-xl px-4 font-bold mb-4 flex justify-between'>
        My Cart
        <button onClick={onClose} className='cursor-pointer'>
          <CgClose />
        </button>
      </h2>
      <div>
        <div className='space-y-4'>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className='flex items-center gap-4 p-2 bg-white rounded-md'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded border border-gray-200'
                />
                <div className='flex justify-between w-full items-center'>
                  <h3 className='text-sm line-clamp'>{item.name}</h3>
                  <p className='text-gray-600'>{item.quantity}</p>
                  <p className='text-gray-800'>
                    ₹{item.price}
                    <span className='line-through text-gray-500'>
                      {item.price + 10}
                    </span>
                  </p>
                </div>
                <div className='flex items-center justify-center text-xl font-semibold px-4 py-1 rounded-md gap-3 mt-2 bg-purple-600 text-white'>
                  <button className='cursor-pointer' onClick={()=>updateQuantity(cart, item.id, "decrease")}>-</button>
                  <span>{item.unit}</span>
                  <button className='cursor-pointer' onClick={()=>updateQuantity(cart, item.id, "increase")}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          {cart.length > 0 && (
            <div className='bg-white rounded-md p-4 mt-4 space-y-1'>
              <h1 className='text-gray-800 font-bold text-xl'>Bill Details</h1>
              <div className='flex justify-between items-center'>
                <h1 className='flex gap-1 items-center text-gray-700'>
                  <span>Items total</span>
                  <p>₹{totalPrice}</p>
                </h1>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='flex gap-1 items-center text-gray-700'>
                  <span>Delivery Charges</span>
                  <p className='text-purple-600'><span className='text-gray-600 line-through'>₹25</span> FREE</p>
                </h1>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='flex gap-1 items-center text-gray-700'>
                  <span>Handling Charges</span>
                  <p className='text-purple-600'><span className='text-gray-600'>₹5</span></p>
                </h1>
              </div>
              <div className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>Grand Total</h1>
                <p className='font-semibold text-lg'>₹{totalPrice + 5}</p>
              </div>
            </div>
          )}
        </div>
        {
          cart.length > 0 && (
            <div className='bg-white rounded-md p-4 mt-3 mb-10'>
              <h1 className='font-semibold'>Cancellation Policy</h1>
              <p className='text-sm text-gray-700 mt-1'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
            </div>
          )
        }
      </div>
   {cart.length > 0 && (
        <div className='bg-white p-5 rounded-md'>
          <div className='bg-purple-600 text-white w-full py-2 px-3 
            rounded-md flex justify-between items-center cursor-pointer'>
            <div>
              <h1 className='fot-semibold'>₹{totalPrice + 5}</h1>
              <h1 className='text-gray-100'>TOTAL</h1>
            </div>
            <div className='flex gap-1 items-center font-semibold'>
              <h1 className='text-lg'>Login to Proceed</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComp;
