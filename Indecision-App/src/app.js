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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);