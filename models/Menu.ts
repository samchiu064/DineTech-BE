import mongoose, { Schema } from 'mongoose'
import { IMenu } from '../interfaces/index.js'

const menuSchema = new Schema<IMenu>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
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

export default mongoose.models.Menu || mongoose.model('Menu', menuSchema)
