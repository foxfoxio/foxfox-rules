import { IPlayableStats } from './Stats'

export default class Hero implements IHero {
  stats: IPlayableStats
  apAt?: Date

  constructor(stats: IPlayableStats) {
    this.stats = stats
  }
}

export interface IHero {
  stats: IPlayableStats
  apAt?: Date // UNIX_TIMESTAMP for last AP
}
