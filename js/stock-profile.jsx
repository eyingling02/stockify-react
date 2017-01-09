const React = require('react')
const {Link} = require('react-router')

const Topline = require('./stock-topline')
const Chart = require('./stock-chart')
const ChartPrediction = require('./stock-chart-prediction')
const Filters = require('./stock-filter-big-name')
const Sorting = require('./stock-sort-little-text')
const OpinionsPredictions = require('./stock-opinions')

const data = require('../data')

class Stock extends React.Component {
    render() {
        return (
          <div className="individual-stock">
            <div className='stock-top-section'>
                <div className='personal'><Personal /></div>
                <div className='topstats'><TopStats /></div>
                <div className='gotostock'><GoToUser /></div>
            </div>
            <div className='stock-mid-section'>
                <div className='nextupcoming'><NextUpcoming /></div>
                <div className='personalbest'><PersonalBest /></div>
            </div>
            <div className='stock-bottom-section'>
                <div className='stockportfolio'><UserPortfolio /></div>
            </div>
          </div>
        )
    }
}

module.exports = Stock
