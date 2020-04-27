import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
);
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

export default Header;