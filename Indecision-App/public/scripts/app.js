'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('Runnong from componentState.js');

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addCount = _this.addCount.bind(_this);
        _this.minusCount = _this.minusCount.bind(_this);
        _this.logReset = _this.logReset.bind(_this);
        _this.state = {
            headerName: 'React Components State',
            count: props.count
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'addCount',
        value: function addCount() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
            console.log('Method called is : addCount');
        }
    }, {
        key: 'minusCount',
        value: function minusCount() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
            console.log('Method called is : minusCount');
        }
    }, {
        key: 'logReset',
        value: function logReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
            // console.log(`Method called is : logReset`);
            // this.setState({
            //     count:0
            // });
            // this.setState({
            //     count:this.state.count + 1
            // });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.headerName
                ),
                React.createElement(
                    'h2',
                    null,
                    'Current Count is : ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.addCount },
                    'Add Count'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusCount },
                    'Minus Count'
                ),
                React.createElement(
                    'button',
                    { onClick: this.logReset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(React.createElement(Counter, { count: 7 }), document.getElementById('app'));

// ========================================

// let myId  = 'test'
// let count = 0

// let addCount = () => {
//     count++;
//     console.log('addCount', count);
//     renderCounterApp();
// }

// let minusCount = () => {
//     count--;
//     console.log('minusCount', count);
//     renderCounterApp();
// }

// let logReset = () => {
//     count = 0;
//     console.log(`reset`, count);
//     renderCounterApp();
// }


// const appRoot = document.getElementById('app');


// const renderCounterApp = () =>{
//     const template = (
//         <div>
//             <h1>Events and Attributes</h1>
//             <h2>Count before reset is : {count}</h2>
//             <button id = {myId} className = 'btnOne' onClick = {addCount}>Add Count</button>
//             <button onClick = {minusCount}>Minus Count</button>
//             <button onClick = {logReset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderCounterApp();

// ==================================================

var VisibilityToggle = function (_React$Component2) {
    _inherits(VisibilityToggle, _React$Component2);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this2 = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this2.toggleVisibility = _this2.toggleVisibility.bind(_this2);
        _this2.state = {
            hName: 'Visibility Toggle',
            tState: true
        };
        return _this2;
    }

    _createClass(VisibilityToggle, [{
        key: 'toggleVisibility',
        value: function toggleVisibility() {
            this.setState(function (prevState) {
                return {
                    tState: !prevState.tState
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.state.hName
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleVisibility },
                    this.state.tState ? 'Hide Details' : 'Show Details'
                ),
                this.state.tState && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Here are some details for toggle'
                    )
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById('app1'));

// ==================================================

// const toggleVisibility = () => {
//     btnState = !btnState;
//     renderApp();
// }

// const buttonLogic = () => {
//     if (btnState == true) {
//         return <div><button onClick={toggleVisibility}>Hide Details</button> <p>Here is some more info</p></div>;
//     } else {
//         return <button onClick={toggleVisibility}>Show Details</button>;
//     };

// }


// let renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             {buttonLogic()}

//             <h1>Visibility Toggle 2</h1>
//             <button onClick={toggleVisibility}>
//                 {btnState ? `Hide Details 2` : `Show Details 2`}
//             </button>
//             {btnState && (
//                 <div>
//                 <p>Here are some details for sencond toggle</p>
//                 </div>
//             )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// renderApp();
