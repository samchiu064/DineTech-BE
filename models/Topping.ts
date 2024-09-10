import mongoose, { Schema } from 'mongoose'
import { ITopping } from '../interfaces/Topping.js'

const TopingSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['pasta', 'rice', 'beverage', 'dessert'],
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
)

export default mongoose.model<ITopping>('Topping', TopingSchema)
