import React from 'react';

const Option = (props) => (
    <div>
        {props.optionText}
        <button
            className='button button--link'
            onClick={(e) => {
                props.removeSingleBtn(props.optionText)
            }}
        >
            remove
            </button>
    </div>
);
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

export default Option;