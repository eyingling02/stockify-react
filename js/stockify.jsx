const React = require('react')
import ReactDOM from 'react-dom'
// import { Match } from 'react-router'
// import { Provider } from 'react-redux'
// import store from './store'
// import AsyncRoute from './AsyncRoute'
const Landing = require('./Landing')

// const User = require('./user-profile')
// const Stock = require('./stock-profile')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Stockify = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    {/* <Route path='/user' component={User} />
    <Route path='/stock' component={Stock} /> */}
  </Router>
)

ReactDOM.render(<Stockify />, document.getElementById('stockify'))
