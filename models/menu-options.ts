import mongoose, { Schema } from 'mongoose'
import { IMenuOptions } from '../interfaces'

const menuOptionsSchema = new Schema<IMenuOptions>({
  menuId: {
    type: Schema.Types.ObjectId,
    ref: 'Menu',
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

export default mongoose.models.MenuOption ||
  mongoose.model('MenuOption', menuOptionsSchema)
