const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./new-home')
// const Favorites = require('./favorites')
// const Opinions = require('./opinions')
// const Streaks = require('./streaks')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Stockify = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Home}>
    </Route>
  </Router>
)


ReactDOM.render(<Stockify />, document.getElementById('stocks'))
