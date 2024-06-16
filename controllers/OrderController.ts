import { Request, Response } from 'express'
import { handleSuccess, createAppError } from '../services'
import Order from '../models/Order'

export const getOrders = async (req: Request, res: Response) => {
  let orders
  if (req.query.id) {
    orders = await Order.findById(req.query.id).populate('menuId', 'name')
  } else {
    orders = await Order.find().populate('menuId', 'name')
  }
  handleSuccess(req, res, orders)
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
