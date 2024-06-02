import { Document, Schema } from 'mongoose'

interface ICartItem extends Document {
  menuId: typeof Schema.Types.ObjectId
  quantity: number
  option: string
  extras: any[]
}

interface ICart extends Document {
  guestId: typeof Schema.Types.ObjectId
  items: ICartItem[]
  createdAt: Date
  submittedAt: Date
}

export { ICartItem, ICart }
