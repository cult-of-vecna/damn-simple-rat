import { validString } from './Validators'

export default class Bot {
  constructor (
    readonly id: string,
  ) {
    this.id = validString(id, 'BAD_MESSAGE_ID')
  }

  public static fromJSON = (json: any) => new Bot(
    json.id
  )
}