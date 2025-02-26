/**
 * UserProfile Component
 * 
 * User profile component for the user dashboard plugin.
 */

import React from 'react';
import '../styles/user-profile.css';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      
      <div className="profile-section">
        <div className="profile-avatar">
          <img src="/placeholder-avatar.jpg" alt="User Avatar" />
          <button className="change-avatar-btn">Change Avatar</button>
        </div>
        
        <div className="profile-details">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" defaultValue="John Doe" />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" defaultValue="john.doe@example.com" />
          </div>
          
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" defaultValue="+1 (555) 123-4567" />
          </div>
          
          <div className="form-group">
            <label>Bio</label>
            <textarea defaultValue="This is a sample bio for the user profile."></textarea>
          </div>
          
          <button className="save-profile-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
