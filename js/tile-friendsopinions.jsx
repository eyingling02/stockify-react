const React = require('react')
const TileFriendsOpinions = (props) => (
    <div className='outer'>
        <div className='buy'>
            <a href='javascript:;'>BUY</a>
        </div>
        <div className='inner'>
            <a href='livingroom.html' target='_blank'>
                <h2>{props.Symbol}</h2>
                <h3>{props.Opinion}</h3>
                <h3>{props.Username}</h3>
            </a>
        </div>
        <div className='sell'>
            <a href='javascript:;'>SELL</a>
        </div>
    </div>
)

const {string} = React.PropTypes

// TileTrending.propTypes = {
//   title: string.isRequired,
//   description: string.isRequired,
//   year: string.isRequired,
//   poster: string
// }

module.exports = TileFriendsOpinions
