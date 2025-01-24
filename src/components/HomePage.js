import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const HomePage = () => {
    return (
        <div className="container">
            <header className="header">
                <h1 className="title">Smart Travel Budgeting</h1>
            </header>
            <div className="home-buttons">
                <Link to="/budget-planning" className="home-button">Budget Planning</Link>
                <Link to="/expense-tracking" className="home-button">Expense Tracking</Link>
                <Link to="/currency-converter" className="home-button">Currency Converter</Link>
                <Link to="/itinerary-integration" className="home-button">Trip Itinerary</Link>
                <Link to="/alerts" className="home-button">Alerts</Link>
                <Link to="/more-menu" className="home-button">More Options</Link>
            </div>
        </div>
    );
};

export default HomePage;