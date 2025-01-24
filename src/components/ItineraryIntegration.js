import React, { useState } from 'react';
import '../styles.css';

const ItineraryIntegration = () => {
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [activities, setActivities] = useState([]);

    const handleActivityChange = (e) => {
        const { value } = e.target;
        if (value) {
            setActivities([...activities, value]);
            e.target.value = ''; // Clear input after adding
        }
    };

    return (
        <div className="container">
            <header className="header">
                <button className="back-button">Back</button>
                <h1 className="title">Smart Travel Budgeting</h1>
            </header>
            <h2 className="sub-title">Trip Itinerary</h2>
            <div className="itinerary-box">
                <label>Destination</label>
                <input type="text" onChange={(e) => setDestination(e.target.value)} />
                <label>Date</label>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
                <label>Activities</label>
                <input type="text" placeholder="Activity" onChange={handleActivityChange} />
                <button className="add-activity-button">Add Activity</button>
            </div>
            <h3>Selected Activities: {activities.join(', ')}</h3>
        </div>
    );
};

export default ItineraryIntegration;