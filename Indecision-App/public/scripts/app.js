'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML
var appName = 'Indicision App';
var itemCount = 0;
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Welcome to ' + appName.toUpperCase() + ' !!'
    ),
    React.createElement(
        'p',
        null,
        'This is an App info of : ',
        appName
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item ',
            itemCount + 1
        ),
        React.createElement(
            'li',
            null,
            'Item ',
            itemCount + 2
        )
    )
);

var user = {
    name: 'VaibhaV Arde',
    age: 32,
    location: 'Pune'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age : ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location : ',
        user.location
    )
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot1);
