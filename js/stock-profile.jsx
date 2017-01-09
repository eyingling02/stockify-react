const React = require('react')
const {Link} = require('react-router')

const Topline = require('./stock-topline')
const Chart = require('./stock-chart')
const ChartPrediction = require('./stock-chart-prediction')
const Filters = require('./stock-filter-big-name')
const Sorting = require('./stock-sort-user-text')
const OpinionsPredictions = require('./stock-opinions')

const data = require('../data')

class Stock extends React.Component {
    render() {
        return (
          <div className="individual-stock">
            <div className='stock-top-stock-section'>
                <div className='topline'><Topline /></div>
            </div>
            <div className='stock-main-chart-section'>
                <div className='chart'><Chart /></div>
                <div className='chart-prediction'><ChartPrediction /></div>
            </div>
            <div className='stock-mid-filter-section'>
                <div className='stock-filters'><Filters /></div>
            </div>
            <div className='stock-bottom-text-section'>
                <div className='sort-user-text'><Sorting /></div>
                <div className='user-text'><OpinionsPredictions /></div>
            </div>
          </div>
        )
    }
}

module.exports = Stock
