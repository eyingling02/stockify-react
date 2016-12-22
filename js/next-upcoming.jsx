const React = require('react')
const NextUpcoming = () => (
  <div>
    <p className="upcoming-title">Next Upcoming</p>
    <div className="upcoming-left">
      <p className="upcoming-stock">TSLA</p>
      <p className="upcoming-prediction">10 days left</p>
      <p className="upcoming-prediction">Buy: Correct</p>
      <p className="upcoming-prediction">Price: $210 (+5%)</p>
    </div>
    <div className="upcoming-right">
      <p className="upcoming-opinion">"This is a huge win for Elon. He doesn't care about money he cares about long term progress. TSLA books are scary red, like super risk trajectory. Likely all a massive calculated risk for Elon, which makes complete sense. TSLA stock is still a long term buy for me but short term sell. Solar is a long term sell (+2 years) it's just not ready for prime time and there's still going to be Trump backed oil headwinds. When all the pieces fall into place: Powerwall, Solar shingles, Cars. Will the economy able to afford their products?"</p>
      <a href="#">more</a>
    </div>
  </div>
)

module.exports = NextUpcoming
