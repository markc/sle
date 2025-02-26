/**
 * ProductCategories Component
 * 
 * Displays a list of product categories with their associated products.
 */

import React from 'react';
import productStore from '../store';

const ProductCategories = () => {
  // Get categories and products from store
  const { categories, products } = productStore.getState();
  
  // Group products by category
  const productsByCategory = categories.map(category => {
    const categoryProducts = products.filter(product => product.category === category.id);
    return {
      ...category,
      products: categoryProducts
    };
  });

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6">Product Categories</h1>
      
      <div className="flex flex-col gap-10">
        {productsByCategory.map(category => (
          <div key={category.id} className="bg-white dark:bg-[oklch(0.205_0_0)] rounded-lg shadow-sm dark:shadow-md overflow-hidden">
            <div className="p-5 bg-gray-50 dark:bg-[oklch(0.205_0_0)] border-b border-gray-100 dark:border-gray-700">
              <h2 className="mt-0 mb-2.5 text-xl font-bold text-gray-800 dark:text-white">{category.name}</h2>
              <p className="text-gray-500 dark:text-gray-400 m-0">{category.description}</p>
            </div>
            
            <div className="p-5">
              {category.products.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
                  {category.products.map(product => (
                    <div key={product.id} className="bg-white dark:bg-[oklch(0.205_0_0)] rounded-lg shadow-sm dark:shadow-md overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-md">
                      <div className="h-[180px] overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="mt-0 mb-2 text-base text-gray-800 dark:text-white">{product.name}</h3>
                        <p className="font-bold text-base text-gray-800 dark:text-[#38bdf8] mb-4">${product.price.toFixed(2)}</p>
                        <button className="w-full py-2 bg-[#3498db] hover:bg-[#2980b9] text-white rounded transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="p-5 text-center text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-[oklch(0.205_0_0)] rounded">
                  No products in this category
                </p>
              )}
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-[oklch(0.205_0_0)] border-t border-gray-100 dark:border-gray-700 text-center">
              <button className="px-5 py-2 bg-transparent text-[#3498db] dark:text-[#38bdf8] border border-[#3498db] dark:border-[#38bdf8] rounded cursor-pointer transition-all hover:bg-[#3498db] hover:text-white">
                View All {category.name} Products
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {categories.length === 0 && (
        <div className="text-center p-12 bg-gray-50 dark:bg-[oklch(0.205_0_0)] rounded-lg text-gray-500 dark:text-gray-400 text-lg">
          <p>No categories found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;
