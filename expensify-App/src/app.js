import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// console.log(store.getState());

store.subscribe(() => {
    const state = store.getState();
    // console.log(store.getState());
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

store.dispatch(addExpense({ description: 'Water Bill', amount: 200, createdAt: 200 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 100, createdAt: 1500 }))
store.dispatch(addExpense({ description: 'Rent Bill', amount: 700, createdAt: 1000 }))
store.dispatch(setTextFilter('water'))
// console.log(store.getState());

setTimeout(() => {
    store.dispatch(setTextFilter('Bill'));
}, 3000)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
