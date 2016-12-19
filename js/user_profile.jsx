const React = require('react')
const {Link} = require('react-router')

const Personal = require('./')
const TopStats = require('./')
const NextUpcoming = require('./')
const QuarterBest = require('./')
const FidelityPortfolio = require('./')

const data = require('../data')

class Home extends React.Component {
    render() {
        return (
            <div id="picks">
                <div className="streaks row">
                    <div className="category">
                        <p>Hot Streaks</p>
                    </div>
                    <div className="regular slider">
                        {data.Hotstreak.map((stock) => (<TileHotStreak {...stock} key={stock.UserId}/>))}
                    </div>
               </div>
                <div className="row">
                    <div className="category">
                        <p>Trending</p>
                    </div>
                    <div className="regular slider">
                      {data.TrendingHigher.map((stock) => (<TileTrending {...stock} key={stock.Symbol}/>))}
                    </div>
                </div>
                <div className="row">
                    <div className="category">
                        <p>My Favorites</p>
                    </div>
                    <div className="regular slider">
                      {data.MyFavorites.map((stock) => (<TileMyFavorites {...stock} key={stock.Symbol}/>))}
                    </div>
                </div>
                <div className="row">
                    <div className="category">
                        <p>Friends Opinions</p>
                    </div>
                    <div className="regular slider">
                      {data.FriendsOpinions.map((stock) => (<TileFriendsOpinions {...stock} key={stock.UserId}/>))}
                    </div>
                </div>
                <div className="row">
                    <div className="category">
                        <p>Industry: Technology</p>
                    </div>
                    <div className="regular slider">
                      {data.Category.map((stock) => (<TileCategory {...stock} key={stock.Symbol}/>))}
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Home
