import * as Validator from 'App/Validators'
import * as Domain from 'App/Domains'
import * as Repo from 'App/Repos'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { v4 as uuidv4 } from 'uuid'

export default class MessagesController {
  public getMultiple = async ({ request, response }: HttpContextContract) => {
    const { botId } = await request.validate(Validator.Message.GetMultiple)

    const maybeMessages = await Repo.Messages.getMultiple({ botId })
    if (!maybeMessages.length)
      return response.noContent()
    
    const messages = maybeMessages.map(message => Domain.Message.fromJSON(message))

    return response.ok(messages)
  }

  public insert = async ({ request, response }: HttpContextContract) => {
    const { replyTo, botId, content } = await request.validate(Validator.Message.Insert)

    const message = Domain.Message.fromJSON({ id: uuidv4(), replyTo, botId, content })

    const insertedMessage = await Repo.Messages.insert(message)
    
    return response.ok(insertedMessage)
  }
}
