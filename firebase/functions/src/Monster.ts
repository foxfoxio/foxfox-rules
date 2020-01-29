import { INonPlayableStats } from './Stats'

export default class Monster implements IMonster {
  stats: INonPlayableStats

  constructor(stats: INonPlayableStats) {
    this.stats = stats
  }
}

export interface IMonster {
  stats: INonPlayableStats
}
