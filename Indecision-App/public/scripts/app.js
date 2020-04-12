'use strict';

console.log('formsInputs.js is running!');

// JSX - JavaScript XML
var itemCount = 0;

var app = {
    appName: 'Indicision App',
    subTitle: 'This is an App info of : ',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log('Form Submitted');

    var option = e.target.elements.option.value;
    console.log(option);

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderingApp();
    }
};

var addedOptions = function addedOptions(optionArray) {
    console.log(optionArray);
    if (optionArray.length > 0) {
        var fArray = optionArray.map(function (option) {
            return React.createElement(
                'li',
                null,
                option
            );
        });
        console.log(fArray);
        return fArray;
    }
};

var resetArray = function resetArray() {
    app.options = [];
    renderingApp();
};

var decision = function decision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};
var renderingApp = function renderingApp() {
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
        React.createElement(
            'p',
            null,
            app.options.length > 0 && (app.options.length < 2 ? 'You have only one option' : 'You have below options')
        ),
        React.createElement(
            'p',
            null,
            'Length of an array at the moment is : ',
            app.options.length
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: decision },
            'What should I do?'
        ),
        React.createElement(
            'ol',
            null,
            addedOptions(app.options)
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'Text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            ),
            React.createElement(
                'button',
                { onClick: resetArray },
                'Remove All Options'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderingApp();
