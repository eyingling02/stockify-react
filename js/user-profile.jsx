const React = require('react')
const {Link} = require('react-router')

const Personal = require('./user-personal-details')
const TopStats = require('./user-top-stats')
const NextUpcoming = require('./user-next-upcoming')
const PersonalBest = require('./user-personal-best')
const GoToUser = require('./user-go-to-user')
const UserPortfolio = require('./user-portfolio')
// const UserPortfolio = require('./my-portfolio')

const data = require('../data')

class User extends React.Component {
    render() {
        return (
          <div className="individual-user">
            <div className='user-top-section'>
                <div className='personal'><Personal /></div>
                <div className='topstats'><TopStats /></div>
                <div className='gotouser'><GoToUser /></div>
            </div>
            <div className='user-mid-section'>
                <div className='nextupcoming'><NextUpcoming /></div>
                <div className='personalbest'><PersonalBest /></div>
            </div>
            <div className='user-bottom-section'>
                <div className='userportfolio'><UserPortfolio /></div>
            </div>
          </div>
        )
    }
}

module.exports = User
