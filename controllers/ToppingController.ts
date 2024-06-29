import { Request, Response, NextFunction } from 'express'
import { handleSuccess, createAppError } from '../services'
import Topping from '../models/Topping'

export const getToppings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let topping
  if (req.query.category) {
    topping = await Topping.find({ category: req.query.category })
  } else {
    topping = await Topping.find()
  }

  handleSuccess(req, res, topping)
}

export const createTopping = async (req: Request, res: Response) => {
  const { name, category, price } = req.body
  const newTopping = new Topping({ name, category, price })
  await newTopping.save()
  handleSuccess(req, res, newTopping, 201)
}

export const updateTopping = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name, category, price } = req.body
  const updatedTopping = await Topping.findByIdAndUpdate(
    id,
    { name, category, price },
    {
      new: true,
    }
  )
  handleSuccess(req, res, updatedTopping)
}

export const deleteTopping = async (req: Request, res: Response) => {
  const { id } = req.params
  await Topping.findByIdAndDelete(id)
  handleSuccess(req, res, { message: '已清除該筆資料' })
}

export const deleteAllToppings = async (req: Request, res: Response) => {
  await Topping.deleteMany()
  handleSuccess(req, res, { message: '已成功清除所有資料' })
}
