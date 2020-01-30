import { IHeroStats } from './Stats'

export default class Hero implements IHero {
  stats: IHeroStats
  apAt?: Date

  constructor(stats: IHeroStats) {
    this.stats = stats
  }
}

export interface IHero {
  stats: IHeroStats
  apAt?: Date // UNIX_TIMESTAMP for last AP
}
