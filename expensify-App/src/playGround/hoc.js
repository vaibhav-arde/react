// console.log('expensify-App/src/playGround/hoc.js')

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private info, Do not share!!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth === true ? <p>Welcome as authenticated Login!!</p> : <p>You are not authenticated</p>}
            {props.isAuth && <WrappedComponent {...props} />}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info="Here are my details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="Here are my details" />, document.getElementById('app'));
