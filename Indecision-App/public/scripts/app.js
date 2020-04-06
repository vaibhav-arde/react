'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML
var appName = 'Indicision App';
var itemCount = 0;

var app = {
    appName: 'Indicision App',
    subTitle: 'This is an App info of : ',
    options: ['optOne', 'optTwo', 'optThree']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Welcome to ' + app.appName.toUpperCase() + ' !!'
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle,
        ' ',
        app.appName
    ),
    app.options && (app.options.length < 2 ? React.createElement(
        'p',
        null,
        'You have only one option'
    ) : React.createElement(
        'p',
        null,
        'You have below options'
    )),
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
    name: '',
    age: 32,
    location: 'Pune'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age : ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot1);
