const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./new-home')

const User = require('./user-profile')

// const Favorites = require('./favorites')
// const Opinions = require('./opinions')
// const Streaks = require('./streaks')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Stockify = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Home} />
    <Route path='/user' component={User} />
  </Router>
)


ReactDOM.render(<Stockify />, document.getElementById('stocks'))

// ReactDOM.render(<Stockify />, document.getElementById('user'))
