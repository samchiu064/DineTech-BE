import mongoose, { Schema } from 'mongoose'
import { IOrderItem, IOrder } from '../interfaces'
import { getDateTime } from '../utils'

const orderItemSchema = new Schema<IOrderItem>(
  {
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
  },
  { versionKey: false }
)

const orderSchema = new Schema<IOrder>(
  {
    guestId: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
      required: true,
    },
    items: [{ type: orderItemSchema, required: true }],
    total: {
      type: Number,
    },
    createdAt: {
      type: String,
      required: true,
      default: getDateTime(),
    },
  },
  { versionKey: false }
)

export default mongoose.models.Order || mongoose.model('Order', orderSchema)
