import { IMonsterStats } from './Stats'

export default class Monster implements IMonster {
  stats: IMonsterStats

  constructor(stats: IMonsterStats) {
    this.stats = stats
  }
}

export interface IMonster {
  stats: IMonsterStats
}
