import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 md:px-16 lg:px-24 xl:px-32 flex justify-between items-center">

      {/* Logo & Brand */}
      <Link href="/" className="flex items-center">
        <Image 
          src="/logo.png" // Replace with your logo path
          alt="Your Store Name"
          width={40} // Adjust as needed
          height={40}
        />
        <span className="ml-2 font-bold text-lg">Your Store Name</span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/product">Products</Link></li>
        <li><Link href="/about">About</Link></li>
        {/* Add more links as needed */}
      </ul>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/cart">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </Link>
        <Link href="/account" className="text-blue-500 hover:underline">Account</Link>
      </div>

    </nav>
  );
};

export default Nav;
