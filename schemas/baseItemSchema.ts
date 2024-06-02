import { Schema } from 'mongoose'

const baseItemSchema = new Schema({
  menuId: {
    type: Schema.Types.ObjectId,
    ref: 'Menu',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity can not be less then 1.'],
  },
  option: {
    type: String,
    required: true,
  },
  extras: {
    type: [Object],
  },
})

export default baseItemSchema
