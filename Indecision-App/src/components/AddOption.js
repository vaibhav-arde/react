import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
    
    submitForm = (e) => {
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
                    <button className= 'button'>Add Option</button>
                </form>
            </div>
        );
    }
}