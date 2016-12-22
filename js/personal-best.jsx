const React = require('react')
const PersonalBest = () => (
  <div>
    <p className="upcoming-title">Personal Best</p>
    <div className="upcoming-left">
      <p className="upcoming-stock">NVDA</p>
      <p className="upcoming-prediction">Duration: 60 Days</p>
      <p className="upcoming-prediction">Accuracy: 5%</p>
      <p className="upcoming-prediction">Gain/Loss: +$85,000</p>
    </div>
    <div className="upcoming-right">
      <p className="upcoming-opinion">"Love this stock, poised to make huge gains timing is right for them. I want to verbally double down on NVDA. It's really pushing limits like Facebook in 2015. It's got a death grip on all the major pieces of future tech ( as per previous posts). It's still a major buy for me and about to move into a different phase both in market expectations and product shifts (as mass market adopts things like VR and automated cars, and AI, and robotics). Still a major long term buy."</p>
      <a href="#">more</a>
    </div>
  </div>
)

module.exports = PersonalBest
