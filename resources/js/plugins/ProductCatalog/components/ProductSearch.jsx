/**
 * ProductSearch Component
 * 
 * Provides advanced search functionality for products.
 */

import React, { useState } from 'react';
import productStore from '../store';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  // Get products and categories from store
  const { products, categories } = productStore.getState();
  
  const handleCategoryToggle = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Filter products based on search criteria
    const results = products.filter(product => {
      // Filter by search query (name or description)
      const matchesQuery = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by price range
      const matchesMinPrice = priceRange.min === '' || product.price >= parseFloat(priceRange.min);
      const matchesMaxPrice = priceRange.max === '' || product.price <= parseFloat(priceRange.max);
      
      // Filter by selected categories
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(product.category);
      
      return matchesQuery && matchesMinPrice && matchesMaxPrice && matchesCategory;
    });
    
    setSearchResults(results);
    setHasSearched(true);
  };
  
  const handleReset = () => {
    setSearchQuery('');
    setPriceRange({ min: '', max: '' });
    setSelectedCategories([]);
    setSearchResults([]);
    setHasSearched(false);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-6">Product Search</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
        <div className="bg-white dark:bg-[#1e293b] rounded-lg shadow-sm dark:shadow-md p-5">
          <form onSubmit={handleSearch}>
            <div className="mb-6">
              <label className="block mb-2.5 font-medium text-gray-800 dark:text-white">Search:</label>
              <input 
                type="text" 
                placeholder="Search by name or description" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2.5 border border-gray-200 dark:border-gray-700 rounded text-sm dark:bg-[#1e293b] dark:text-white"
              />
            </div>
            
            <div className="mb-6">
              <label className="block mb-2.5 font-medium text-gray-800 dark:text-white">Price Range:</label>
              <div className="flex items-center gap-2.5">
                <input 
                  type="number" 
                  placeholder="Min" 
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                  className="flex-1 p-2.5 border border-gray-200 dark:border-gray-700 rounded text-sm dark:bg-[#1e293b] dark:text-white"
                />
                <span className="text-gray-500 dark:text-gray-400">to</span>
                <input 
                  type="number" 
                  placeholder="Max" 
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                  className="flex-1 p-2.5 border border-gray-200 dark:border-gray-700 rounded text-sm dark:bg-[#1e293b] dark:text-white"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block mb-2.5 font-medium text-gray-800 dark:text-white">Categories:</label>
              <div className="flex flex-col gap-2.5 max-h-[200px] overflow-y-auto pr-2.5">
                {categories.map(category => (
                  <label key={category.id} className="flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      className="mr-2.5"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleCategoryToggle(category.id)}
                    />
                    {category.name}
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2.5">
              <button 
                type="submit" 
                className="px-5 py-2.5 bg-[#3498db] hover:bg-[#2980b9] text-white rounded text-sm transition-colors"
              >
                Search
              </button>
              <button 
                type="button" 
                className="px-5 py-2.5 bg-gray-100 dark:bg-[#334155] hover:bg-gray-200 dark:hover:bg-[#3a4556] text-gray-800 dark:text-white rounded text-sm transition-colors"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-white dark:bg-[#1e293b] rounded-lg shadow-sm dark:shadow-md p-5">
          <h2 className="mt-0 mb-5 text-xl font-medium text-gray-800 dark:text-white border-b border-gray-100 dark:border-gray-700 pb-2.5">
            Search Results
          </h2>
          
          {hasSearched && searchResults.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
              {searchResults.map(product => (
                <div key={product.id} className="bg-white dark:bg-[#1e293b] rounded-lg shadow-sm dark:shadow-md overflow-hidden transition-all hover:translate-y-[-5px] hover:shadow-md">
                  <div className="h-[180px] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mt-0 mb-2 text-base text-gray-800 dark:text-white">{product.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                      {categories.find(c => c.id === product.category)?.name}
                    </p>
                    <p className="font-bold text-base text-gray-800 dark:text-[#38bdf8] mb-4">${product.price.toFixed(2)}</p>
                    <button className="w-full py-2 bg-[#3498db] hover:bg-[#2980b9] text-white rounded transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : hasSearched ? (
            <div className="text-center py-10 px-5 text-gray-500 dark:text-gray-400">
              <p>No products found matching your search criteria.</p>
            </div>
          ) : (
            <div className="text-center py-10 px-5 bg-gray-50 dark:bg-[#1e293b] rounded text-gray-500 dark:text-gray-400">
              <p>Use the search filters to find products.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
