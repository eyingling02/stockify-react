import React from 'react'
import TileFriendsOpinions from '../js/TileFriendsOpinions.jsx'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('FriendsOpinions snapshot test', () => {
  const component = shallow(<TileFriendsOpinions />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
