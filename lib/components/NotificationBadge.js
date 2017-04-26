'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _AnimationCounter = require('./AnimationCounter');

var _AnimationCounter2 = _interopRequireDefault(_AnimationCounter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },

  badge: {
    WebkitTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    MozTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    msTransition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    display: 'inline-block',
    position: 'absolute',
    minWidth: '10px',
    padding: '3px 7px',
    fontSize: '12px',
    fontWeight: '700',
    lineHeight: '1',
    color: '#fff',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    backgroundColor: 'rgba(212, 19, 13, 1)',
    borderRadius: '10px',
    top: '-2px',
    right: '-2px'
  }
};

var NotificationBadge = function (_React$Component) {
  _inherits(NotificationBadge, _React$Component);

  function NotificationBadge(props) {
    _classCallCheck(this, NotificationBadge);

    var _this = _possibleConstructorReturn(this, (NotificationBadge.__proto__ || Object.getPrototypeOf(NotificationBadge)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(NotificationBadge, [{
    key: 'render',
    value: function render() {
      var badgeStyle = this.merge(styles.badge, this.props.style);
      var containerStyle = this.merge(styles.container, this.props.containerStyle);
      var value = this.props.count > 0 ? _react2.default.createElement(_AnimationCounter2.default, {
        key: 'badgekey',
        style: badgeStyle,
        className: this.props.className,
        count: this.props.count,
        label: this.props.label,
        effect: this.props.effect,
        fps: this.props.fps,
        frameLength: this.props.frameLength
      }) : undefined;

      return _react2.default.createElement(
        'div',
        { style: containerStyle },
        value
      );
    }
  }, {
    key: 'merge',
    value: function merge(obj1, obj2) {
      var obj = {};
      for (var attrname1 in obj1) {
        if (obj1.hasOwnProperty(attrname1)) {
          obj[attrname1] = obj1[attrname1];
        }
      }
      for (var attrname2 in obj2) {
        if (obj2.hasOwnProperty(attrname2)) {
          obj[attrname2] = obj2[attrname2];
        }
      }
      return obj;
    }
  }]);

  return NotificationBadge;
}(_react2.default.Component);

NotificationBadge.propTypes = {
  containerStyle: _propTypes2.default.object,
  count: _propTypes2.default.number,
  label: _propTypes2.default.string,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,
  effect: _propTypes2.default.array,
  fps: _propTypes2.default.number,
  frameLength: _propTypes2.default.number
};

NotificationBadge.defaultProps = {
  count: 0,
  style: {},
  containerStyle: {}
};

exports.default = NotificationBadge;