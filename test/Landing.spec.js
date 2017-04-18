import React from 'react'
import Landing from '../js/Landing.jsx'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import TileTrending from '../js/TileTrending.jsx'
import TileHotStreak from '../js/TileHotStreak.jsx'
import TileMyFavorites from '../js/TileMyFavorites.jsx'
import TileFriendsOpinions from '../js/TileFriendsOpinions.jsx'
import preload from '../data.json'

test('Landing snapshot test', () => {
  const component = shallow(<Landing />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Landing page renders the correct number of stock tiles for the Hot Streaks category', () => {
  const component = shallow(<Landing />)
  expect(preload.Hotstreak.length).toEqual(component.find(TileHotStreak).length)
})

test('Landing page renders the correct number of stock tiles for the My Favorites category', () => {
  const component = shallow(<Landing />)
  expect(preload.MyFavorites.length).toEqual(component.find(TileMyFavorites).length)
})

test('Landing page renders the correct number of stock tiles for the Friends Opinions category', () => {
  const component = shallow(<Landing />)
  expect(preload.FriendsOpinions.length).toEqual(component.find(TileFriendsOpinions).length)
})

test('Landing page renders the correct number of stock tiles for the Trending Higher category', () => {
  const component = shallow(<Landing />)
  expect(preload.TrendingHigher.length).toEqual(component.find(TileTrending).length)
})
