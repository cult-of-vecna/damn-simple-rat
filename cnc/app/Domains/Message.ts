import { validString } from './Validators'

export default class Message {
  constructor (
    readonly id: string,
    readonly replyTo: string | null,
    readonly content: string,
    readonly botId: string,
  ) {
    this.id = validString(id, 'BAD_MESSAGE_ID')
    this.replyTo = replyTo ? validString(replyTo, 'BAD_MESSAGE_REPLY_TO') : null
    this.content = validString(content, 'BAD_MESSAGE_CONTENT')
    this.botId = validString(botId, 'BAD_MESSAGE_BOT_ID')
  }

  public static fromJSON = (json: any) => new Message(
    json.id,
    json.replyTo,
    json.content,
    json.botId,
  )
}