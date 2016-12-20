const React = require('react')
const {Link} = require('react-router')

const Personal = require('./personal-profile')
const TopStats = require('./top-stats')
const NextUpcoming = require('./next-upcoming')
const PersonalBest = require('./personal-best')
const GoToUser = require('./go-to-user')
// const FidelityPortfolio = require('./')

const data = require('../data')

class User extends React.Component {
    render() {
        return (
          <div>
            <div><Personal /></div>
            <div><TopStats /></div>
            <div><GoToUser /></div>
            <div><NextUpcoming /></div>
            <div><PersonalBest /></div>
          </div>
        )
    }
}

module.exports = User
