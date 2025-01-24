import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const MoreMenuOptions = () => {
    return (
        <div className="container">
            <header className="header">
                <button className="back-button">Back</button>
                <h1 className="title">Smart Travel Budgeting</h1>
            </header>
            <h2 className="sub-title">More Options</h2>
            <ul className="menu-options">
                <li>
                    <Link to="/strategy-plan" className="menu-link">Strategy Plan</Link>
                </li>
                <li>
                    <Link to="/activities" className="menu-link">Activities</Link>
                </li>
                <li>
                    <Link to="/preferences" className="menu-link">Preferences</Link>
                </li>
                <li>
                    <Link to="/returns" className="menu-link">Returns</Link>
                </li>
                <li>
                    <Link to="/budgeting" className="menu-link">Budgeting</Link>
                </li>
                <li>
                    <Link to="/selection" className="menu-link">Selection</Link>
                </li>
                <li>
                    <Link to="/settings" className="menu-link">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default MoreMenuOptions;