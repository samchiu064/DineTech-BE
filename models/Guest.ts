import mongoose, { Schema } from 'mongoose'
import { IGuest } from '../interfaces/index.js'
import { getDateTime } from '../utils/index.js'

const guestSchema = new Schema<IGuest>(
  {
    table: {
      type: Number,
      required: true,
    },
    people: {
      type: Number,
      min: 1,
      max: 20,
      required: true,
    },
    startAt: {
      type: String,
      required: true,
      default: getDateTime(),
    },
  },
  { versionKey: false }
)

export default mongoose.models.Guest || mongoose.model('Guest', guestSchema)
