"use client";

import React, { useState } from 'react';

const ProductImageGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="mb-6">
      <img src={mainImage} alt="Main product image" className="w-full h-64 object-contain mb-4 rounded-lg" />
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Product image ${index + 1}`} 
            className="w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-75 transition duration-300"
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

const ProductDetails = ({ name, description, price, rating }) => (
  <div>
    <h1 className="text-3xl font-bold mb-2">{name}</h1>
    <div className="flex items-center mb-4">
      <div className="flex text-yellow-400 mr-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-gray-600">{rating} out of 5 stars</span>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <p className="text-2xl font-bold text-blue-600 mb-4">${price.toFixed(2)}</p>
    <button className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
      Add to Cart
    </button>
  </div>
);

const RelatedProducts = ({ products }) => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold mb-4">Related Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProductPage = () => {
  // This would typically come from a database or API
  const productData = {
    name: "Premium Wireless Headphones",
    images: [
      "https://i.pinimg.com/236x/e9/05/c5/e905c536c865d8b9c93d184aef1e45ec.jpg",
      "https://i.pinimg.com/236x/06/57/22/065722222ce2932964520df44e8df106.jpg",
      "https://i.pinimg.com/236x/31/ce/37/31ce3761d3f7fa60948da57340365ee2.jpg",
    ],
    description: "Experience crystal-clear audio with our premium wireless headphones. Featuring noise-cancellation technology and long battery life, these headphones are perfect for music lovers and professionals alike.",
    price: 199.99,
    rating: 4.5,
  };

  const relatedProducts = [
    { name: "Wireless Earbuds", price: 89.99, image: "https://i.pinimg.com/236x/86/23/d3/8623d337aea7822effed7b65689ba80e.jpg" },
    { name: "Bluetooth Speaker", price: 129.99, image: "https://i.pinimg.com/236x/6e/3a/7e/6e3a7e200cdc82dfaca423b2dab58cb0.jpg" },
    { name: "Gaming Headset", price: 149.99, image: "https://i.pinimg.com/236x/27/d2/5b/27d25b0298361a0a38f7e1aeb4ddd4ea.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProductImageGallery images={productData.images} />
        <ProductDetails 
          name={productData.name}
          description={productData.description}
          price={productData.price}
          rating={productData.rating}
        />
      </div>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
};

export default ProductPage;