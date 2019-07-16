'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Effect = _interopRequireDefault(require("./Effect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var defaultSetTimeout = function defaultSetTimeout(callback) {
  setTimeout(callback, 1000.0 / 60.0);
};

var defaultClearTimeout = function defaultClearTimeout(timer) {
  clearTimeout(timer);
};

var requestAnimationFrame = function () {
  if (typeof window === 'undefined') {
    return defaultSetTimeout;
  } else {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || defaultSetTimeout;
  }
}();

var cancelAnimationFrame = function () {
  if (typeof window === 'undefined') {
    return defaultClearTimeout;
  } else {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || defaultClearTimeout;
  }
}();

var now = typeof window !== 'undefined' && window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);

var getTime = function getTime() {
  return now && now.call(performance) || Date.now();
};

var AnimationCounter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AnimationCounter, _React$Component);

  function AnimationCounter(props) {
    var _this;

    _classCallCheck(this, AnimationCounter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AnimationCounter).call(this, props));
    _this.state = {};
    _this.node = undefined;
    return _this;
  }

  _createClass(AnimationCounter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.count > 0) {
        this.node = _reactDom["default"].findDOMNode(this.refs.badge);
        this.animate();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.count > prevProps.count) {
        this.node = _reactDom["default"].findDOMNode(this.refs.badge);
        this.animate();
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var style0 = {
        '-moz-transform': this.props.effect[0],
        '-webkit-transform': this.props.effect[0],
        '-o-transform': this.props.effect[0],
        transform: this.props.effect[0]
      };
      this.attachStyle(style0);

      if (this.props.effect[2]) {
        this.attachStyle(this.props.effect[2]);
      }

      var startTime = getTime();
      var timer;

      var waitOrFinish = function waitOrFinish() {
        var lastTime = getTime();
        var frame = Math.floor((lastTime - startTime) / (1000.0 / 60.0) % _this2.props.frameLength);

        if (frame === _this2.props.frameLength - 1) {
          cancelAnimationFrame(timer);
          var style1 = {
            '-moz-transform': _this2.props.effect[1],
            '-webkit-transform': _this2.props.effect[1],
            '-o-transform': _this2.props.effect[1],
            transform: _this2.props.effect[1]
          };

          _this2.attachStyle(style1);

          if (_this2.props.effect[3]) {
            _this2.attachStyle(_this2.props.effect[3]);
          }
        } else {
          timer = requestAnimationFrame(waitOrFinish);
        }
      };

      waitOrFinish();
    }
  }, {
    key: "attachStyle",
    value: function attachStyle(style) {
      for (var key in style) {
        if (style.hasOwnProperty(key)) {
          this.node.style[key] = style[key];
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.props.label || this.props.count;
      return _react["default"].createElement("span", {
        ref: "badge",
        style: this.props.style,
        className: this.props.className
      }, value);
    }
  }]);

  return AnimationCounter;
}(_react["default"].Component);

AnimationCounter.propTypes = {
  count: _propTypes["default"].number,
  label: _propTypes["default"].string,
  style: _propTypes["default"].object,
  effect: _propTypes["default"].array,
  frameLength: _propTypes["default"].number,
  className: _propTypes["default"].string
};
AnimationCounter.defaultProps = {
  count: 1,
  label: null,
  style: {},
  effect: _Effect["default"].SCALE,
  frameLength: 30.0
};
var _default = AnimationCounter;
exports["default"] = _default;