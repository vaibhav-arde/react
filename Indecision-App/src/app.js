console.log(`app.js is running!`);

// JSX - JavaScript XML
let appName = 'Indicision App';
let itemCount = 0

const app = {
    appName : 'Indicision App',
    subTitle : 'This is an App info of : ',
    options : ['optOne', 'optTwo', 'optThree']
}

const template = (
    <div>
        <h1>{`Welcome to ${app.appName.toUpperCase()} !!`}</h1>
        {app.subTitle && <p>{app.subTitle} {app.appName}</p>}
        <p>{app.options && (app.options.length < 2 ? `You have only one option`  :  `You have below options`)}</p>
        <ol>
            <li>Item {itemCount + 1}</li>
            <li>Item {itemCount + 2}</li>
        </ol>
    </div>
);

const user = {
    name: '',
    age : 32,
    location : 'Pune'
};

function getLocation(location){
    if (location){
        return <p>Location : {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p> Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
const appRoot1 = document.getElementById('app1');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot1);

