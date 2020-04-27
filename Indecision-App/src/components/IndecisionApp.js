import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllBtn = this.removeAllBtn.bind(this)
        this.pickAOption = this.pickAOption.bind(this)
        this.addNewOption = this.addNewOption.bind(this)
        this.removeSingleBtn = this.removeSingleBtn.bind(this)
        this.state = {
            subTitle: 'Be responsible for all happenings',
            options: []
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

export default IndecisionApp;