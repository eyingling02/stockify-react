import React from 'react'
import TileMyFavorites from '../js/TileMyFavorites.jsx'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('MyFavorites snapshot test', () => {
  const component = shallow(<TileMyFavorites />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
