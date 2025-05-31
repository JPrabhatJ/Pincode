import React, { useState } from 'react';
import { products } from '../Utils/Data';
import ProductCard from '../Components/ProductCard';
import { FaFilter } from 'react-icons/fa';

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className='mt-16 max-w-6xl mx-auto flex flex-col lg:gap-6 my-7 lg:mt-28 mt-24 h-max'>
      <div className='col-span1 p-4 bg-gray-100 h-max rounded-lg fixed w-[280px] mb-10 hidden md:block ml-1'>
        <h2 className='text-lg font-semibold mb-4'>Filters</h2>
        <input
          placeholder='Searching....'
          className='mb-4 bg-white p-2 w-full rounded-md'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className='w-full p-2 border rounded mb-4'
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
        </select>
        <div className='mb-4'>
          <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
        </div>
        <button className='bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer'
        onClick={()=>{setSearch(''); setCategory(''); setPriceRange([0,500])}}
        >Reset Filters</button>
      </div>
      {
        filteredProducts.length > 0 ? (
              <div className='col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[300px] px-4 md:px-0 mt-6 md:mt-0'>
        {
          filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })
        }
      </div>
        ) : (
          <div className='lg:ml-[300px] flex justify-center'>
            <img src='/empty.jpg' alt="empty" className='w-[500px]' />
            </div>
        )
      }
  
    </div>
  );
};

export default Shop;
