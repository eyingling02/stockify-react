const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./tile-home')

const User = require('./user-profile')
const Stock = require('./stock-profile')

const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Stockify = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/user' component={User} />
    <Route path='/stock' component={Stock} />
  </Router>
)

ReactDOM.render(<Stockify />, document.getElementById('stocks'))

// ReactDOM.render(<Stockify />, document.getElementById('user'))
