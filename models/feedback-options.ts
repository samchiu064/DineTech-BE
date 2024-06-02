import mongoose, { Schema } from 'mongoose'
import { IFeedbackOptions } from '../interfaces'

const feedbackOptionsSchema = new Schema<IFeedbackOptions>({
  name: {
    type: String,
    required: true,
  },
})

export default mongoose.models.FeedbackOptions ||
  mongoose.model('FeedbackOptions', feedbackOptionsSchema)
