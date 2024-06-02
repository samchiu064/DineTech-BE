import mongoose, { Schema } from 'mongoose'
import { ICartItem, ICart } from '../interfaces'
import baseItemSchema from '../schemas/baseItemSchema'
import transactionSchema from '../schemas/transactionSchema'

const cartItemSchema = new Schema<ICartItem>({
  ...baseItemSchema.obj,
})

const cartSchema = new Schema<ICart>({
  ...transactionSchema.obj,
  items: [cartItemSchema],
})

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema)
