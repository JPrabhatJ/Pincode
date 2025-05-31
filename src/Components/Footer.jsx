import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-purple-800 text-white py-12 px-4 md:px-0'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>Pincode</h3>
            <p className='mb-4'>Your one-stop shop for fresh groceries delivered to your doorstep.</p>
            <div className='mt-3'>
              <h3 className='font-medium mb-4'>Follow Us</h3>
              <div className='flex space-x-4'>
                <FaFacebook className='w-5 h-5 text-white cursor-pointer' />
                 <FaTwitter className="w-5 h-5 text-sky-500 cursor-pointer" />
                 <FaInstagram className="w-5 h-5 text-pink-600 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className=''>
              <h3 className='text-xl font-bold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li className=' cursor-pointer'>About Us</li>
                <li className=' cursor-pointer'>Contact Us</li>
                <li className=' cursor-pointer'>FAQ</li>
                <li className=' cursor-pointer'>Privacy Policy</li>
              </ul>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-4'>Contact Us</h3>
            <p className='mb-2'>123, Grocery mart, Food City, Gurgaon</p>
            <p className='mb-2'>Phone: (123) 456-7890</p>
            <p className='mb-2'>Email: info@pincode.io</p>
            </div>
        </div>
        <div className='mt-8 pt-8 border-t border-black-700 text-center'>
            <p>&copy; {new Date().getFullYear()}Pincode. All Rights Reserved</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer
