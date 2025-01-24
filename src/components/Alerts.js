import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Alerts = () => {
    return (
        <div className="container">
            <header className="header">
                <button className="back-button">Back</button>
                <h1 className="title">Smart Travel Budgeting</h1>
            </header>
            <h2 className="sub-title">Notifications</h2>
            <div className="notifications-box">
                <Link to="/breach-alerts" className="notification-link">Breach Alerts</Link>
                <Link to="/limited-travel" className="notification-link">Limited Travel Notification</Link>
                <Link to="/new-activity" className="notification-link">New Activity Notification</Link>
            </div>
            <button className="clear-all-button">Clear All</button>
        </div>
    );
};

export default Alerts;