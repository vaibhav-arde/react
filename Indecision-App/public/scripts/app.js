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
            count: 0
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

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

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
