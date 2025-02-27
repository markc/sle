/**
 * ProductList Component
 * 
 * Displays a list of products with filtering and sorting options.
 */

import React, { useState } from 'react';
import productStore from '../store';
import { Link } from '@inertiajs/react';

const ProductList = () => {
  const [sortBy, setSortBy] = useState('name');
  const [filterCategory, setFilterCategory] = useState('all');
  
  // Get products from store
  const products = productStore.getState().products;
  const categories = productStore.getState().categories;
  
  // Filter and sort products
  const filteredProducts = products
    .filter(product => filterCategory === 'all' || product.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price-low') {
        return a.price - b.price;
      } else if (sortBy === 'price-high') {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="p-5">
      <div className="flex justify-end">
        <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>
      </div>
      
      <div className="flex flex-wrap gap-5 mb-8 p-4 bg-gray-50 dark:bg-[oklch(0.205_0_0)] rounded-lg">
        <div className="flex items-center">
          <label className="mr-2.5 font-medium">Category:</label>
          <select 
            className="py-2 px-3 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-[oklch(0.205_0_0)] dark:text-white min-w-[150px]"
            value={filterCategory} 
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center">
          <label className="mr-2.5 font-medium">Sort By:</label>
          <select 
            className="py-2 px-3 border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-[oklch(0.205_0_0)] dark:text-white min-w-[150px]"
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price (Low to High)</option>
            <option value="price-high">Price (High to Low)</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white dark:bg-[oklch(0.205_0_0)] rounded-lg shadow-sm dark:shadow-md overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-md">
            <div className="h-[200px] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="mt-0 mb-2 text-lg text-gray-800 dark:text-white">{product.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2.5">{product.categoryName}</p>
              <p className="font-bold text-lg text-gray-800 dark:text-[#38bdf8] mb-4">${product.price.toFixed(2)}</p>
              <Link 
                href={`/products/${product.id}`} 
                className="block w-full py-2 bg-[#3498db] hover:bg-[#2980b9] text-white rounded transition-colors text-center"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center p-8 bg-gray-50 dark:bg-[oklch(0.205_0_0)] rounded-lg text-gray-500 dark:text-gray-400">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
