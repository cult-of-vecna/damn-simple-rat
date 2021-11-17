import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Message extends BaseModel {
  @column({ isPrimary: true })
  public id: string
  
  @column()
  public reply_to: string | null
  
  @column()
  public bot_id: string
  
  @column()
  public content: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
