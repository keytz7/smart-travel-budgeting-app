import React, { useState } from 'react';
import '../styles.css';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [conversionRate, setConversionRate] = useState(1); // Default conversion rate for demo

    const convertCurrency = () => {
        if (from && to && amount) {
            const result = amount * conversionRate; // Mock conversion logic
            alert(`Converted amount: ${result} ${to}`);
        }
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button">Back</button>
                <h1 className="title">Smart Travel Budgeting</h1>
            </header>
            <h2 className="sub-title">Travel Converter</h2>
            <div className="converter-box">
                <div>
                    <label>Amount</label>
                    <input type="number" placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div>
                    <label>From</label>
                    <input type="text" placeholder="Currency" onChange={(e) => setFrom(e.target.value)} />
                </div>
                <div>
                    <label>To</label>
                    <input type="text" placeholder="Currency" onChange={(e) => setTo(e.target.value)} />
                </div>
            </div>
            <button className="convert-button" onClick={convertCurrency}>Convert</button>
            <div className="conversion-rate">Conversion Rate: {conversionRate}</div>
        </div>
    );
};

export default CurrencyConverter;