import React from 'react'

function Hero() {
  return (
    <section className='relative bg-purple-600 text-white mt-12 md:mt-15'>
        <div className='max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center px-6
        md:px-0 gap-7'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>Fresh <span
            className='text-orange-400'>Groceries</span> deliver to your doorstep</h1>
            <p className='text-lg mb-6'>Shop from our wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!</p>
            <div className='flex flex-wrap gap-4'>
                <button className='bg-white text-purple-600 hover:bg-gray-100 rounded-full px-3
                py-1 cursor-pointer'>Shop Now</button>
                <button className='text-white border-white bg-purple-900 hover:bg-blue-600
                rounded-full px-3 py-2 cursor-pointer'>Learn More</button>
            </div>
            </div>
            <div className='relative flex justify-center'>
                <div className='absolute inset-0  rounded-lg '>
                </div>
                <img src="/Hero1.png" alt="hero-image" />
            </div>
        </div>
    </section>
  )
}

export default Hero;
