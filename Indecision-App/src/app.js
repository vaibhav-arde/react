console.log(`app.js is running!`);

// JSX - JavaScript XML
let appName = 'Indicision App';
let itemCount = 0

let app = {
    appName : 'Indicision App',
    subTitle : 'This is an App info of : ',
    options : ['optOne', 'optTwo', 'optThree']
}

let template = (
    <div>
        <h1>{`Welcome to ${app.appName.toUpperCase()} !!`}</h1>
        {app.subTitle && <p>{app.subTitle} {app.appName}</p>}
        {app.options && (app.options.length < 2 ? <p>You have only one option</p>  :  <p>You have below options</p>)}
        <ol>
            <li>Item {itemCount + 1}</li>
            <li>Item {itemCount + 2}</li>
        </ol>
    </div>
);

let user = {
    name: '',
    age : 32,
    location : 'Pune'
};

function getLocation(location){
    if (location){
        return <p>Location : {location}</p>;
    }
}

let templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p> Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
var appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot1);

