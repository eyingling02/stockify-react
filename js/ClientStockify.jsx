import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router'
const Stockify = require('./js/Stockify').default

render(<BrowserRouter><Stockify /></BrowserRouter>, document.getElementById('stocks'))
