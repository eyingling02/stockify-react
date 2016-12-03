const React = require('react')
const {Link} = require('react-router')
const data = require('../data')

const Home = () => (
  <div className='outer'>
    <div className='buy'>
    </div>
    <div className='inner'>
      {data.stocks.map((stock) => (
        <a href='livingroom.html' target='_blank'>
          <h2> {stock.hotstreaks.days} </h2>
          <h3> {stock.hotstreaks.ticker} </h3>
          <h3> {stock.hotstreaks.predictions} </h3>
        </a>

      ))}

    </div>
  </div>

)


module.exports = Home
