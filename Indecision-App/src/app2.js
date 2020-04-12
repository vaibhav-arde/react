console.log(`Runnong from app2.js`);

let myId  = 'test'
let count = 0

let addCount = count => {
    console.log('addCount') 
}

let logReset = () => {
    console.log(`reset`);
}

const template = (
    <div>
        <h1>Events and Attributes</h1>
        <h2>Count before reset is : {count}</h2>
        <button id = {myId} className = 'btnOne' onClick = {addCount}>-1</button>
        <button onClick = {logReset}>Reset</button>
    </div>

);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);