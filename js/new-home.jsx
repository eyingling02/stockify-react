const React = require('react')
const {Link} = require('react-router')
const Tile = require('./tile')
const data = require('../data')

const Home = () => (
  <div id="picks">
    <div className="streaks row">
      <div className="category">
          <p>Hot Streaks</p>
      </div>
    </div>
    <div className="regular slider">
      {data.Hotstreak.map((stock) => (<Tile {...stock} key={stock.UserId} />))}
    </div>
  </div>
)

module.exports = Home
