import { Schema } from 'mongoose'

const transactionSchema = new Schema({
  guestId: {
    type: Schema.Types.ObjectId,
    ref: 'Guest',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  submittedAt: {
    type: Date,
  },
})

export default transactionSchema
