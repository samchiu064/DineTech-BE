import mongoose, { Schema } from 'mongoose'
import { IGuest } from '../interfaces'

const guestSchema = new Schema<IGuest>({
  table: {
    type: Number,
    required: true,
  },
  guest: {
    type: Number,
    min: 1,
    max: 20,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
})

export default mongoose.models.Guest || mongoose.model('Guest', guestSchema)
