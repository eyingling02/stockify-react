import React from 'react'
import { Link } from 'react-router'
import TileHotStreak from './tile-hotstreak'
import TileTrending from './tile-trending'
import TileMyFavorites from './tile-myfavorites'
import TileFriendsOpinions from './tile-friendsopinions'
import TileCategory from './tile-category'

const data = require('../data')

const Landing = React.createClass({
    render() {
        return (
            <div id="picks">
                <div className="row">
                  <div className="category">
                    <p>My Favorites</p>
                  </div>
                  <div className="regular slider">
                    {data.MyFavorites.map((stock) => (<TileMyFavorites {...stock} key={stock.Symbol}/>))}
                  </div>
                </div>
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
                   <p>#Hashtags</p>
                 </div>
                 <div className="regular slider">
                   {data.FriendsOpinions.map((stock) => (<TileFriendsOpinions {...stock} key={stock.UserId}/>))}
                 </div>
               </div>
               <div className="row">
                 <div className="category">
                   <p>Shared News</p>
                 </div>
                 <div className="regular slider">
                   {data.FriendsOpinions.map((stock) => (<TileFriendsOpinions {...stock} key={stock.UserId}/>))}
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
                        <p>Trending</p>
                    </div>
                    <div className="regular slider">
                      {data.TrendingHigher.map((stock) => (<TileTrending {...stock} key={stock.Symbol}/>))}
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
})

export default Landing
