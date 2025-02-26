/**
 * UserSettings Component
 * 
 * User settings component for the user dashboard plugin.
 */

import React from 'react';
import '../styles/user-settings.css';

const UserSettings = () => {
  return (
    <div className="user-settings">
      <h1>User Settings</h1>
      
      <div className="settings-section">
        <h2>Notification Settings</h2>
        
        <div className="setting-group">
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              Email Notifications
            </label>
            <p className="setting-description">Receive notifications via email</p>
          </div>
          
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              Push Notifications
            </label>
            <p className="setting-description">Receive push notifications in browser</p>
          </div>
          
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              SMS Notifications
            </label>
            <p className="setting-description">Receive notifications via SMS</p>
          </div>
        </div>
      </div>
      
      <div className="settings-section">
        <h2>Privacy Settings</h2>
        
        <div className="setting-group">
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              Profile Visibility
            </label>
            <p className="setting-description">Make your profile visible to other users</p>
          </div>
          
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Activity Tracking
            </label>
            <p className="setting-description">Allow tracking of your activity for personalized recommendations</p>
          </div>
        </div>
      </div>
      
      <button className="save-settings-btn">Save Settings</button>
    </div>
  );
};

export default UserSettings;
