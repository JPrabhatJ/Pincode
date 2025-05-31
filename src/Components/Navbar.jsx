import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartComp from './CartComp';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {cart} = useSelector(store => store.cart)
  const onClose = () => {
    setIsOpen(false);
  };
  isOpen ? document.body.style.overflow = "hidden": document.body.style.overflow = "auto"

  return (
    <div>
      <div
        className='mx-auto flex justify-between items-center px-4 py-3 fixed top-0 z-20 bg-purple-100
      w-full border border-gray-100 shadow-xl lg:px-[180px]'
      >
        <Link to={'/'}>
          <img src='src/assets/new navpng.png' alt='Logo' className='md:w-36 w-100 h-15 object-contain' />
        </Link>
        <nav className='flex gap-5'>
          <ul className='text-xl font-semibold flex items-center gap-7 hidden md:flex'>
            <Link to={'/'}>
              <li>Home</li>
            </Link>
            <Link to={'/shop'}>
              <li>Shop</li>
            </Link>
            <Link to={'/about'}>
              <li>About</li>
            </Link>
            <Link to={'/contact'}>
              <li>Contact</li>
            </Link>
          </ul>
          <Link className='relative' onClick={() => setIsOpen(true)}>
            <ShoppingCart className='w-6 h-6' />
            <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
              {cart.length}
            </span>
          </Link>
        </nav>
      </div>
{
  isOpen && (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black/70 z-40'
      onClick={() => setIsOpen(false)}
    ></div>
  )
}
{<CartComp isOpen={isOpen} onClose={onClose} />}
</div>
);
};

export default Navbar;
