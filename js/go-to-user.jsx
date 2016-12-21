const React = require('react')
const GoToUser = () => (
  <div>
    <p className="goto">Go to </p>
    <div className="dropdown">
      <button onclick="myFunction()" className="dropbtn">Dropdown</button>
      <div className="myDropdown" className="dropdown-content">
        <a href="#">Victor</a>
        <a href="#">Erica</a>
        <a href="#">Grace</a>
      </div>
    </div>
  </div>
)

module.exports = GoToUser
