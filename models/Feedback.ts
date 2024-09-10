import mongoose, { Schema } from 'mongoose'
import { IFeedback } from '../interfaces/index.js'
import { getDateTime } from '../utils/index.js'

const feedbackSchema = new Schema<IFeedback>(
  {
    guestId: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
      required: true,
    },
    service: {
      type: Number,
    },
    flow: {
      type: Number,
    },
    speed: {
      type: Number,
    },
    flavor: {
      type: Number,
    },
    price: {
      type: Number,
    },
    sanitation: {
      type: Number,
    },
    impression: {
      type: Number,
    },
    comment: {
      type: String,
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
