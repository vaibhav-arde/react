import { createStore, combineReducers } from 'redux';
import uuid from 'uuid/v4';

console.log('redux-expensify.js');

// Action Generators
// 1. ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// 2. REMOVE_EXPENSE Remove Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// 3. EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// 4. SET_TEXT_FILTER setTextFilter
const setTextFilter = (text= '') =>({
    type: 'SET_TEXT_FILTER',
    text
})

// Expense Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

// Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDte: undefined,
    endDate: undefined
};

const filtersReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return  {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
}

// Store Creation using multiple reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 10 }))

store.dispatch(removeExpense({ id: expenseOne.expense.id }))

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200, note: 'Update to Bill' }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());

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

const user = {
    name: 'VaibhaV',
    age: 33
}

console.log({
    ...user
});