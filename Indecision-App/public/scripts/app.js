'use strict';

console.log('Running from build-it-visible.js');

var btnState = false;

var toggleVisibility = function toggleVisibility() {
    btnState = !btnState;
    renderApp();
};

var buttonLogic = function buttonLogic() {
    if (btnState == true) {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'button',
                { onClick: toggleVisibility },
                'Hide Details'
            ),
            ' ',
            React.createElement(
                'p',
                null,
                'Here is some more info'
            )
        );
    } else {
        return React.createElement(
            'button',
            { onClick: toggleVisibility },
            'Show Details'
        );
    };
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        buttonLogic(),
        React.createElement(
            'h1',
            null,
            'Visibility Toggle 2'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            btnState ? 'Hide Details 2' : 'Show Details 2'
        ),
        btnState && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Here are some details for sencond toggle'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderApp();
