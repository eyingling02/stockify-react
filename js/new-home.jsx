const React = require('react')
const {Link} = require('react-router')
const TileHotStreak = require('./tile-hotstreak')
const TileTrending = require('./tile-trending')
const TileMyFavorites = require('./tile-myfavorites')
const TileFriendsOpinions = require('./tile-friendsopinions')
const TileCategory = require('./tile-category')

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
    <div className="row">
      <div className="category">
          <p>My Favorites</p>
      </div>
    </div>
    <div className="regular slider">
      {data.MyFavorites.map((stock) => (<TileMyFavorites {...stock} key={stock.Symbol} />))}
    </div>
    <div className="row">
      <div className="category">
          <p>Friends Opinions</p>
      </div>
    </div>
    <div className="regular slider">
      {data.FriendsOpinions.map((stock) => (<TileFriendsOpinions {...stock} key={stock.UserId} />))}
    </div>
    <div className="row">
      <div className="category">
          <p>Industry: Technology</p>
      </div>
    </div>
    <div className="regular slider">
      {data.Category.map((stock) => (<TileCategory {...stock} key={stock.Symbol} />))}
    </div>
  </div>
)

module.exports = Home
