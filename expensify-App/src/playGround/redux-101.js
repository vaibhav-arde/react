import { createStore } from 'redux';

console.log('redux-101.js');

// Below four are action generators
const incrementCount = ({ incrementBy = 1 }) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 }) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = (count) => ({
    type: 'SET',
    count
})

// Reducer:

const countReducer = (state = { count: 0 }, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }))

// unsubscribe();
// console.log(store.getState());

// store.dispatch({
//     type: 'DECREMENT'
// });
store.dispatch(decrementCount({}))
// console.log(store.getState());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 3
// });
store.dispatch(decrementCount({ decrementBy: 3 }))
// console.log(store.getState());

// store.dispatch({
//     type: 'RESET'
// });
store.dispatch(resetCount())
// console.log(store.getState());

// store.dispatch({
//     type: 'SET',
//     count: 101
// })
store.dispatch(setCount(200))


// 
/*
const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {

        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// unsubscribe();
// console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});
// console.log(store.getState());

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 3
});
// console.log(store.getState());

store.dispatch({
    type: 'RESET'
});
// console.log(store.getState());

store.dispatch({
    type: 'SET',
    count: 101
})
*/