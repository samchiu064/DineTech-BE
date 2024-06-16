import mongoose, { Schema } from 'mongoose'
import { IFeedback } from '../interfaces'
import { getDateTime } from '../utils'

const feedbackSchema = new Schema<IFeedback>(
  {
    guestId: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
      required: true,
    },
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
    createdAt: {
      type: String,
      required: true,
      default: getDateTime(),
    },
  },
  { versionKey: false }
)

export default mongoose.models.Feedback ||
  mongoose.model('Feedback', feedbackSchema)
