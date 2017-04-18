const React = require('react')
const Landing = require('./Landing').default
import { Match } from 'react-router'
const User = require('./User')

const Stockify = () => {
  return(
    <div className='stocks'>
           <Match
             exactly
             pattern='/'
             component={Landing}
           />
           <Match
             exactly
             pattern='/users'
             component={User}
           />
    </div>
  )
}
export default Stockify
