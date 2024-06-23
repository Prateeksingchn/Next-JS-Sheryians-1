import Link from 'next/link';
import React from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='bg-emerald-500 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center py-5 px-6 md:px-12'>
        <div className='flex items-center'>
          <h1 className='text-white text-2xl font-bold'>Sher</h1>
        </div>
        
        <div className='flex items-center space-x-4'>
          <div className='relative'>
            <input
              type='text'
              className='px-4 py-2 rounded-full text-gray-800'
              placeholder='Search...'
            />
            <FaSearch className='absolute right-3 top-3 text-gray-600' />
          </div>
          
          <div className='flex space-x-6'>
            <Link href="/" className='text-white text-lg hover:text-gray-200'>
              Home
            </Link>
            <Link href="/product" className='text-white text-lg hover:text-gray-200'>
              Product
            </Link>
            <Link href="/about" className='text-white text-lg hover:text-gray-200'>
              About
            </Link>
          </div>
          
          <Link href="/cart" className='relative text-white text-lg hover:text-gray-200'>
            <FaShoppingCart />
            <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1'>3</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
