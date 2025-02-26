/**
 * UserDashboard Plugin
 * 
 * Main entry point for the UserDashboard plugin.
 * This file exports the plugin's components, routes, and any other
 * functionality that should be accessible to the core application.
 */

import routes from './routes';
// Import main components that should be exposed
import UserDashboard from './components/UserDashboard';
import UserProfile from './components/UserProfile';

// Export plugin definition
export default {
  name: 'UserDashboard',
  routes,
  components: {
    UserDashboard,
    UserProfile,
  },
  // Plugin initialization function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  initialize: (app) => {
    console.log('UserDashboard plugin initialized');
    // Any initialization logic goes here
    // For example, registering global components, setting up store, etc.
  }
};
