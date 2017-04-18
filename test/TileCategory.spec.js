import React from 'react'
import TileCategory from '../js/TileCategory.jsx'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('TileCategory snapshot test', () => {
  const component = shallow(<TileCategory />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
