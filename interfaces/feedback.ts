import { Document } from 'mongoose'

interface IFeedbackOptions extends Document {
  name: string
}

interface IFeedback extends Document {
  service: number
  flow: number
  speed: number
  flavor: number
  price: number
  sanitation: number
  impression: number
  comment: string
}

export { IFeedback, IFeedbackOptions }
