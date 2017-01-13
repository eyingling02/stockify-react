const React = require('react')
const StockCurrentPrice = () => (
  <div>
    <div className="stock-key-data">
      <div className="key-data">
        <p>MKT CAP: </p>
        <p>31.37B</p>
      </div>
      <div className="key-data">
        <p>52W HIGH/LOW: </p>
        <p>88.85/45.39</p>
      </div>
      <div className="key-data">
        <p>P/E: </p>
        <p>31.16</p>
      </div>
      <div className="key-data">
        <p>YIELD: </p>
        <p>1.19%</p>
      </div>
    </div>
  </div>
)

module.exports = StockCurrentPrice
