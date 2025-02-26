/**
 * UserDashboard Store
 * 
 * State management for the UserDashboard plugin.
 * This is a simple implementation that could be expanded
 * to use Redux, Zustand, or any other state management library.
 */

// Initial state
const initialState = {
  user: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/placeholder-avatar.jpg',
    phone: '+1 (555) 123-4567',
    bio: 'This is a sample bio for the user profile.',
  },
  settings: {
    notifications: {
      email: true,
      push: true,
      sms: true,
    },
    privacy: {
      profileVisibility: true,
      activityTracking: false,
    },
  },
  activities: [
    {
      id: 1,
      type: 'login',
      timestamp: '2023-06-15T10:30:00Z',
      details: 'Logged in from Chrome on Windows',
    },
    {
      id: 2,
      type: 'profile_update',
      timestamp: '2023-06-14T14:45:00Z',
      details: 'Updated profile information',
    },
    {
      id: 3,
      type: 'settings_change',
      timestamp: '2023-06-12T09:15:00Z',
      details: 'Changed notification settings',
    },
  ],
};

// Actions
const actions = {
  updateUserProfile: (state, userData) => {
    return {
      ...state,
      user: {
        ...state.user,
        ...userData,
      },
    };
  },
  updateSettings: (state, newSettings) => {
    return {
      ...state,
      settings: {
        ...state.settings,
        ...newSettings,
      },
    };
  },
  addActivity: (state, activity) => {
    return {
      ...state,
      activities: [activity, ...state.activities],
    };
  },
};

// Simple store implementation
class Store {
  constructor(initialState, actions) {
    this.state = initialState;
    this.actions = actions;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  dispatch(actionName, payload) {
    if (this.actions[actionName]) {
      this.state = this.actions[actionName](this.state, payload);
      this.notifyListeners();
    } else {
      console.error(`Action "${actionName}" not found`);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.state));
  }
}

// Create and export the store
const userDashboardStore = new Store(initialState, actions);

export default userDashboardStore;
