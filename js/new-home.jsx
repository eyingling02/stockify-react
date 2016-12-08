const React = require('react')
const {Link} = require('react-router')
const TileHotStreak = require('./tile-hotstreak')
const TileTrending = require('./tile-trending')

const data = require('../data')

const Home = () => (
  <div id="picks">
    <div className="streaks row">
      <div className="category">
          <p>Hot Streaks</p>
      </div>
    </div>
    <div className="regular slider">
      {data.Hotstreak.map((stock) => (<TileHotStreak {...stock} key={stock.UserId} />))}
    </div>

    <div className="row">
      <div className="category">
          <p>Trending</p>
      </div>
    </div>
    <div className="regular slider">
      {data.TrendingHigher.map((stock) => (<TileTrending {...stock} key={stock.Symbol} />))}
    </div>
  </div>
)

module.exports = Home
