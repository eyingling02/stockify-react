import React from 'react'
import TileHotStreak from '../js/TileHotStreak.jsx'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('HotStreak snapshot test', () => {
  const component = shallow(<TileHotStreak />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
