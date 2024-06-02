import mongoose, { Schema } from 'mongoose'
import { IFeedback } from '../interfaces'

const feedbackSchema = new Schema<IFeedback>({
  service: {
    type: Number,
    required: true,
  },
  flow: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  flavor: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sanitation: {
    type: Number,
    required: true,
  },
  impression: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Feedback ||
  mongoose.model('Feedback', feedbackSchema)
