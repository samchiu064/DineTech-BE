import { ICartItem, ICart } from './cart'

interface IOrderItem extends ICartItem {
  status: 'pending' | 'completed' | 'cancelled'
}

interface IOrder extends ICart {
  items: IOrderItem[]
}

export { IOrderItem, IOrder }
