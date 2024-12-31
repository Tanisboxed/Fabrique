import React from 'react'
import Image from 'next/image';
interface propsType {
    name: String;
    img: String;
    desc: String;
    price: number;
    cis: number;
    rating: number;
    nor: number;
}

const ProductCard: React.FC<propsType> = ({ name, img, desc, price, cis, rating, nor }) => {
    return (
        <div className='px-4 border border-offwhited rounded-xl max-w-[400px]'>
            <div>
                <Image className="w-full h-auto" src={img} width={200} height={300} alt={name} />
            </div>
        </div>

    )
}

export default ProductCard