console.log(`app.js is running!`);

// JSX - JavaScript XML
let template = (
    <div>
        <h1>Indicision App</h1>
        <p>This is an App info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

let templateTwo = (
    <div>
        <h1>VaibhaV Arde</h1>
        <p>Age : 32</p>
        <p>Pune</p>
    </div>
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot1);

