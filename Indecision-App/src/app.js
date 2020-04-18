class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App' ;
        const subTitle = 'Be responsible for all happenings'
        const options = ['Option One', 'Option Two', 'Option Three'];

        return (
            <div>
                <Header title = {title} subTitle ={subTitle}/>
                <Action />
                <Options options = {options}/>
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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component are {this.props.options.length}
                {this.props.options.map( option => <Option key={option} optionText = {option}/>)}
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
    render() {
        return (
            <div>
                AddOption component here
            </div>
        );
    }
}

const jsx = (
    <div>

    </div>
);

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
