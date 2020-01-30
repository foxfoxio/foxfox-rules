export class HeroStats implements IHeroStats {
  ap = 0

  constructor(ap: number = 0) {
    this.ap = ap
  }
}

export interface IHeroStats {
  ap: number
}

export class MonsterStats implements IMonsterStats {
  req_ap = 0

  constructor(req_ap: number = 0) {
    this.req_ap = req_ap
  }
}

export interface IMonsterStats {
  /*
   * Required action point
   */
  req_ap: number
}
