/**
 * Main router that imports plugin routes
 * 
 * This file serves as the central router for the application,
 * importing and combining routes from all registered plugins.
 */

// Import plugin routes
import UserDashboardRoutes from '../plugins/UserDashboard/routes';
import ProductCatalogRoutes from '../plugins/ProductCatalog/routes';

// Combine all plugin routes
const pluginRoutes = [
  ...UserDashboardRoutes,
  ...ProductCatalogRoutes,
  // Add new plugin routes here
];

export default pluginRoutes;
