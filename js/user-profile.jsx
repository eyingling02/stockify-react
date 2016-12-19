const React = require('react')
const {Link} = require('react-router')

const Personal = require('./personal')
// const TopStats = require('./')
// const NextUpcoming = require('./')
// const QuarterBest = require('./')
// const FidelityPortfolio = require('./')

const data = require('../data')

class User extends React.Component {
    render() {
        return (
            // <div className="">Test</div>
            <div><Personal /></div>
        )
    }
}

module.exports = User
