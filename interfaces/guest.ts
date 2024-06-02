import { Document } from 'mongoose'

interface IGuest extends Document {
  table: number
  guest: number
  date: Date
  time: string
}

export { IGuest }
