import { createStore, combineReducers } from 'redux'

console.log('redux-expensify.js');

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDte: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'asdfghjdfg',
        description: 'January rent',
        note: 'Final payment for address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDte: undefined,
        endDate: undefined
    }
};