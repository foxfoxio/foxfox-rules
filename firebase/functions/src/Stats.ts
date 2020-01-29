export class PlayableStats implements IPlayableStats {
  ap = 0

  constructor(ap: number = 0) {
    this.ap = ap
  }
}

export interface IPlayableStats {
  ap: number
}

export class NonPlayableStats implements INonPlayableStats {
  req_ap = 0

  constructor(req_ap: number = 0) {
    this.req_ap = req_ap
  }
}

export interface INonPlayableStats {
  /*
   * Required action point
   */
  req_ap: number
}
