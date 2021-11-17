import Bot from 'App/Models/Bot'

export default new class BotsRepo {
  public getMultiple = () => Bot.query()
    .select('*')
    .exec()
    .then(bots => bots.map(bot => bot.serialize()))
  
  public insert = (json: any) => Bot.create(json)
    .then(bot => bot.serialize())
}