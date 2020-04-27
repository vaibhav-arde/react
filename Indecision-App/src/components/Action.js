import React from 'react';


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

export default Action;