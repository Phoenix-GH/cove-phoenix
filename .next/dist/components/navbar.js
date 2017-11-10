'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/fred/dev/brava-website/components/navbar.js';

exports.default = function (props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_reactstrap.Navbar, { color: 'faded', light: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_reactstrap.NavbarBrand, { href: '/', className: 'mr-auto', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('img', { src: '/static/images/logoBlack.png', __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), ' '), _react2.default.createElement(_reactstrap.Nav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, props.showOrderBtn ? orderBtn : ''), _react2.default.createElement(_reactstrap.NavbarToggler, { className: 'mr-2', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_reactstrap.Collapse, { navbar: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_reactstrap.Nav, { navbar: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_reactstrap.NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_reactstrap.NavLink, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, 'About Us')), _react2.default.createElement(_reactstrap.NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_reactstrap.NavLink, { href: '/Contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Contact'))))));
};

var primaryRectangle = {
  borderRadius: '0px',
  width: '253px',
  height: '59px',
  border: '1px solid #969696',
  background: '#34c9f9',
  boxShadow: '0px 2px 4px rgba:(0,0,0,0.5)',
  color: '#000000',
  fontFamily: 'AvenirNext',
  fontSize: '20px',
  fontWeight: '700',
  textAlign: 'center',
  paddingTop: '10px'
};

var orderBtn = _react2.default.createElement(_link2.default, { href: '/products', __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  }
}, _react2.default.createElement(_reactstrap.NavItem, { style: (0, _extends3.default)({}, primaryRectangle, { marginRight: '10px ' }), __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  }
}, 'Order Now'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbIk5hdiIsIk5hdkl0ZW0iLCJOYXZiYXIiLCJOYXZiYXJCcmFuZCIsIk5hdmJhclRvZ2dsZXIiLCJOYXZMaW5rIiwiQ29sbGFwc2UiLCJMaW5rIiwicHJvcHMiLCJzaG93T3JkZXJCdG4iLCJvcmRlckJ0biIsInByaW1hcnlSZWN0YW5nbGUiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsImJvcmRlciIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nVG9wIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFLLEFBQVMsQUFBUSxBQUFhLEFBQWUsQUFBUzs7QUFDcEUsQUFBTyxBQUVQOzs7Ozs7OztrQkFBZSxVQUFBLEFBQUMsT0FBRDt5QkFDYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsb0NBQU8sT0FBUixBQUFjLFNBQVEsT0FBdEI7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMseUNBQVksTUFBYixBQUFrQixLQUFJLFdBQXRCLEFBQWdDO2dCQUFoQztrQkFBQSxBQUEwQztBQUExQzs0Q0FBK0MsS0FBTCxBQUFTO2dCQUFUO2tCQUExQyxBQUEwQztBQUFBO01BRDVDLEFBQ0UsQUFDQSxzQkFBQSxBQUFDOztnQkFBRDtrQkFBQSxBQUNHO0FBREg7QUFBQSxXQUNHLEFBQU0sZUFBTixBQUFxQixXQUgxQixBQUVFLEFBQ21DLEFBR25DLHFCQUFBLEFBQUMsMkNBQWUsV0FBaEIsQUFBMEI7Z0JBQTFCO2tCQU5GLEFBTUUsQUFDQTtBQURBO3NCQUNBLEFBQUMsc0NBQVMsUUFBVjtnQkFBQTtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxpQ0FBSSxRQUFMO2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLHFDQUFRLE1BQVQsQUFBYztnQkFBZDtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUYsOEJBQUEsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxxQ0FBUSxNQUFULEFBQWM7Z0JBQWQ7a0JBQUE7QUFBQTtLQWZHLEFBQ2IsQUFDRSxBQU9FLEFBQ0UsQUFJRSxBQUNFO0FBZlo7O0FBd0JBLElBQU07Z0JBQW1CLEFBQ1QsQUFDZDtTQUZ1QixBQUVoQixBQUNQO1VBSHVCLEFBR2YsQUFDUjtVQUp1QixBQUlmLEFBQ1I7Y0FMdUIsQUFLWCxBQUNaO2FBTnVCLEFBTVosQUFDWDtTQVB1QixBQU9oQixBQUNQO2NBUnVCLEFBUVgsQUFDWjtZQVR1QixBQVNiLEFBQ1Y7Y0FWdUIsQUFVWCxBQUNaO2FBWHVCLEFBV1osQUFDWDtjQVpGLEFBQXlCLEFBWVg7QUFaVyxBQUN2Qjs7QUFjRixJQUFNLDJCQUNKLEFBQUMsZ0NBQUssTUFBTixBQUFXO2NBQVg7Z0JBQUEsQUFDRTtBQURGO0NBQUEsa0JBQ0UsQUFBQyxxQ0FBUSxrQ0FBQSxBQUFXLG9CQUFrQixhQUF0QyxBQUFTLEFBQTBDO2NBQW5EO2dCQUFBO0FBQUE7R0FGSixBQUNFLEFBQ0UiLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2ZyZWQvZGV2L2JyYXZhLXdlYnNpdGUifQ==