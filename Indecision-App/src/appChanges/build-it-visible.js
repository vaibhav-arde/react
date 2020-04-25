console.log(`Running from build-it-visible.js`);

let btnState = false;

const toggleVisibility = () => {
    btnState = !btnState;
    renderApp();
}

const buttonLogic = () => {
    if (btnState == true) {
        return <div><button onClick={toggleVisibility}>Hide Details</button> <p>Here is some more info</p></div>;
    } else {
        return <button onClick={toggleVisibility}>Show Details</button>;
    };

}


let renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            {buttonLogic()}

            <h1>Visibility Toggle 2</h1>
            <button onClick={toggleVisibility}>
                {btnState ? `Hide Details 2` : `Show Details 2`}
            </button>
            {btnState && (
                <div>
                <p>Here are some details for sencond toggle</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
renderApp();