/**
 * UserDashboard Component
 * 
 * Main dashboard component for the user dashboard plugin.
 */

import React from 'react';
import '../styles/user-dashboard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <div className="dashboard-widgets">
        <div className="widget">
          <h3>Activity Summary</h3>
          <p>Your recent activity will appear here</p>
        </div>
        <div className="widget">
          <h3>Quick Actions</h3>
          <ul>
            <li><a href="#">Edit Profile</a></li>
            <li><a href="#">Change Password</a></li>
            <li><a href="#">Notification Settings</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
