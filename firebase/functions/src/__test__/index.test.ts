import Hero from '../Hero'
import Monster from '../Monster'
import { PlayableStats, NonPlayableStats } from '../Stats'

import { battle } from '../'
import { INSUFFICIENT_AP } from '../FFError'

beforeAll(async () => {
  //
})

afterAll(async () => {
  //
})

test("Insufficient player's AP should throw Error", () => {
  // Player has not enough AP
  const hero = new Hero(new PlayableStats(0))
  const monster = new Monster(new NonPlayableStats(1))
  expect(() => battle(hero, monster)).toThrowError(INSUFFICIENT_AP)
})

test('Player should spend AP for battle', () => {
  // Player has enough AP
  const hero = new Hero(new PlayableStats(1))
  const monster = new Monster(new NonPlayableStats(1))
  const result = battle(hero, monster)

  expect(result.a?.stats.ap).toEqual(0)
})

test.skip('Player should get XP after battle', () => {})
