const React = require('react')
const Tile = (props) => (
    <div className='outer'>
        <div className='buy'>
            <a href='javascript:;'>BUY</a>
        </div>
        <div className='inner'>
            <a href='livingroom.html' target='_blank'>
                <h2>{props.days}</h2>
                <h3>{props.ticker}</h3>
                <h3>{props.predictions}</h3>
            </a>
        </div>
        <div className='sell'>
            <a href='javascript:;'>BUY</a>
        </div>
    </div>
)

const {string} = React.PropTypes

// Tile.propTypes = {
//   title: string.isRequired,
//   description: string.isRequired,
//   year: string.isRequired,
//   poster: string
// }

module.exports = Tile
