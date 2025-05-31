import React from 'react';
import fruits from '/fruits.png'
import vegetabels from '/vegetabels.png';
import dairy from '/dairy.png';
import bakery from '/bakery.png';
import meat from '/meat.png';
import beverages from '/beverages.png';
import CategoryCard from './CategoryCard';


const categoryItems = [
  {
    name: "Fruits",
    image: fruits
  },
    {
    name: "vegetabels",
    image: vegetabels
  },
    {
    name: "Dairy",
    image: dairy
  },
    {
    name: "Bakery",
    image: bakery
  },
    {
    name: "Meat",
    image: meat
  },
    {
    name: "Beverages",
    image: beverages
  },
];

const Category = () => {
  return (
    <section className='py-12 bg-gray-50 px-6 md:px-0'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-8'>Shop By Category </h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
                {
                    categoryItems.map((item, index)=> {
                        return <CategoryCard key={index} name={item.name} image={item.image} />
                    })
                }
            </div>
        </div>

    </section>
  
  );
};

export default Category;
