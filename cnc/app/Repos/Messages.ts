import Message from 'App/Models/Message'

type GetMultiple = {
  botId: string
}

export default new class MessageRepo {
  public getMultiple = ({ botId }: GetMultiple) => Message.query()
    .select('*')
    .where('bot_id', botId)
    .exec()
    .then(messages => messages.map(message => message.serialize()))
  
  public insert = (payload: any) => Message.create(payload)
    .then(message => message.serialize())
}