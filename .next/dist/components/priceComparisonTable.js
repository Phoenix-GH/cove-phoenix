"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/fred/dev/brava-website/components/priceComparisonTable.js";

exports.default = function () {
  return _react2.default.createElement("div", { className: "priceComparisonTable text-center", __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_reactstrap.Row, { className: "mt-5  align-items-center", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: { borderRight: '1px solid #969696' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("img", { src: "/static/images/logoBlue.png", style: pcTableLogoStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), _react2.default.createElement(_reactstrap.Col, { xs: 3, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Them"))), _react2.default.createElement(_reactstrap.Row, { className: "no-gutters", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: 6, style: pcTableColLeft, __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, "Long term contracts"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColMid, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, "Not our style"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColRight, __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "3-5 years")), _react2.default.createElement(_reactstrap.Row, { className: "no-gutters", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: 6, style: pcTableColLeft, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Monthly Monitoring"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColMid, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "$19.99"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColRight, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "$44.99")), _react2.default.createElement(_reactstrap.Row, { className: "no-gutters", __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: 6, style: pcTableColLeft, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Cancellation Fees"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColMid, __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "None"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColRight, __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "High as $2000", _react2.default.createElement("p", { style: { fontSize: '10px' }, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Crazy, we know"))), _react2.default.createElement(_reactstrap.Row, { className: "no-gutters", __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: 6, style: pcTableColLeft, __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "Service Windows"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColMid, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, "None"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColRight, __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "1 - 3 weeks")), _react2.default.createElement(_reactstrap.Row, { className: "no-gutters", __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: 6, style: pcTableColLeft, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, "Finance Equipment at 0% APR"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColMid, __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, "Yes"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColRight, __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, "No")), _react2.default.createElement(_reactstrap.Row, { className: "no-gutters", __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: 6, style: pcTableColLeft, __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "Warranty"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColMid, __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, "3 years"), _react2.default.createElement(_reactstrap.Col, { xs: 3, style: pcTableColRight, __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, "3 years"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, "$45 service calls"))));
};

var pcTableLogoStyle = {
  paddingBottom: '10px'
};

var pcTableColLeft = {
  borderRight: '1px solid #969696',
  fontWeight: 700,
  fontSize: '24px'
};

var pcTableColMid = {
  height: '33px',
  color: '#33c8f8',
  fontFamily: 'AvenirNext',
  fontSize: '24px'
};

var pcTableColRight = {
  color: '#ff0000',
  fontSize: '24px'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcHJpY2VDb21wYXJpc29uVGFibGUuanMiXSwibmFtZXMiOlsiUm93IiwiQ29sIiwiYm9yZGVyUmlnaHQiLCJwY1RhYmxlTG9nb1N0eWxlIiwicGNUYWJsZUNvbExlZnQiLCJwY1RhYmxlQ29sTWlkIiwicGNUYWJsZUNvbFJpZ2h0IiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwiZm9udFdlaWdodCIsImhlaWdodCIsImNvbG9yIiwiZm9udEZhbWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBSyxBQUVkOzs7Ozs7a0JBQWUsWUFBQTt5QkFDYixjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsaUNBQUksV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLGlDQUFJLElBQUwsQUFBUztnQkFBVDtrQkFERixBQUNFLEFBRUE7QUFGQTtzQkFFQSxBQUFDLGlDQUFJLElBQUwsQUFBUyxHQUFHLE9BQU8sRUFBRSxhQUFyQixBQUFtQixBQUFlO2dCQUFsQztrQkFBQSxBQUNFO0FBREY7NENBQ08sS0FBTCxBQUFTLCtCQUErQixPQUF4QyxBQUErQztnQkFBL0M7a0JBSkosQUFHRSxBQUNFLEFBRUY7QUFGRTt1QkFFRixBQUFDLGlDQUFJLElBQUwsQUFBUztnQkFBVDtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBUk4sQUFDRSxBQU1FLEFBQ0UsQUFHSiwyQkFBQSxBQUFDLGlDQUFJLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxpQ0FBSSxJQUFMLEFBQVMsR0FBRyxPQUFaLEFBQW1CO2dCQUFuQjtrQkFBQTtBQUFBO0tBREYsQUFDRSxBQUdBLHdDQUFBLEFBQUMsaUNBQUksSUFBTCxBQUFTLEdBQUcsT0FBWixBQUFtQjtnQkFBbkI7a0JBQUE7QUFBQTtLQUpGLEFBSUUsQUFHQSxrQ0FBQSxBQUFDLGlDQUFJLElBQUwsQUFBUyxHQUFHLE9BQVosQUFBbUI7Z0JBQW5CO2tCQUFBO0FBQUE7S0FsQkosQUFXRSxBQU9FLEFBSUYsK0JBQUEsQUFBQyxpQ0FBSSxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsaUNBQUksSUFBTCxBQUFTLEdBQUcsT0FBWixBQUFtQjtnQkFBbkI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFHQSx1Q0FBQSxBQUFDLGlDQUFJLElBQUwsQUFBUyxHQUFHLE9BQVosQUFBbUI7Z0JBQW5CO2tCQUFBO0FBQUE7S0FKRixBQUlFLEFBR0EsMkJBQUEsQUFBQyxpQ0FBSSxJQUFMLEFBQVMsR0FBSSxPQUFiLEFBQW9CO2dCQUFwQjtrQkFBQTtBQUFBO0tBN0JKLEFBc0JFLEFBT0UsQUFJRiw0QkFBQSxBQUFDLGlDQUFJLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxpQ0FBSSxJQUFMLEFBQVMsR0FBRyxPQUFaLEFBQW1CO2dCQUFuQjtrQkFBQTtBQUFBO0tBREYsQUFDRSxBQUdBLHNDQUFBLEFBQUMsaUNBQUksSUFBTCxBQUFTLEdBQUksT0FBYixBQUFvQjtnQkFBcEI7a0JBQUE7QUFBQTtLQUpGLEFBSUUsQUFHQSx5QkFBQSxBQUFDLGlDQUFJLElBQUwsQUFBUyxHQUFJLE9BQWIsQUFBb0I7Z0JBQXBCO2tCQUFBO0FBQUE7S0FFRSxpQ0FBQSxjQUFBLE9BQUcsT0FBTyxFQUFFLFVBQVosQUFBVSxBQUFZO2dCQUF0QjtrQkFBQTtBQUFBO0tBMUNOLEFBaUNFLEFBT0UsQUFFRSxBQUtKLHFDQUFBLEFBQUMsaUNBQUksV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLGlDQUFJLElBQUwsQUFBUyxHQUFHLE9BQVosQUFBbUI7Z0JBQW5CO2tCQUFBO0FBQUE7S0FERixBQUNFLEFBR0Esb0NBQUEsQUFBQyxpQ0FBSSxJQUFMLEFBQVMsR0FBRyxPQUFaLEFBQW1CO2dCQUFuQjtrQkFBQTtBQUFBO0tBSkYsQUFJRSxBQUdBLHlCQUFBLEFBQUMsaUNBQUksSUFBTCxBQUFTLEdBQUksT0FBYixBQUFvQjtnQkFBcEI7a0JBQUE7QUFBQTtLQXRESixBQStDRSxBQU9FLEFBSUYsaUNBQUEsQUFBQyxpQ0FBSSxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsaUNBQUksSUFBTCxBQUFTLEdBQUcsT0FBWixBQUFtQjtnQkFBbkI7a0JBQUE7QUFBQTtLQURGLEFBQ0UsQUFHQSxnREFBQSxBQUFDLGlDQUFJLElBQUwsQUFBUyxHQUFHLE9BQVosQUFBbUI7Z0JBQW5CO2tCQUFBO0FBQUE7S0FKRixBQUlFLEFBR0Esd0JBQUEsQUFBQyxpQ0FBSSxJQUFMLEFBQVMsR0FBSSxPQUFiLEFBQW9CO2dCQUFwQjtrQkFBQTtBQUFBO0tBakVKLEFBMERFLEFBT0UsQUFJRix3QkFBQSxBQUFDLGlDQUFJLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyxpQ0FBSSxJQUFMLEFBQVMsR0FBRyxPQUFaLEFBQW1CO2dCQUFuQjtrQkFBQTtBQUFBO0tBREYsQUFDRSxBQUdBLDZCQUFBLEFBQUMsaUNBQUksSUFBTCxBQUFTLEdBQUcsT0FBWixBQUFtQjtnQkFBbkI7a0JBQUE7QUFBQTtLQUpGLEFBSUUsQUFHQSw0QkFBQSxBQUFDLGlDQUFJLElBQUwsQUFBUyxHQUFJLE9BQWIsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EsNEJBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBL0VPLEFBQ2IsQUFxRUUsQUFPRSxBQUVFO0FBL0VSOztBQXFGQSxJQUFNO2lCQUFOLEFBQXlCLEFBQ1I7QUFEUSxBQUN2Qjs7QUFHRixJQUFNO2VBQWlCLEFBQ1IsQUFDYjtjQUZxQixBQUVULEFBQ1o7WUFIRixBQUF1QixBQUdYO0FBSFcsQUFDckI7O0FBS0YsSUFBTTtVQUFnQixBQUNaLEFBQ1I7U0FGb0IsQUFFYixBQUNQO2NBSG9CLEFBR1IsQUFDWjtZQUpGLEFBQXNCLEFBSVY7QUFKVSxBQUNwQjs7QUFNRixJQUFNO1NBQWtCLEFBQ2YsQUFDUDtZQUZGLEFBQXdCLEFBRVo7QUFGWSxBQUN0QiIsImZpbGUiOiJwcmljZUNvbXBhcmlzb25UYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9mcmVkL2Rldi9icmF2YS13ZWJzaXRlIn0=