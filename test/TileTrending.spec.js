import React from 'react'
import TileTrending from '../js/TileTrending.jsx'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('TileTrending snapshot test', () => {
  const component = shallow(<TileTrending />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
