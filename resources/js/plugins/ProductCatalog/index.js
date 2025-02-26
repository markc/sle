/**
 * ProductCatalog Plugin
 * 
 * Main entry point for the ProductCatalog plugin.
 * This file exports the plugin's components, routes, and any other
 * functionality that should be accessible to the core application.
 */

import routes from './routes';
// Import main components that should be exposed
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductCategories from './components/ProductCategories';

// Export plugin definition
export default {
  name: 'ProductCatalog',
  routes,
  components: {
    ProductList,
    ProductDetail,
    ProductCategories,
  },
  // Plugin initialization function
  initialize: (app) => {
    console.log('ProductCatalog plugin initialized');
    // Any initialization logic goes here
    // For example, registering global components, setting up store, etc.
  }
};
