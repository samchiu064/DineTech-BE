import mongoose, { Schema } from 'mongoose'
import { IMenuExtras } from '../interfaces'

const menuExtrasSchema = new Schema<IMenuExtras>({
  menuId: {
    type: Schema.Types.ObjectId,
    ref: 'Menu',
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

export default mongoose.models.MenuExtra ||
  mongoose.model('MenuExtra', menuExtrasSchema)
