console.log(`formsInputs.js is running!`);

// JSX - JavaScript XML
let itemCount = 0

const app = {
    appName: 'Indicision App',
    subTitle: 'This is an App info of : ',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');

    const option = e.target.elements.option.value;
    console.log(option);

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderingApp();
    }
};

const addedOptions = (optionArray) => {
    console.log(optionArray)
    if (optionArray.length > 0) {
        let fArray = optionArray.map((option) => <li>{option}</li> );
        console.log(fArray);
        return fArray;
    }
};

const resetArray = () => {
    app.options =[];
    renderingApp();
};

const renderingApp = () => {
    const template = (
        <div>
            <h1>{`Welcome to ${app.appName.toUpperCase()} !!`}</h1>
            {app.subTitle && <p>{app.subTitle} {app.appName}</p>}
            <p>{app.options.length > 0 && (app.options.length < 2 ? `You have only one option` : `You have below options`)}</p>
            <p>Length of an array at the moment is : {app.options.length}</p>
            <ol>
                {addedOptions(app.options)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='Text' name='option'></input>
                <button>Add Option</button>
                <button onClick = {resetArray}>Remove All Options</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');

renderingApp();