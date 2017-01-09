const React = require('react')
const {Link} = require('react-router')

const StockName = require('./stock-name')
const StockCurrentPrice = require('./stock-current-price')
const StockKeyData = require('./stock-key-data')

// const Chart = require('./stock-chart')
// const ChartPrediction = require('./stock-chart-prediction')
// const Filters = require('./stock-filter-big-name')
// const Sorting = require('./stock-sort-user-text')
// const OpinionsPredictions = require('./stock-opinions')

const data = require('../data')

class Stock extends React.Component {
    render() {
        return (
          <div className="individual-stock">
            <div className='stock-top-section'>
                <div className='stock-name'><StockName /></div>
                <div className='stock-current-price'><StockCurrentPrice /></div>
                <div className='stock-key-data'><StockKeyData /></div>
            </div>
            {/* <div className='stock-main-chart-section'>
                <div className='chart'><Chart /></div>
                <div className='chart-prediction'><ChartPrediction /></div>
            </div>
            <div className='stock-mid-filter-section'>
                <div className='stock-filters'><Filters /></div>
            </div>
            <div className='stock-bottom-text-section'>
                <div className='sort-user-text'><Sorting /></div>
                <div className='user-text'><OpinionsPredictions /></div>
            </div> */}
          </div>
        )
    }
}

module.exports = Stock
