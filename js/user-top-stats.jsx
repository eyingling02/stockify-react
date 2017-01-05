const React = require('react')
const TopStats = () => (
    <div>
        <p className="quarter">Most Active Stocks</p>
        <div className="stat-blocks">
          <p className="topstat-title">#1</p>
          <p className="topstat-stock">NVDA</p>
        </div>
        <div className="stat-blocks">
          <p className="topstat-title">#2</p>
          <p className="topstat-stock">AMZN</p>
        </div>
        <div className="stat-blocks">
          <p className="topstat-title">#3</p>
          <p className="topstat-stock">YELP</p>
        </div>

        {/* <div className="stat-blocks">
          <p>Daily Picks</p>
          <p>269</p>
        </div>
        <div className="stat-blocks">
          <p>Avg Streak</p>
          <p>2.8</p>
        </div>
        <div className="stat-blocks">
          <p>Gain/Loss</p>
          <p>+$15,249</p>
        </div> */}
    </div>
)

module.exports = TopStats
