import Link from 'next/link'
import React from 'react'
import { BsSearch } from  "react-icons/bs"
import { LuShoppingCart } from "react-icons/lu";
import { PiUserCircleBold } from "react-icons/pi";

const HeaderMain = () => {
  return (
    <div className="border-b border-gray-200 py-6">
        <div className="container sm:flex justify-between items-center">
            <div className="text-center sm:text-left text-3xl font-bold font-icf text-black ">FABRIQUE.CO</div>
            <nav className="hidden sm:flex space-x-4">
                <Link href="#" className="text-black hover:text-gray-800">Shop</Link>
                <Link href="#" className="text-black hover:text-gray-800">On Sale</Link>
                <Link href="#" className="text-black hover:text-gray-800">New Arrivals</Link>
                <Link href="#" className="text-black hover:text-gray-800">Brands</Link>
            </nav>
            <div className='flex items-center relative'>
                <input className='bg-gray-200 border-gray-200 border p-2 px-4 rounded-3xl w-full' type="text" placeholder="Search for products..." />
                <BsSearch className="absolute right-0 top-0 mr-4 mt-3 text-gray-400" size={20}/> 
            </div>
            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                <div className="relative">
                    <LuShoppingCart />
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                        0
                    </div>
                </div>
                <div className="relative">
                    <PiUserCircleBold />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderMain