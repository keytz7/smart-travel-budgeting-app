import React, { useState } from 'react';
import '../styles.css';

const BudgetPlanning = () => {
    const [totalBudget, setTotalBudget] = useState(0);
    const [accommodation, setAccommodation] = useState(0);
    const [food, setFood] = useState(0);
    const [transportation, setTransportation] = useState(0);
    const [activities, setActivities] = useState(0);

    const calculateTotal = () => {
        return accommodation + food + transportation + activities;
    };

    const remainingBudget = () => {
        return totalBudget - calculateTotal();
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button">Back</button>
                <h1 className="title">Smart Travel Budgeting</h1>
            </header>
            <h2 className="sub-title">Budget Project</h2>
            <input type="number" placeholder="Total Budget" onChange={(e) => setTotalBudget(Number(e.target.value))} />
            <div className="button-row">
                <input type="number" placeholder="Accommodation" onChange={(e) => setAccommodation(Number(e.target.value))} />
                <input type="number" placeholder="Food" onChange={(e) => setFood(Number(e.target.value))} />
            </div>
            <div className="button-row">
                <input type="number" placeholder="Transportation" onChange={(e) => setTransportation(Number(e.target.value))} />
                <input type="number" placeholder="Activities" onChange={(e) => setActivities(Number(e.target.value))} />
            </div>
            <h3>Total Expenses: ${calculateTotal()}</h3>
            <h4>Remaining Budget: ${remainingBudget() >= 0 ? remainingBudget() : 'Over Budget!'}</h4>
            <button className="save-button">Save Budget</button>
        </div>
    );
};

export default BudgetPlanning;