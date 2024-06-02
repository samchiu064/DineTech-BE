import mongoose, { Schema } from 'mongoose'
import { IOrderItem, IOrder } from '../interfaces'
import baseItemSchema from '../schemas/baseItemSchema'
import transactionSchema from '../schemas/transactionSchema'

const orderItemSchema = new Schema<IOrderItem>({
  ...baseItemSchema.obj,
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  },
})

const orderSchema = new Schema<IOrder>({
  ...transactionSchema.obj,
  items: [orderItemSchema],
})

export default mongoose.models.Order || mongoose.model('Order', orderSchema)
