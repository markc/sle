/**
 * UserDashboard Routes
 * 
 * Defines all routes for the UserDashboard plugin.
 * These routes will be imported by the core router.
 */

// Import components
import UserDashboard from './components/UserDashboard';
import UserProfile from './components/UserProfile';
import UserSettings from './components/UserSettings';

// Define routes
const routes = [
  {
    path: '/user/dashboard',
    component: UserDashboard,
    name: 'user.dashboard',
    meta: {
      requiresAuth: true,
      title: 'User Dashboard'
    }
  },
  {
    path: '/user/profile',
    component: UserProfile,
    name: 'user.profile',
    meta: {
      requiresAuth: true,
      title: 'User Profile'
    }
  },
  {
    path: '/user/settings',
    component: UserSettings,
    name: 'user.settings',
    meta: {
      requiresAuth: true,
      title: 'User Settings'
    }
  }
];

export default routes;
