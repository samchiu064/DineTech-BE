import { Document, Types } from 'mongoose'

interface IFeedback extends Document {
  guestId: Types.ObjectId
  service: number
  flow: number
  speed: number
  flavor: number
  price: number
  sanitation: number
  impression: number
  comment: string
  createdAt: string
}

export { IFeedback }
