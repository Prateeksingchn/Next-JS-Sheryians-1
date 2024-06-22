"use client";

import React from "react";


const HeroSection = () => (
  <section className="bg-blue-600 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-5xl font-bold mb-2 mt-6 text-black">Summer Sale</h1>
      <p className="text-xl mb-8">Up to 50% off on selected items</p>
      <a href="#" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Shop Now</a>
    </div>
  </section>
);

const ProductCard = ({ name, price, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={name} className="w-full h-80 object-contain" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">${price}</p>
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Add to Cart</button>
    </div>
  </div>
);

const FeaturedProducts = () => (
  <section className="py-12 bg-gray-100">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold mb-20 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard name="Classic T-Shirt" price="29.99" imageUrl="https://i.pinimg.com/236x/6c/9f/a5/6c9fa5771260189715a7fedb50bacede.jpg" />
        <ProductCard name="Denim Jeans" price="59.99" imageUrl="https://i.pinimg.com/236x/f2/de/da/f2deda46c89f483838eb3b0be88fee80.jpg" />
        <ProductCard name="Sneakers" price="79.99" imageUrl="https://i.pinimg.com/236x/b7/2c/fa/b72cfa229ecc0a0fa7294db641ac69e8.jpg" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">ShopNow</h3>
          <p className="text-gray-400">Your one-stop shop for all your needs.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
        © 2024 ShopNow. All rights reserved.
      </div>
    </div>
  </footer>
);

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default Page;