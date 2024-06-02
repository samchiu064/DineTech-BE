import mongoose, { Schema } from 'mongoose'
import { IMenu } from '../interfaces'

const menuSchema = new Schema<IMenu>({
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
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
})

export default mongoose.models.Menu || mongoose.model('Menu', menuSchema)
