class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllBtn = this.removeAllBtn.bind(this)
        this.pickAOption = this.pickAOption.bind(this)
        this.addNewOption = this.addNewOption.bind(this)
        this.removeSingleBtn = this.removeSingleBtn.bind(this)
        this.state = {
            subTitle: 'Be responsible for all happenings',
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log(`***componentWillUnmount***`)
    }

    removeAllBtn() {
        this.setState(() => ({ options: [] }));
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // })
        console.log(`removeAllBtn is clicked`)
    }

    removeSingleBtn(optionToRemove) {
        console.log(`Single btn is removed`, optionToRemove)
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
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

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })
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
                    removeSingleBtn={this.removeSingleBtn}
                />
                <AddOption
                    addNewOption={this.addNewOption}
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}
Header.defaultProps = {
    title: 'Indecision App!!'
}
// class Header extends React.Component {
//     render() {
//         // console.log(this.props)
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.pickAOption}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    );
}
// class Action extends React.Component {
//     // btnClick() {
//     //     alert(`'What should I do' btn clicked.`)
//     // }
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.pickAOption}
//                     disabled={!this.props.hasOptions}
//                 >What should I do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.removeAllBtn}>Remove All Options</button>
            <p>Total options available are {props.options.length}</p>
            {props.options.length === 0 && <p>Please add an option to get started!!</p>}
            {props.options.map(option => (
                <Option
                    key={option}
                    optionText={option}
                    removeSingleBtn={props.removeSingleBtn}
                />
            ))}
        </div>
    );
}
// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.removeAllBtn}>Remove All Options</button>
//                 <p>Total options available are {this.props.options.length}</p>
//                 {this.props.options.map(option => <Option key={option} optionText={option} />)}
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.removeSingleBtn(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    );
}
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

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

        const error = this.props.addNewOption(option)
        console.log(`Error is ${error}`)

        this.setState(() => ({ error }));
        // this.setState(() => {
        //     return { error }
        // });

        !error && (e.target.elements.option.value = '')
        // if (!error) {
        //     e.target.elements.option.value = ''
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

// const jsx = (
//     <div>

//     </div>
// );

ReactDOM.render(<IndecisionApp options={['VaibhaV', 'Sheetal']} />, document.getElementById('app'));
