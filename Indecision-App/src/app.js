import { square, add } from './utils.js'
import isSenior, { isAdult, canDrink } from './person.js'
// import validator from "validator";
import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js file is running!!')

console.log(square(4));
console.log(add(100, 23));

console.log(isAdult(12, 18));
console.log(canDrink(21, 18));
console.log(isSenior(60, 60));

// console.log(validator.isEmail('trest@gmail.com'));

// const template =<p>Testing React package</p>
const template = React.createElement('p',{}, 'Testing React');
ReactDOM.render(template, document.getElementById('app'));