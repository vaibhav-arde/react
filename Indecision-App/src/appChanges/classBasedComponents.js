class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllBtn = this.removeAllBtn.bind(this)
        this.pickAOption = this.pickAOption.bind(this)
        this.addNewOption = this.addNewOption.bind(this)
        this.state = {
            title: 'Indecision App',
            subTitle: 'Be responsible for all happenings',
            options: []
        }
    }
    removeAllBtn() {
        this.setState(() => {
            return {
                options: []
            };
        })
        console.log(`removeAllBtn is clicked`)
    }
    pickAOption() {
        // alert('Test');
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum])

    }

    addNewOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} subTitle={this.state.subTitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    pickAOption={this.pickAOption}
                />
                <Options
                    options={this.state.options}
                    removeAllBtn={this.removeAllBtn}
                />
                <AddOption
                    addNewOption={this.addNewOption}
                />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    // btnClick() {
    //     alert(`'What should I do' btn clicked.`)
    // }
    render() {
        return (
            <div>
                <button
                    onClick={this.props.pickAOption}
                    disabled={!this.props.hasOptions}
                >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeAllBtn}>Remove All Options</button>
                <p>Total options available are {this.props.options.length}</p>
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
    constructor(props) {
        super(props)
        this.submitForm = this.submitForm.bind(this)
        this.state = {
            error: undefined
        };
    }
    submitForm(e) {
        e.preventDefault();
        console.log('Form Submitted');

        const option = e.target.elements.option.value.trim();
        // console.log(option);

        // option ? alert(`Option submitted is : ${option}`) : alert(`Option can not be empty`)
        e.target.elements.option.value = ''
        const error = this.props.addNewOption(option)
        console.log(`Error is ${error}`)
        this.setState(() => {
            return { error }
        });
        // if (option) {
        //     this.props.addNewOption(option)
        //     // app.options.push(option);
        //     // e.target.elements.option.value = '';
        // }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    {this.state.error && <p>{this.state.error}</p>}
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
