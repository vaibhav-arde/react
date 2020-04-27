import React from 'react';
import Option from './Option';


const Options = (props) => (
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
export default Options;