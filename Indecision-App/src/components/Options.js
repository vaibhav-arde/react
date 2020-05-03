import React from 'react';
import Option from './Option';


const Options = (props) => (
    <div>
        <div className ='widget-header'>
            <h3 className='widget-header__title'>Total options available are {props.options.length}</h3>
            <button
                className='button button--link'
                onClick={props.removeAllBtn}
            >
                Remove All Options
            </button>
        </div>

        {props.options.length === 0 && <p className='widget__message'>Please add an option to get started!!</p>}
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