'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeAllBtn = _this.removeAllBtn.bind(_this);
        _this.pickAOption = _this.pickAOption.bind(_this);
        _this.addNewOption = _this.addNewOption.bind(_this);
        _this.removeSingleBtn = _this.removeSingleBtn.bind(_this);
        _this.state = {
            subTitle: 'Be responsible for all happenings',
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do nothing at all
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('***componentWillUnmount***');
        }
    }, {
        key: 'removeAllBtn',
        value: function removeAllBtn() {
            this.setState(function () {
                return { options: [] };
            });
            // this.setState(() => {
            //     return {
            //         options: []
            //     };
            // })
            console.log('removeAllBtn is clicked');
        }
    }, {
        key: 'removeSingleBtn',
        value: function removeSingleBtn(optionToRemove) {
            console.log('Single btn is removed', optionToRemove);
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'pickAOption',
        value: function pickAOption() {
            // alert('Test');
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNum]);
        }
    }, {
        key: 'addNewOption',
        value: function addNewOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'This option already exist';
            }

            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
            // this.setState((prevState) => {
            //     return {
            //         options: prevState.options.concat(option)
            //     }
            // })
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title, subTitle: this.state.subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    pickAOption: this.pickAOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    removeAllBtn: this.removeAllBtn,
                    removeSingleBtn: this.removeSingleBtn
                }),
                React.createElement(AddOption, {
                    addNewOption: this.addNewOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: 'Indecision App!!'
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

};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.pickAOption,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};
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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeAllBtn },
            'Remove All Options'
        ),
        React.createElement(
            'p',
            null,
            'Total options available are ',
            props.options.length
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!!'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                removeSingleBtn: props.removeSingleBtn
            });
        })
    );
};
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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.removeSingleBtn(props.optionText);
                }
            },
            'remove'
        )
    );
};
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         );
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.submitForm = _this2.submitForm.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'submitForm',
        value: function submitForm(e) {
            e.preventDefault();
            console.log('Form Submitted');

            var option = e.target.elements.option.value.trim();
            // console.log(option);

            // option ? alert(`Option submitted is : ${option}`) : alert(`Option can not be empty`)

            var error = this.props.addNewOption(option);
            console.log('Error is ' + error);

            this.setState(function () {
                return { error: error };
            });
            // this.setState(() => {
            //     return { error }
            // });

            !error && (e.target.elements.option.value = '');
            // if (!error) {
            //     e.target.elements.option.value = ''
            // }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.submitForm },
                    this.state.error && React.createElement(
                        'p',
                        null,
                        this.state.error
                    ),
                    React.createElement('input', { type: 'Text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

// const jsx = (
//     <div>

//     </div>
// );

ReactDOM.render(React.createElement(IndecisionApp, { options: ['VaibhaV', 'Sheetal'] }), document.getElementById('app'));
