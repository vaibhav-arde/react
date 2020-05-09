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
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// 5. SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// 6. SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// 7. SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// 8. SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
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
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
}

//  Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if (sortBy === 'amount'){
            return a.amount < b.amount;
        }
    })
}

// Store Creation using multiple reducers
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt:1000}))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 200, note: 'Update to Bill' }));

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

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
        startDate: undefined,
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