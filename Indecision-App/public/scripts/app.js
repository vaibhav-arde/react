'use strict';

console.log('Runnong from app2.js');

var myId = 'test';
var count = 0;

var addCount = function addCount(count) {
    console.log('addCount');
};

var logReset = function logReset() {
    console.log('reset');
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Events and Attributes'
    ),
    React.createElement(
        'h2',
        null,
        'Count before reset is : ',
        count
    ),
    React.createElement(
        'button',
        { id: myId, className: 'btnOne', onClick: addCount },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: logReset },
        'Reset'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
