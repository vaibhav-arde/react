import { createStore, combineReducers } from 'redux'

console.log('redux-expensify.js');

const demoState ={
    expenses: [{
        id: 'asdfghjdfg',
        description: 'January rent',
        note: 'Final payment for address',
        amount: 54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount', //date or amount
        startDte: undefined,
        endDate: undefined
    }
}