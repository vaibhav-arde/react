'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indicision App'
    ),
    React.createElement(
        'p',
        null,
        'This is an App info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'VaibhaV Arde'
    ),
    React.createElement(
        'p',
        null,
        'Age : 32'
    ),
    React.createElement(
        'p',
        null,
        'Pune'
    )
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot1);
