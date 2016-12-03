const React = require('react')
const {Link} = require('react-router')
const Tile = require('./tile')
const data = require('../data')

const Home = () => (
    <div className="streaks row">
        <div className="category">
            {data.hotstreaks.map((stock) => (<Tile {...stock} key={stock.user_id} />))}
        </div>
    </div>
)

module.exports = Home
