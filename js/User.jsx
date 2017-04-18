const React = require('react')
const {Link} = require('react-router')

const UserPersonalDetails = require('./UserPersonalDetails')
const NextUpcoming = require('./UserNextUpcoming')
const PersonalBest = require('./UserPersonalBest')
const GoToUser = require('./UserGoToUser')
const UserPortfolio = require('./UserPortfolio')

const data = require('../data')

class User extends React.Component {
    render() {
        return (
          <div className="individual-user">
            <div className='user-top-section'>
                <div className='personal'><UserPersonalDetails /></div>
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
