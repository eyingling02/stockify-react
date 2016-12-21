const React = require('react')
const {Link} = require('react-router')

const Personal = require('./personal-details')
const TopStats = require('./top-stats')
const NextUpcoming = require('./next-upcoming')
const PersonalBest = require('./personal-best')
const GoToUser = require('./go-to-user')
// const UserPortfolio = require('./my-portfolio')

const data = require('../data')

class User extends React.Component {
    render() {
        return (
          <div className="individual-user">
            <div className='top-section'>
                <div className='personal'><Personal /></div>
                <div className='topstats'><TopStats /></div>
                <div className='gotouser'><GoToUser /></div>
            </div>
            <div className='nextupcoming'><NextUpcoming /></div>
            <div className='personalbest'><PersonalBest /></div>
          </div>
        )
    }
}

module.exports = User
