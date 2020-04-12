console.log(`Runnong from app2.js`);

let myId  = 'test'
let count = 0

let addCount = () => {
    count++;
    console.log('addCount', count);
    renderCounterApp();
}

let minusCount = () => {
    count--;
    console.log('minusCount', count);
    renderCounterApp();
}

let logReset = () => {
    count = 0;
    console.log(`reset`, count);
    renderCounterApp();
}



const appRoot = document.getElementById('app');


const renderCounterApp = () =>{
    const template = (
        <div>
            <h1>Events and Attributes</h1>
            <h2>Count before reset is : {count}</h2>
            <button id = {myId} className = 'btnOne' onClick = {addCount}>Add Count</button>
            <button onClick = {minusCount}>Minus Count</button>
            <button onClick = {logReset}>Reset</button>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}

renderCounterApp();