import mongoose, { Schema } from 'mongoose'
import { IMenu } from '../interfaces'

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
      enum: [
        'pasta',
        'rice',
        'beverage',
        'dessert',
        'topping',
        'spiciness',
        'ice',
        'sugar',
      ],
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
)

export default mongoose.models.Menu || mongoose.model('Menu', menuSchema)
