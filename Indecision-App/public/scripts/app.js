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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
