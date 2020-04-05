console.log(`app.js is running!`);

// JSX - JavaScript XML
// let template = <p>This is JSX app.js</p>;
var template = /*#__PURE__*/React.createElement("h1", null, "This is JSX app.js");

var appRoot =  document.getElementById('app');

ReactDOM.render(template, appRoot);