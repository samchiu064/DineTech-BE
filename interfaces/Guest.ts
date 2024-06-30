import { Document } from 'mongoose'

interface IGuest extends Document {
  table: number
  people: number
  startAt: string
}

export { IGuest }
