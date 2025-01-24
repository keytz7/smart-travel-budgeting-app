import React, { useState } from 'react';
import '../styles.css';

const ExpenseTracking = () => {
    const [expenses, setExpenses] = useState({
        food: 0,
        transportation: 0,
        hotel: 0,
        activities: 0
    });

    const handleExpenseChange = (e) => {
        const { name, value } = e.target;
        setExpenses({ ...expenses, [name]: Number(value) });
    };

    const totalExpenses = () => {
        return Object.values(expenses).reduce((a, b) => a + b, 0);
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button">Back</button>
                <h1 className="title">Smart Travel Budgeting</h1>
            </header>
            <h2 className="sub-title">Expense Tracker</h2>
            <ul className="expense-list">
                {Object.keys(expenses).map(expense => (
                    <li key={expense}>
                        {expense.charAt(0).toUpperCase() + expense.slice(1)}: $
                        <input
                            type="number"
                            name={expense}
                            value={expenses[expense]}
                            onChange={handleExpenseChange}
                        />
                    </li>
                ))}
                <li>Total: ${totalExpenses()}</li>
            </ul>
        </div>
    );
};

export default ExpenseTracking;
