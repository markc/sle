/**
 * ProductCatalog Routes
 * 
 * Defines all routes for the ProductCatalog plugin.
 * These routes will be imported by the core router.
 */

// Import components
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductCategories from './components/ProductCategories';
import ProductSearch from './components/ProductSearch';

// Define routes
const routes = [
  {
    path: '/products',
    component: ProductList,
    name: 'products.list',
    meta: {
      title: 'Product Catalog'
    }
  },
  {
    path: '/products/categories',
    component: ProductCategories,
    name: 'products.categories',
    meta: {
      title: 'Product Categories'
    }
  },
  {
    path: '/products/search',
    component: ProductSearch,
    name: 'products.search',
    meta: {
      title: 'Search Products'
    }
  },
  {
    path: '/products/:id',
    component: ProductDetail,
    name: 'products.detail',
    meta: {
      title: 'Product Details'
    }
  }
];

export default routes;
