const React = require('react')
const TileTrending = (props) => (
    <div className='outer'>
        <div className='buy'>
            <a href='javascript:;'>UP</a>
        </div>
        <div className='inner'>
            <a href='livingroom.html' target='_blank'>
                <h2>{props.Symbol}</h2>
                <h2>{props.ChangePercent}%</h2>
                <h3>{props.CompanyName} days</h3>
            </a>
        </div>
        <div className='sell'>
            <a href='javascript:;'>DOWN</a>
        </div>
    </div>
)

const {string} = React.PropTypes

module.exports = TileTrending
