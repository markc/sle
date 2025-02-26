/**
 * ProductDetail Component
 * 
 * Displays detailed information about a specific product.
 */

import React, { useState } from 'react';
import productStore from '../store';

const ProductDetail = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  
  // Get the product by ID from the store
  const products = productStore.getState().products;
  const product = products.find(p => p.id === parseInt(productId));
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // In a real implementation, we would dispatch an action to add to cart
  };

  if (!product) {
    return <div className="text-center p-12 bg-gray-50 dark:bg-[#1e293b] rounded-lg text-gray-500 dark:text-gray-400 text-lg">Product not found</div>;
  }

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
        <div className="flex flex-col">
          <div className="w-full h-[400px] overflow-hidden rounded-lg mb-4">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-2.5 overflow-x-auto pb-2.5">
            {/* In a real implementation, we would have multiple images */}
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-20 h-20 object-cover rounded opacity-100 border-2 border-[#3498db] cursor-pointer" 
            />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-20 h-20 object-cover rounded opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
            />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-20 h-20 object-cover rounded opacity-70 hover:opacity-100 transition-opacity cursor-pointer" 
            />
          </div>
        </div>
        
        <div>
          <h1 className="mt-0 mb-2.5 text-2xl font-bold text-gray-800 dark:text-white">{product.name}</h1>
          <p className="text-gray-500 dark:text-gray-400 text-base mb-4">{product.categoryName}</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-[#38bdf8] mb-5">${product.price.toFixed(2)}</p>
          
          <div className="mb-6">
            <h3 className="text-lg mb-2.5 text-gray-800 dark:text-white">Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg mb-2.5 text-gray-800 dark:text-white">Specifications</h3>
            <ul className="list-none p-0 m-0">
              {product.specifications && product.specifications.map((spec, index) => (
                <li key={index} className="mb-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                  <span className="font-medium text-gray-600 dark:text-gray-200">{spec.name}:</span> {spec.value}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <div className="flex items-center">
              <label className="mr-2.5 font-medium">Quantity:</label>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={handleQuantityChange} 
                className="w-[60px] p-2 border border-gray-200 dark:border-gray-700 rounded text-center dark:bg-[#1e293b] dark:text-white"
              />
            </div>
            
            <button 
              className="px-5 py-2.5 bg-[#3498db] hover:bg-[#2980b9] text-white rounded text-base transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-5">
          <button className="py-2.5 px-5 bg-transparent border-none border-b-3 border-[#3498db] cursor-pointer text-base font-medium text-[#3498db]">
            Details
          </button>
          <button className="py-2.5 px-5 bg-transparent border-none border-b-3 border-transparent cursor-pointer text-base font-medium text-gray-500 dark:text-gray-400 hover:text-[#3498db]">
            Reviews
          </button>
          <button className="py-2.5 px-5 bg-transparent border-none border-b-3 border-transparent cursor-pointer text-base font-medium text-gray-500 dark:text-gray-400 hover:text-[#3498db]">
            Related Products
          </button>
        </div>
        
        <div className="py-5">
          <div className="block">
            <h3 className="text-lg font-medium mb-2.5">Product Details</h3>
            <p>{product.detailedDescription || product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
