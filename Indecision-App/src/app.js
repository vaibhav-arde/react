console.log(`app.js is running!`);

// JSX - JavaScript XML
let appName = 'Indicision App';
let itemCount = 0
let template = (
    <div>
        <h1>{`Welcome to ${appName.toUpperCase()} !!`}</h1>
        <p>This is an App info of : {appName}</p>
        <ol>
            <li>Item {itemCount + 1}</li>
            <li>Item {itemCount + 2}</li>
        </ol>
    </div>
);

let user = {
    name: 'VaibhaV Arde',
    age : 32,
    location : 'Pune'
};

let templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age : {user.age}</p>
        <p>Location : {user.location}</p>
    </div>
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot1);

