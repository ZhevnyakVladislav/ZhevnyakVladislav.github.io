webpackHotUpdate(0,{

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterBootstrap = __webpack_require__(383);

var _reactBootstrap = __webpack_require__(183);

__webpack_require__(521);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                null,
                _react2.default.createElement(
                    _reactBootstrap.Navbar,
                    { fluid: true },
                    _react2.default.createElement(
                        _reactBootstrap.Row,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 8 },
                            _react2.default.createElement(_reactBootstrap.Image, { src: 'https://www.itechart.com/static/img/logo.png' })
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.Col,
                            { xs: 4 },
                            _react2.default.createElement(
                                _reactBootstrap.Nav,
                                { pullRight: true },
                                _react2.default.createElement(
                                    _reactRouterBootstrap.LinkContainer,
                                    { to: '/login' },
                                    _react2.default.createElement(
                                        _reactBootstrap.NavItem,
                                        { eventKey: 1 },
                                        _react2.default.createElement(
                                            _reactBootstrap.Button,
                                            { bsStyle: 'primary' },
                                            'Log In'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

var _default = Header;
exports.default = _default;
;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Header, 'Header', 'D:/finalProject/client/components/Header/Header.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'D:/finalProject/client/components/Header/Header.js');
}();

;

/***/ })

})
//# sourceMappingURL=0.bbdb2334da1a0ce01b6b.hot-update.js.map