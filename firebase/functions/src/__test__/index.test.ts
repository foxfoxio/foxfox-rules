import Hero from '../Hero'
import Monster from '../Monster'
import { HeroStats, MonsterStats } from '../Stats'

import { battle } from '../'
import { ERROR_INSUFFICIENT_AP } from '../FFError'

beforeAll(async () => {
  //
})

afterAll(async () => {
  //
})

describe('🗡 Actor', () => {
  test.skip(`[Hero → Stats]      : Hero should have some initial stats.`, () => {
    // DEFAULT_HERO_STATS
    // hp
    // mp
    // ap
    // xp
    // lv
    // max_hp
    // max_mp
    // max_ap
    // max_xp
    // win
    // lost
  })

  test.skip(`[Monster → Stats]   : Monster should have some initial stats.`, () => {
    // DEFAULT_MONSTER_STATS
    // hp
    // req_ap
    // xp
    // lv
    // items : gem, red-potion, blue-potion
    // win
    // lost
  })

  test.skip(`[Monster → Stats]   : Monster level can be different each hour.`, () => {})
})

describe('⚔️ Battle', () => {
  test(`[AP → Battle]            : Hero should get error when AP unmet requirement.`, () => {
    // Hero has not enough AP
    const hero = new Hero(new HeroStats(0))
    const monster = new Monster(new MonsterStats(1))
    expect(() => battle(hero, monster)).toThrowError(ERROR_INSUFFICIENT_AP)
  })

  test(`[AP → Battle]            : Hero should spend AP for battle as required.`, () => {
    // Hero has enough AP
    const hero = new Hero(new HeroStats(1))
    const monster = new Monster(new MonsterStats(1))
    const result = battle(hero, monster)

    expect(result.a?.stats.ap).toEqual(0)
  })
})

describe('🎊 Battle rewards', () => {
  test.skip(`[Battle → AP]       : Hero should get AP+1 back if win.`, () => {})
  test.skip(`[Battle → XP]       : Hero should get some XP after battle.`, () => {})
  test.skip(`[Battle → NULL]     : Hero should not get XP after revisit win battle.`, () => {})
  test.skip(`[Battle → GEM]      : Hero should get some GEM after battle.`, () => {})
  test.skip(`[Battle → NULL]     : Hero should not get GEM after revisit win battle.`, () => {})
})

describe('🗡 Actor stats', () => {
  test.skip(`[XP → LV]           : Hero should get LV up when XP reach curtain number.`, () => {})
  test.skip(`[LV → MAX_HP ]      : Max HP should increase when LV up.`, () => {})
  test.skip(`[LV → MAX_MP ]      : Max MP should increase when LV up.`, () => {})
  test.skip(`[LV → MAX_AP ]      : Max AP should increase when LV up.`, () => {})
})

describe('🧪 Items', () => {
  test.skip(`[RED_POTION → HP]   : HP should increase when took red potion.`, () => {})
  test.skip(`[BLUE_POTION → MP]  : MP should increase when took blue potion.`, () => {})

  test.skip(`[GEM → RED_POTION]  : Hero should able to buy red potion by gem.`, () => {})
  test.skip(`[GEM → BLUE_POTION] : Hero should able to buy blue potion by gem.`, () => {})
})

describe('⚔️ Battle penalty', () => {
  test.skip(`[Battle → HP]       : Hero's HP should decrease when make wrong answer.`, () => {})
  test.skip(`[HP → Dead]         : Hero should declare dead when HP reach to 0.`, () => {})
  test.skip(`[Dead → penalty]    : Hero should get penalty when dead.`, () => {
    // HP = 100%
    // AP = AP + 3
    // GEM = -50%
  })
})

test.skip(``, () => {})
