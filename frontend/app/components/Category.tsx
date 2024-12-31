import React from 'react'
import Image from 'next/image'
const Category = () => {
    const categories = [
        {title: 'Casual', image: '/casual-style.png'},
        {title: 'Formal', image: '/formal-style.png'},
        {title: 'Footwear',image: '/footwear.jpg'},
        {title:'Asscessories', image: '/asscessories.png'}
    ]
  return (
    <section className='relative bg-white py-16'>
        <div className='container mx-auto px-4 md:px-8'>
            <div className='bg-offwhited rounded-3xl p-8 md:p-12'>
                <h2 className='text-3xl sm:text-4xl font-bold text-center mb-12'>
                    BROWSE BY CATEGORIES
                </h2>
                <div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {categories.map((category, index) => (
                <div 
                key={index} 
                className='relative group cursor-pointer overflow-hidden rounded-lg'
                >
                <div className='aspect-[4/3] relative'>
                    <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className='object-cover transition-transform duration-300 group-hover:scale-105'
                    />
                </div>
                <div className='absolute bottom-6 left-6'>
                    <h3 className='text-xl sm:text-4xl font-semibold text-black'>
                    {category.title}
                    </h3>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Category