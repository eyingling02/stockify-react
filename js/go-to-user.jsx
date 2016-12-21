const React = require('react')
const GoToUser = () => (
  <div>
    <p >Go to </p>
    <a href="#">^ Friends Dropdown ^</a>

    <div class="dropdown">
      <button onclick="myFunction()" class="dropbtn">Dropdown</button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#">Victor</a>
        <a href="#">Erica</a>
        <a href="#">Grace</a>
      </div>
    </div>
  </div>
)

module.exports = GoToUser
