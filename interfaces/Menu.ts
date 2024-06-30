import { Document } from 'mongoose'

interface IMenu extends Document {
  name: string
  price: number
  description: string
  image: string
  category: string
  stock: number
}

export { IMenu }
