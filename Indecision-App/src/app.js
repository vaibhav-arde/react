class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subTitle = 'Be responsible for all happenings'
        const options = ['Option One', 'Option Two', 'Option Three'];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    btnClick() {
        alert(`What should I do btn clicked.`)
    }
    render() {
        return (
            <div>
                <button onClick={this.btnClick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props){
        super(props)
        this.removeBtn = this.removeBtn.bind(this);
    }
    removeBtn() {
        alert(`'Remove All Options' btn clicked.`)
        console.log(`All options are ${this.props.options}`)
        // this.props.options=[]
        // console.log(`All options are ${this.props.options}`)
    }
    render() {
        return (
            <div>
                <button onClick={this.removeBtn}>Remove All Options</button>
                <p>Options component are {this.props.options.length}</p>
                {this.props.options.map(option => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    submitForm(e) {
        e.preventDefault();
        console.log('Form Submitted');

        const option = e.target.elements.option.value.trim();
        console.log(option);

        option ? alert(`Option submitted is : ${option}`) : alert(`Option can not be empty`)
        e.target.elements.option.value=''
        // if (option) {
        //     app.options.push(option);
        //     e.target.elements.option.value = '';
        // }
    }
    render() {
        return (
            <div>
                <form onSubmit = {this.submitForm}>
                    <input type='Text' name='option'></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>

    </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
