'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AnimationCounter = _interopRequireDefault(require("./AnimationCounter"));

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

var NotificationBadge =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NotificationBadge, _React$Component);

  function NotificationBadge(props) {
    var _this;

    _classCallCheck(this, NotificationBadge);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NotificationBadge).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(NotificationBadge, [{
    key: "render",
    value: function render() {
      var badgeStyle = this.merge(styles.badge, this.props.style);
      var containerStyle = this.merge(styles.container, this.props.containerStyle);
      var value = this.props.count > 0 ? _react["default"].createElement(_AnimationCounter["default"], {
        key: "badgekey",
        style: badgeStyle,
        className: this.props.className,
        count: this.props.count,
        label: this.props.label,
        effect: this.props.effect,
        fps: this.props.fps,
        frameLength: this.props.frameLength
      }) : undefined;
      return _react["default"].createElement("div", {
        style: containerStyle
      }, value);
    }
  }, {
    key: "merge",
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
}(_react["default"].Component);

NotificationBadge.propTypes = {
  containerStyle: _propTypes["default"].object,
  count: _propTypes["default"].number,
  label: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  effect: _propTypes["default"].array,
  fps: _propTypes["default"].number,
  frameLength: _propTypes["default"].number
};
NotificationBadge.defaultProps = {
  count: 0,
  style: {},
  containerStyle: {}
};
var _default = NotificationBadge;
exports["default"] = _default;