import { createStore } from 'redux';

console.log('redux-101.js');

const store = createStore((state = { count: 0 }) => {
    return state;
});

console.log(store.getState());
