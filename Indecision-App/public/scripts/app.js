'use strict';

console.log('app.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
  'p',
  null,
  'This is JSX app.js using Babel'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
