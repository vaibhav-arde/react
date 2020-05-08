import { createStore } from 'redux';

console.log('redux-101.js');

const store = createStore((state = { count: 0 }, action) => {

    switch (action.type) {

        case 'INCREMENT':
            const increamentBy = typeof action.increamentBy === 'number' ? action.increamentBy : 1;
            return {
                count: state.count + increamentBy
            };
        case 'DECREMENT':
            const decreamentBy = typeof action.decreamentBy === 'number' ? action.decreamentBy : 1;
            return {
                count: state.count - decreamentBy
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
    increamentBy: 5
});
// unsubscribe();
// console.log(store.getState());

store.dispatch({
    type: 'DECREMENT'
});
// console.log(store.getState());

store.dispatch({
    type: 'DECREMENT',
    decreamentBy: 3
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