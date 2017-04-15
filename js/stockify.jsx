const React = require('react')
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import AsyncRoute from './AsyncRoute'

const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const Stockify = () => {
  return(

    <Provider store={store}>
  <div className='stocks'>
    <Match
      exactly
      pattern='/'
      component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./Home')} />}
    />
    <Match
      pattern='/user'
      component={(props) => {
        return <AsyncRoute props={props} loadingPromise={System.import('./User')} />
      }}
    />
    <Match
      pattern='/stock'
      component={(props) => {
        return <AsyncRoute props={props} loadingPromise={System.import('./Stock')} />
      }}
    />
  </div>
</Provider>

  )
}

export default Stockify
