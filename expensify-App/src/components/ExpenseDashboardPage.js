import React from 'react';
import ExpenseList from './ExpensesList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
        <p>This is from my Dashboard component</p>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;