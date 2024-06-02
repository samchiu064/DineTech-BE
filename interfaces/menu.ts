import { Document, Schema } from 'mongoose'

interface IMenuExtras extends Document {
  menuId: typeof Schema.Types.ObjectId
  name: string
  price: number
}

interface IMenuOptions extends Document {
  menuId: typeof Schema.Types.ObjectId
  name: string
  type: string
}

interface IMenu extends Document {
  name: string
  price: number
  description: string
  image: string
  category: string
  type: string
  stock: number
}

export { IMenuExtras, IMenuOptions, IMenu }
