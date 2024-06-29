import { Request, Response } from 'express'
import { handleSuccess } from '../services'
import Order from '../models/Order'

export const getOrders = async (req: Request, res: Response) => {
  const { guestId } = req.query
  if (guestId) {
    const orders = await Order.find({ guestId: guestId }).populate(
      'items.menuId',
      'name price'
    )
    handleSuccess(req, res, orders)
  } else {
    const orders = await Order.find().populate('items.menuId', 'name price')
    handleSuccess(req, res, orders)
  }
}

export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params
  const order = await Order.findById(id).populate('items.menuId', 'name price')
  handleSuccess(req, res, order)
}

export const createOrder = async (req: Request, res: Response) => {
  const { guestId, items, total } = req.body
  const newOrder = new Order({
    guestId,
    items,
    total,
  })
  await newOrder.save()
  handleSuccess(req, res, newOrder, 201)
}

export const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params
  const { items, total } = req.body
  const updatedOrder = await Order.findByIdAndUpdate(
    id,
    { items, total },
    {
      new: true,
    }
  )
  handleSuccess(req, res, updatedOrder)
}

export const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params
  await Order.findByIdAndDelete(id)
  handleSuccess(req, res, { message: '已清除該筆資料' })
}

export const deleteAllOrders = async (req: Request, res: Response) => {
  await Order.deleteMany()
  handleSuccess(req, res, { message: '已成功清除所有資料' })
}
