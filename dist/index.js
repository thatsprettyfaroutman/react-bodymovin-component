'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bodymovin = require('bodymovin');

var _bodymovin2 = _interopRequireDefault(_bodymovin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bodymovin = function (_Component) {
  _inherits(Bodymovin, _Component);

  function Bodymovin(props) {
    _classCallCheck(this, Bodymovin);

    var _this = _possibleConstructorReturn(this, (Bodymovin.__proto__ || Object.getPrototypeOf(Bodymovin)).call(this, props));

    _this._played = props.played;
    _this._speed = props.speed;
    _this._dom = null;
    _this._anim = null;
    return _this;
  }

  _createClass(Bodymovin, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._anim = _bodymovin2.default.loadAnimation({
        container: this._dom,
        renderer: 'svg',
        loop: this.props.loop,
        autoplay: this.props.autoplay,
        animationData: this.props.src
      });

      if (this._played) {
        this._anim.goToAndStop(0xffffff, true);
      }

      this._anim.setSpeed(this.props.speed);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.speed !== this._speed) {
        this._anim.setSpeed(nextProps.speed);
        this._speed = nextProps.speed;
      }

      if (this._played !== nextProps.played) {
        if (!this._played) {
          this._anim.setDirection(1);
          this._anim.goToAndPlay(1, true);
        } else {
          this._anim.setDirection(-1);
          this._anim.goToAndPlay(0xffffff, true);
        }
        this._played = nextProps.played;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._anim.destroy();
      this._anim = null;
      this._dom = null;
      this._speed = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = this.props.className;

      return _react2.default.createElement('div', {
        className: (0, _classnames2.default)('Bodymovin', className),
        ref: function ref(dom) {
          return _this2._dom = dom;
        }
      });
    }
  }]);

  return Bodymovin;
}(_react.Component);

Bodymovin.propTypes = {
  src: _propTypes2.default.object.isRequired,
  speed: _propTypes2.default.number,
  played: _propTypes2.default.bool,
  loop: _propTypes2.default.bool,
  autoplay: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

Bodymovin.defaultProps = {
  speed: 1,
  played: false,
  loop: false,
  autoplay: false,
  className: null
};

exports.default = Bodymovin;