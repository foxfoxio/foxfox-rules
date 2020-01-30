interface IFFError {
  code: string
}

export default class FFError extends Error implements IFFError {
  code: string

  constructor(code: string, message: string) {
    super(message)
    this.code = code
  }
}

export const ERROR_INSUFFICIENT_AP = new FFError('AP0', 'Not enough AP')
