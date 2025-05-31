import React from 'react'

const  CategoryCard = ({name, image}) => {
  return (
    <div className='overflow-hidden transition-all hover: md border border-gray-200
    rounded-xl'>
        <div className=''>
            <div className='aspect-square relative bg-gray-200'>
                <img src={image} alt={name} className='object-cover w-full h-full'/>
            </div>
            <div className='p-4 text-center'>
                <h3 className='font-medium'>{name}</h3>
            </div>
        </div>

    </div>
  )
}

export default CategoryCard;