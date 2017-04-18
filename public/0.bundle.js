webpackJsonp([0],{

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(28);

var _tileHotstreak = __webpack_require__(75);

var _tileHotstreak2 = _interopRequireDefault(_tileHotstreak);

var _tileTrending = __webpack_require__(77);

var _tileTrending2 = _interopRequireDefault(_tileTrending);

var _tileMyfavorites = __webpack_require__(76);

var _tileMyfavorites2 = _interopRequireDefault(_tileMyfavorites);

var _tileFriendsopinions = __webpack_require__(74);

var _tileFriendsopinions2 = _interopRequireDefault(_tileFriendsopinions);

var _tileCategory = __webpack_require__(73);

var _tileCategory2 = _interopRequireDefault(_tileCategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = __webpack_require__(78);

var Landing = _react2.default.createClass({
  displayName: 'Landing',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { id: 'picks' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'p',
            null,
            'My Favorites'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'regular slider' },
          data.MyFavorites.map(function (stock) {
            return _react2.default.createElement(_tileMyfavorites2.default, _extends({}, stock, { key: stock.Symbol }));
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'streaks row' },
        _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'p',
            null,
            'Hot Streaks'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'regular slider' },
          data.Hotstreak.map(function (stock) {
            return _react2.default.createElement(_tileHotstreak2.default, _extends({}, stock, { key: stock.UserId }));
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'p',
            null,
            '#Hashtags'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'regular slider' },
          data.FriendsOpinions.map(function (stock) {
            return _react2.default.createElement(_tileFriendsopinions2.default, _extends({}, stock, { key: stock.UserId }));
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'p',
            null,
            'Shared News'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'regular slider' },
          data.FriendsOpinions.map(function (stock) {
            return _react2.default.createElement(_tileFriendsopinions2.default, _extends({}, stock, { key: stock.UserId }));
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'p',
            null,
            'Friends Opinions'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'regular slider' },
          data.FriendsOpinions.map(function (stock) {
            return _react2.default.createElement(_tileFriendsopinions2.default, _extends({}, stock, { key: stock.UserId }));
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'p',
            null,
            'Trending'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'regular slider' },
          data.TrendingHigher.map(function (stock) {
            return _react2.default.createElement(_tileTrending2.default, _extends({}, stock, { key: stock.Symbol }));
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'category' },
          _react2.default.createElement(
            'p',
            null,
            'Industry: Technology'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'regular slider' },
          data.Category.map(function (stock) {
            return _react2.default.createElement(_tileCategory2.default, _extends({}, stock, { key: stock.Symbol }));
          })
        )
      )
    );
  }
});

exports.default = Landing;

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var React = __webpack_require__(1);
var TileCategory = function TileCategory(props) {
    return React.createElement(
        'div',
        { className: 'outer' },
        React.createElement(
            'div',
            { className: 'buy' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'BUY'
            )
        ),
        React.createElement(
            'div',
            { className: 'inner' },
            React.createElement(
                'a',
                { href: 'livingroom.html', target: '_blank' },
                React.createElement(
                    'h2',
                    null,
                    props.Symbol
                ),
                React.createElement(
                    'h2',
                    null,
                    props.ChangePercent,
                    '%'
                ),
                React.createElement(
                    'h3',
                    null,
                    props.CompanyName,
                    ' days'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'sell' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'SELL'
            )
        )
    );
};

var string = React.PropTypes.string;


module.exports = TileCategory;

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var React = __webpack_require__(1);
var TileFriendsOpinions = function TileFriendsOpinions(props) {
    return React.createElement(
        'div',
        { className: 'outer' },
        React.createElement(
            'div',
            { className: 'buy' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'UP'
            )
        ),
        React.createElement(
            'div',
            { className: 'inner' },
            React.createElement(
                'a',
                { href: 'livingroom.html', target: '_blank' },
                React.createElement(
                    'h2',
                    null,
                    props.Symbol
                ),
                React.createElement(
                    'p',
                    null,
                    props.Opinion
                ),
                React.createElement(
                    'p',
                    null,
                    props.Username
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'sell' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'DOWN'
            )
        )
    );
};

var string = React.PropTypes.string;

// TileTrending.propTypes = {
//   title: string.isRequired,
//   description: string.isRequired,
//   year: string.isRequired,
//   poster: string
// }

module.exports = TileFriendsOpinions;

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var React = __webpack_require__(1);
var TileHotStreak = function TileHotStreak(props) {
    return React.createElement(
        'div',
        { className: 'outer' },
        React.createElement(
            'div',
            { className: 'buy' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'BUY'
            )
        ),
        React.createElement(
            'div',
            { className: 'inner' },
            React.createElement(
                'a',
                { href: 'livingroom.html', target: '_blank' },
                React.createElement(
                    'h2',
                    null,
                    props.Ticker
                ),
                React.createElement(
                    'h3',
                    null,
                    props.StreakInDays,
                    ' predictions!'
                ),
                React.createElement(
                    'h3',
                    null,
                    props.PredictionCount,
                    ' days'
                ),
                React.createElement(
                    'h3',
                    null,
                    props.Username
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'sell' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'SELL'
            )
        )
    );
};

var string = React.PropTypes.string;

// Tile.propTypes = {
//   title: string.isRequired,
//   description: string.isRequired,
//   year: string.isRequired,
//   poster: string
// }

module.exports = TileHotStreak;

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var React = __webpack_require__(1);
var TileMyFavorites = function TileMyFavorites(props) {
    return React.createElement(
        'div',
        { className: 'outer' },
        React.createElement(
            'div',
            { className: 'buy' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'BUY'
            )
        ),
        React.createElement(
            'div',
            { className: 'inner' },
            React.createElement(
                'a',
                { href: 'livingroom.html', target: '_blank' },
                React.createElement(
                    'h2',
                    null,
                    props.Symbol
                ),
                React.createElement(
                    'p',
                    null,
                    'Today G/L: ',
                    props.TodayGainLoss,
                    '%'
                ),
                React.createElement(
                    'p',
                    null,
                    'Total G/L: ',
                    props.TotalGainLoss,
                    '%'
                ),
                React.createElement(
                    'p',
                    null,
                    'Total Picks: ',
                    props.Duration,
                    ' days'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'sell' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'SELL'
            )
        )
    );
};

var string = React.PropTypes.string;

// TileTrending.propTypes = {
//   title: string.isRequired,
//   description: string.isRequired,
//   year: string.isRequired,
//   poster: string
// }

module.exports = TileMyFavorites;

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var React = __webpack_require__(1);
var TileTrending = function TileTrending(props) {
    return React.createElement(
        'div',
        { className: 'outer' },
        React.createElement(
            'div',
            { className: 'buy' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'UP'
            )
        ),
        React.createElement(
            'div',
            { className: 'inner' },
            React.createElement(
                'a',
                { href: 'livingroom.html', target: '_blank' },
                React.createElement(
                    'h2',
                    null,
                    props.Symbol
                ),
                React.createElement(
                    'h2',
                    null,
                    props.ChangePercent,
                    '%'
                ),
                React.createElement(
                    'h3',
                    null,
                    props.CompanyName,
                    ' days'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'sell' },
            React.createElement(
                'a',
                { href: 'javascript:;' },
                'DOWN'
            )
        )
    );
};

var string = React.PropTypes.string;

// TileTrending.propTypes = {
//   title: string.isRequired,
//   description: string.isRequired,
//   year: string.isRequired,
//   poster: string
// }

module.exports = TileTrending;

/***/ },

/***/ 78:
/***/ function(module, exports) {

module.exports = {
	"Hotstreak": [
		{
			"UserId": 1,
			"Username": "thevictorchen",
			"Ticker": "GILD",
			"PredictionCount": 4,
			"StreakInDays": 8
		},
		{
			"UserId": 2,
			"Username": "erica",
			"Ticker": "AMZN",
			"PredictionCount": 4,
			"StreakInDays": 8
		},
		{
			"UserId": 3,
			"Username": "thenelson",
			"Ticker": "GILD",
			"PredictionCount": 4,
			"StreakInDays": 8
		},
		{
			"UserId": 4,
			"Username": "thenelson",
			"Ticker": "AMZN",
			"PredictionCount": 4,
			"StreakInDays": 8
		},
		{
			"UserId": 5,
			"Username": "erica",
			"Ticker": "AMZN",
			"PredictionCount": 4,
			"StreakInDays": 8
		}
	],
	"TrendingHigher": [
		{
			"Symbol": "S",
			"ChangePercent": 8.94,
			"CompanyName": "Sprint Corporation"
		},
		{
			"Symbol": "TWTR",
			"ChangePercent": 6.86,
			"CompanyName": "Twitter"
		},
		{
			"Symbol": "VLO",
			"ChangePercent": 4.36,
			"CompanyName": "Valero Energy Corporation Commo"
		},
		{
			"Symbol": "X",
			"ChangePercent": 4.28,
			"CompanyName": "United States Steel"
		},
		{
			"Symbol": "JCP",
			"ChangePercent": 4.19,
			"CompanyName": "J.C. Penney Company"
		},
		{
			"Symbol": "CBS",
			"ChangePercent": 4.05,
			"CompanyName": "CBS Corporation Class B Common"
		},
		{
			"Symbol": "F",
			"ChangePercent": 3.98,
			"CompanyName": "Ford Motor Company"
		},
		{
			"Symbol": "AEO",
			"ChangePercent": 3.96,
			"CompanyName": "American Eagle Outfitters"
		},
		{
			"Symbol": "TSLA",
			"ChangePercent": 3.93,
			"CompanyName": "Tesla Motors"
		},
		{
			"Symbol": "LGF",
			"ChangePercent": 3.69,
			"CompanyName": "Lions Gate Entertainment Corpor"
		},
		{
			"Symbol": "GRPN",
			"ChangePercent": 3.66,
			"CompanyName": "Groupon"
		},
		{
			"Symbol": "GM",
			"ChangePercent": 3.51,
			"CompanyName": "General Motors Company Common S"
		},
		{
			"Symbol": "DAL",
			"ChangePercent": 3.38,
			"CompanyName": "Delta Air Lines"
		},
		{
			"Symbol": "BBY",
			"ChangePercent": 3.37,
			"CompanyName": "Best Buy Co."
		},
		{
			"Symbol": "MA",
			"ChangePercent": 3.19,
			"CompanyName": "Mastercard Incorporated Common"
		}
	],
	"TrendingLower": [
		{
			"Symbol": "UAA",
			"ChangePercent": -6.8,
			"CompanyName": "Under Armour"
		},
		{
			"Symbol": "AMC",
			"ChangePercent": -3.4,
			"CompanyName": "AMC Entertainment Holdings"
		},
		{
			"Symbol": "PRDSY",
			"ChangePercent": -1.75,
			"CompanyName": ""
		},
		{
			"Symbol": "BMY",
			"ChangePercent": -1.37,
			"CompanyName": "Bristol-Myers Squibb Company Co"
		},
		{
			"Symbol": "PFE",
			"ChangePercent": -1.17,
			"CompanyName": "Pfizer"
		},
		{
			"Symbol": "PFE",
			"ChangePercent": -1.17,
			"CompanyName": "Pfizer"
		},
		{
			"Symbol": "WDAY",
			"ChangePercent": -1.09,
			"CompanyName": "Workday"
		},
		{
			"Symbol": "HAL",
			"ChangePercent": -0.89,
			"CompanyName": "Halliburton Company"
		},
		{
			"Symbol": "BAH",
			"ChangePercent": -0.87,
			"CompanyName": "Booz Allen Hamilton Holding Cor"
		},
		{
			"Symbol": "JNJ",
			"ChangePercent": -0.86,
			"CompanyName": "Johnson & Johnson"
		},
		{
			"Symbol": "DWA",
			"ChangePercent": 0,
			"CompanyName": "Dreamworks Animation Skg"
		},
		{
			"Symbol": "FGNT",
			"ChangePercent": 0,
			"CompanyName": "Fire"
		},
		{
			"Symbol": "BRK",
			"ChangePercent": 0.03,
			"CompanyName": "BurgerKing"
		},
		{
			"Symbol": "TWX",
			"ChangePercent": 0.09,
			"CompanyName": "Time Warner Inc. New"
		},
		{
			"Symbol": "MDT",
			"ChangePercent": 0.15,
			"CompanyName": "Medtronic plc. Ordinary Shares"
		}
	],
	"MyFavorites": [
		{
			"UserId": 1,
			"Symbol": "UA",
			"TodayGainLoss": 1.29,
			"TotalGainLoss": 15.45,
			"Duration": 100
		},
		{
			"UserId": 2,
			"Symbol": "FB",
			"TodayGainLoss": 4.5,
			"TotalGainLoss": 5.45,
			"Duration": 56
		},
		{
			"UserId": 3,
			"Symbol": "NVDA",
			"TodayGainLoss": 1.21,
			"TotalGainLoss": 25.54,
			"Duration": 12
		},
		{
			"UserId": 2,
			"Symbol": "MDT",
			"TodayGainLoss": 4.5,
			"TotalGainLoss": 5.45,
			"Duration": 56
		},
		{
			"UserId": 3,
			"Symbol": "TWX",
			"TodayGainLoss": 1.21,
			"TotalGainLoss": 25.54,
			"Duration": 12
		}
	],
	"FriendsOpinions": [
		{
			"UserId": 1,
			"Symbol": "UA",
			"Opinion": "Nothing good happening in their future. It's a toxic stock that lives with Zynga...",
			"Username": "nelsonchen"
		},
		{
			"UserId": 2,
			"Symbol": "FB",
			"Opinion": "Nothing good happening in their future. It's a toxic stock that lives with Zynga...",
			"Username": "nelsonchen"
		},
		{
			"UserId": 3,
			"Symbol": "NVDA",
			"Opinion": "Nothing good happening in their future. It's a toxic stock that lives with Zynga...",
			"Username": "nelsonchen"
		},
		{
			"UserId": 4,
			"Symbol": "MDT",
			"Opinion": "Nothing good happening in their future. It's a toxic stock that lives with Zynga...",
			"Username": "nelsonchen"
		},
		{
			"UserId": 5,
			"Symbol": "TWX",
			"Opinion": "Nothing good happening in their future. It's a toxic stock that lives with Zynga...",
			"Username": "nelsonchen"
		}
	],
	"Category": [
		{
			"Industry": "Tech",
			"Symbol": "S",
			"ChangePercent": 8.94,
			"CompanyName": "Sprint Corporation"
		},
		{
			"Industry": "Tech",
			"Symbol": "TWTR",
			"ChangePercent": 6.86,
			"CompanyName": "Twitter"
		},
		{
			"Industry": "Tech",
			"Symbol": "VLO",
			"ChangePercent": 4.36,
			"CompanyName": "Valero Energy Corporation Commo"
		},
		{
			"Industry": "Tech",
			"Symbol": "X",
			"ChangePercent": 4.28,
			"CompanyName": "United States Steel"
		},
		{
			"Industry": "Tech",
			"Symbol": "JCP",
			"ChangePercent": 4.19,
			"CompanyName": "J.C. Penney Company"
		}
	]
};

/***/ }

});