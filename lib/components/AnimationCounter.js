'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Effect = require('./Effect');

var _Effect2 = _interopRequireDefault(_Effect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var requestAnimationFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000.0 / 60.0);
  };
})();

var cancelAnimationFrame = (function () {
  return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (timer) {
    window.clearTimeout(timer);
  };
})();

var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);

var getTime = function getTime() {
  return now && now.call(performance) || new Date.now();
};

var AnimationCounter = (function (_React$Component) {
  _inherits(AnimationCounter, _React$Component);

  function AnimationCounter(props) {
    _classCallCheck(this, AnimationCounter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AnimationCounter).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(AnimationCounter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.count > 0) {
        this.animate();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.count > prevProps.count) {
        this.animate();
      }
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this2 = this;

      var badge = _reactDom2.default.findDOMNode(this.refs.badge);
      badge.style['-moz-transform'] = badge.style['-webkit-transform'] = badge.style['-o-transform'] = badge.style['-ms-transform'] = badge.style.transform = this.props.effect[0];
      if (this.props.effect[2]) {
        this.attachStyle(badge, this.props.effect[2]);
      }

      var startTime = getTime();
      var timer = undefined;
      var waitOrFinish = function waitOrFinish() {
        var lastTime = getTime();
        var frame = Math.floor((lastTime - startTime) / (1000.0 / _this2.props.fps) % _this2.props.frameLength);
        if (frame === _this2.props.frameLength - 1) {
          cancelAnimationFrame(timer);
          badge.style['-moz-transform'] = badge.style['-webkit-transform'] = badge.style['-o-transform'] = badge.style['-ms-transform'] = badge.style.transform = _this2.props.effect[1];
          if (_this2.props.effect[3]) {
            _this2.attachStyle(badge, _this2.props.effect[3]);
          }
        } else {
          timer = requestAnimationFrame(waitOrFinish);
        }
      };
      waitOrFinish();
    }
  }, {
    key: 'attachStyle',
    value: function attachStyle(node, style) {
      for (var key in style) {
        node.style[key] = style[key];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var value = this.props.label || this.props.count;
      return _react2.default.createElement(
        'span',
        { ref: 'badge', style: this.props.style, className: this.props.className },
        value
      );
    }
  }]);

  return AnimationCounter;
})(_react2.default.Component);

AnimationCounter.propTypes = {
  count: _react2.default.PropTypes.number,
  label: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.object,
  effect: _react2.default.PropTypes.array,
  fps: _react2.default.PropTypes.number,
  frameLength: _react2.default.PropTypes.number,
  className: _react2.default.PropTypes.string
};

AnimationCounter.defaultProps = {
  count: 1,
  label: null,
  style: {},
  effect: _Effect2.default.SCALE,
  fps: 60.0,
  frameLength: 30.0
};

exports.default = AnimationCounter;