import { Document, Types } from 'mongoose'

interface IOrderItem extends Document {
  menuId: {
    type: Types.ObjectId
    ref: 'Menu'
  }
  quantity: number
  options: string[]
}

interface IOrder extends Document {
  guestId: Types.ObjectId
  createdAt: string
  items: IOrderItem[]
  total: number
}

export { IOrderItem, IOrder }
