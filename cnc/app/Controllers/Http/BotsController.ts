import * as Repo from 'App/Repos'
import * as Domain from 'App/Domains'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { v4 as uuidv4 } from 'uuid'

export default class BotsController {
  public getMultiple = async ({ response }: HttpContextContract) => {
    const maybeBots = await Repo.Bots.getMultiple()
    if (!maybeBots.length)
      return response.noContent()
    
    const bots = maybeBots.map(bot => Domain.Bot.fromJSON(bot))

    return response.ok(bots)
  }

  public insert = async ({ response }: HttpContextContract) => {
    const bot = Domain.Bot.fromJSON({ id: uuidv4() })

    const insertedBot = await Repo.Bots.insert(bot)
      .then(bot => Domain.Bot.fromJSON(bot))

    return response.ok(insertedBot)
  }
}
