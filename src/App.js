import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import BudgetPlanning from './components/BudgetPlanning';
import ExpenseTracking from './components/ExpenseTracking';
import CurrencyConverter from './components/CurrencyConverter';
import ItineraryIntegration from './components/ItineraryIntegration';
import Alerts from './components/Alerts';
import MoreMenuOptions from './components/MoreMenuOptions';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/budget-planning" component={BudgetPlanning} />
                <Route path="/expense-tracking" component={ExpenseTracking} />
                <Route path="/currency-converter" component={CurrencyConverter} />
                <Route path="/itinerary-integration" component={ItineraryIntegration} />
                <Route path="/alerts" component={Alerts} />
                <Route path="/more-menu" component={MoreMenuOptions} />
            </Switch>
        </Router>
    );
};

export default App;